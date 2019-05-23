import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../../actions/chamados';
import { STATUS } from '../../constants/list.conf';
import convertDate from "../../config/moment";

const userInfo = JSON.parse(localStorage.getItem('user-info'));

class ChamadosInteracao extends Component {
  constructor(props) {
    super(props);
    this.carregaChamado = this.carregaChamado.bind(this);
    this.adicionarInteracao = this.adicionarInteracao.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      msg: '',
      idTicket: this.props.match.params.id,
      interacao: {
        usuario: '',
        texto: '',
        data: new Date()
      }
    }
  }

  componentDidMount() {
    this.carregaChamado()
  }

  handleInputChange(e) {
    let interacao = Object.assign({}, this.state.interacao);
    interacao[e.target.name] = e.target.value;
    this.setState({ interacao })
  }

  async carregaChamado() {
    this.props.get(this.state.idTicket)
  }

  adicionarInteracao(e) {
    e.preventDefault();
    let interacao = this.state.interacao;
    let usuario = {
      nome: userInfo.nome,
      setor: userInfo.setor,
      ccusto: userInfo.ccusto,
      email: userInfo.email,
    }
    interacao.usuario = usuario;
    let interacoes = { interacoes: [interacao] }
    this.props.postInteract(this.state.idTicket, interacoes)
    this.setState({
      status: '',
      interacao: {
        usuario: '',
        texto: '',
        data: new Date()
      }
    })
  }

  render() {
    const chamado = this.props.chamado;
    return (
      <>
        <button type="button" className="btn btn-danger btn-sm mt-3" onClick={() => {
          this.props.history.goBack()
        }}>&lt; Voltar</button>
        <div className="container mt-4">
          <div className="row">
            <div className="col-4">
              <p><strong>Titulo: </strong>{chamado.titulo}</p>
              {!!(userInfo.nome === chamado.suporte && chamado.status !== 'Encerrado') &&
                <p><strong>Status: </strong>
                  <select className="custom-select custom-select-sm">
                    <option defaultValue >{chamado.status}</option>
                    {STATUS.map((status, index) => (
                      <option key={index} value={status.nome}>{status.nome}</option>
                    ))}
                  </select>
                </p>}
              {!!(userInfo.nome !== chamado.suporte || chamado.status === 'Encerrado') && <p><strong>Status: </strong>{chamado.status}</p>}
              <p className='text-nowrap'><strong>Data Abertura: </strong>{convertDate(chamado.dtAbertura)}</p>
              <p className='text-nowrap'><strong>Data Encerramento: </strong>{convertDate(chamado.dtEncerramento)}</p>
              <p><strong>Setor: </strong>{chamado.setor}</p>
              <p><strong>Categoria: </strong>{chamado.categoria}</p>
              {!!(chamado.categoria.toLowerCase() === 'protheus') &&
                <>
                  <p><strong>Módulo: </strong>{chamado.modulo}</p>
                  <p><strong>Ticket Totvs: </strong>{chamado.totvs}</p>
                </>
              }
              <p><strong>Usuário: </strong>{chamado.usuario.nome}</p>
              <p><strong>Suporte: </strong>{chamado.suporte}</p>
              {!!(chamado.status !== 'Encerrado') &&
                <button name="encerrar" id="encerrar" className="btn btn-primary">Encerrar Chamado</button>
              }
            </div>
            <div className="col-8 pb-5">
              <div className="row mx-4">
                {!!(chamado.status.toLowerCase() !== 'encerrado') &&
                  <>
                    <h4 className='h4'>Interagir no Chamado</h4>
                    <form action="" className='input-group my-3' onSubmit={this.adicionarInteracao}>
                      <div className="input-group mb-3">
                        <div className="input-group">
                          <textarea rows='3' className='form-control' name='texto' placeholder='Descrição do problema' value={this.state.interacao.texto} onChange={this.handleInputChange} />
                        </div>
                        <div className="custom-file mt-3">
                          <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                          <label className="custom-file-label" htmlFor="inputGroupFile01">Adicionar Anexo</label>
                        </div>
                      </div>
                      <input className="btn btn-primary" type="submit" value="Enviar"></input>
                    </form>
                  </>
                }
                {!!this.props.success && <div className='alert alert-success' role="alert">Interação registrada com sucesso!</div>}
              </div>

              <hr />
              {chamado.interacoes.map(interacao => {
                const classe = interacao.setor === interacao.usuario.setor ? 'card border-info mb-3 text-info' : 'card border-success mb-3 text-success'
                return (
                  <div className={classe} key={interacao._id}>
                    <div className="card-header bg-transparent"><strong>{interacao.usuario.nome}</strong> - {convertDate(interacao.data)}</div>
                    <div className="card-body">
                      <p className="card-text">{interacao.texto}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  chamado: state.chamados.chamado,
  success: state.chamados.success
})

const mapDispatchToProps = dispatch => ({
  get: id => dispatch(action.getChamado(id)),
  postInteract: (id, interacoes) => dispatch(action.postInteract(id, interacoes))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChamadosInteracao)

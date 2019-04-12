import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

class FormChamado extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Formik initialValues={this.props.initialValues} onSubmit={this.props.handleSubmit} validationSchema={this.props.validations}>
        <Form className='form-cadastro'>
          <div className='form-input'>
            <Field  className='field' name='titulo' placeholder='Titulo' type='text'/>
            <ErrorMessage className='error' component='span' name='titulo'/>
          </div>
          <div className='form-select'>
            <Field  className='field' name='categoria' placeholder='Categoria' component='select'>
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
            </Field>
            <ErrorMessage className='error' component='span' name='categoria'/>
          </div>
          <div className='form-select'>
            <Field  className='field' name='suporte' placeholder='Defina se o chamado é para um suporte específico ou se qualquer um pode te ajudar!' component='select'>
            <option value="0">Qualquer Um</option>
            </Field>
            <ErrorMessage className='error' component='span' name='suporte'/>
          </div>

          <div className='form-select'>
            <Field  className='field' name='modulo' placeholder='Escolha o módulo do sistema' component='select'>
            <option value="SIGAGPE">Gestão de Pessoal</option>
            </Field>
            <ErrorMessage className='error' component='span' name='modulo'/>
          </div>

          <div className='form-input'>
            <Field  className='field' name='totvs' placeholder='Ticket da Totvs' type='text'/>
            <ErrorMessage className='error' component='span' name='totvs'/>
          </div>
          <button type="submit" className='submit'>Submit</button>
        </Form>
      </Formik>
    )
  }
}

const validations = Yup.object().shape({
  titulo: Yup.string().required().max(250),
  categoria: Yup.string().required(),
  suporte: Yup.string().required(),
  modulo: Yup.string().required(),
  totvs: Yup.string().required()
})

const initialValues = {
  titulo: '',
  categoria: '',
  suporte: '',
  modulo: '',
  totvs: ''
}

export default class Chamados extends Component {
  constructor(){
    super()
  }
  
  cadastro(e){
    e.preventDefault();
    console.log('Cadastrou')
  }

  render() {
    return(
      <section>
        <h1 className='main-title'>Abertura de Chamado</h1>
        
        <FormChamado handleSubmit={this.cadastro} validations={validations} initialValues={initialValues} />
        
        <table>
          <thead>
            <tr>
              <th>Data Emissão</th>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Módulo</th>
              <th>Totvs</th>
              <th>Usuario</th>
              <th>Suporte</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07/04/2019 15:30</td>
              <td>Erro Log na solcitação de compras</td>
              <td>Protheus</td>
              <td>SIGACOM</td>
              <td></td>
              <td>marcelo.silva</td>
              <td>flavio.martins</td>
              <td>Abrir | Editar | Finalizar | Excluir</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}
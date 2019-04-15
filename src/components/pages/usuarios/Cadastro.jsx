import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Cadastro extends Component{
  render() {
    return(
      <section>

        <h1 className='main-title'>Crie seu usuário para ter acesso ao sistema!</h1>
        <Formik initialValues={this.initialValues} onSubmit={this.props.handleSubmit} validationSchema={this.validations}>
          <Form className='form-cadastro'>
            <div className='form-input'>
              <Field  className='field' name='nome' placeholder='Nome' type='text'/>
              <ErrorMessage className='error' component='span' name='nome'/>
            </div>
            <div className='form-input'>
              <label for="ccusto">Centro de Custo</label>
              <input type="text" name="ccusto" id="ccusto" maxlength="100" ref={(input) => this.ccusto = input}/>
              <span></span>
            </div>
            <div className='form-input'>
              <label for="setor">Setor</label>
              <input type="text" name="setor" id="setor" maxlength="100" ref={(input) => this.setor = input}/>
              <span></span>
            </div>
            <div className='form-select'>
              <label for="filial">Filial</label>
              <select name="filial" id="filial" ref={(input) => this.filial = input}>
                <option value="01">MVR - Volta Redonda</option>
                <option value="23">FRJ - Rio de Janeiro</option>
                <option value="21">FPA - Porto do Açu</option>
                <option value="12">FMG - Minas Gerais</option>
                <option value="13">FCB - Cubatão</option>
                <option value="20">FSE - Serra</option>
                <option value="22">FVC - Vale dos Carajas</option>
                <option value="24">FBA - Bahia</option>
              </select>
            </div>
            <div className='form-input'>
              <label for="email">E-mail</label>
              <input type="email" name="email" id="email" ref={(input) => this.email = input}/>
              <span></span>
            </div>
            <div className='form-input'>
              <label for="senha">Senha</label>
              <input type="password" name="senha" id="senha" maxlength="100" ref={(input) => this.senha = input}/>
              <span></span>
            </div>
            <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
            <Link className='link' to='/login'>Voltar</Link>
          </Form>
        </Formik>
      </section>
    )
  }
}
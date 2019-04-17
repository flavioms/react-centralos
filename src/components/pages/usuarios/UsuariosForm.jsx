import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

const validations = Yup.object().shape({
  nome: Yup.string().required().max(250),
  ccusto: Yup.string().required(),
  setor: Yup.string().required(),
  filial: Yup.string().required(),
  email: Yup.string().email().required(),
  senha: Yup.string().min(6).required(),
  admin: Yup.boolean().required(),
})

const initialValues = {}

export default class UsuariosForm extends Component{
  render() {
    return(
        <Formik initialValues={this.initialValues}  validationSchema={this.validations}>
          <Form className='form-cadastro'>
            <div className='form-input'>
              <Field  className='field' name='nome' placeholder='Nome' type='text'/>
              <ErrorMessage className='error' component='span' name='nome'/>
            </div>
            <div className='form-input'>
              <Field  className='field' name='ccusto' placeholder='Centro de Custo' type='text'/>
              <ErrorMessage className='error' component='span' name='ccusto'/>
            </div>
            <div className='form-input'>
              <Field  className='field' name='setor' placeholder='Setor' component='select'>
                <option value="TI">TI</option>
                <option value="RH">RH</option>
                <option value="CONTABILIDADE">CONTABILIDADE</option>
                <option value="SUPRIMENTOS">SUPRIMENTOS</option>
                <option value="FINANCEIRO">FINANCEIRO</option>
                <option value="JURIDICO">JURÍDICO</option>
                <option value="FILIAL">FILIAL - ADM</option>
              </Field>
              <ErrorMessage className='error' component='span' name='setor'/>
            </div>
            <div className='form-select'>
              <Field  className='field' name='filial' placeholder='Filial' component='select'>
                <option value="01">MVR - Volta Redonda</option>
                <option value="23">FRJ - Rio de Janeiro</option>
                <option value="21">FPA - Porto do Açu</option>
                <option value="12">FMG - Minas Gerais</option>
                <option value="13">FCB - Cubatão</option>
                <option value="20">FSE - Serra</option>
                <option value="22">FVC - Vale dos Carajas</option>
                <option value="24">FBA - Bahia</option>
              </Field>
              <ErrorMessage className='error' component='span' name='filial'/>
            </div>
            <div className='form-input'>
              <Field  className='field' name='email' placeholder='E-mail' type='email'/>
              <ErrorMessage className='error' component='span' name='email'/>
            </div>
            <div className='form-input'>
              <Field  className='field' name='senha' placeholder='Senha' type='password'/>
              <ErrorMessage className='error' component='span' name='senha'/>
            </div>
            <div className='form-input'>
              <label htmlFor="admin">Administrador?</label>
              <input type="radio" name="admin" id="admin" value='true'/>Sim
              <input type="radio" name="admin" id="admin" value='false'/>Não
            </div>
            <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
          </Form>
        </Formik>
    )
  }
}
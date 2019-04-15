import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validations = Yup.object().shape({
  titulo: Yup.string().required().max(250),
  categoria: Yup.string().required(),
  suporte: Yup.string().required(),
  modulo: Yup.string().required(),
  totvs: Yup.string().required()
})

const initialValues = {}

export default class FormChamado extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props);
  }
  
  render(){
    return(
      <Formik initialValues={this.initialValues} onSubmit={this.props.handleSubmit} validationSchema={this.validations}>
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

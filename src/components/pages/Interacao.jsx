import React, { Component } from 'react';

export default class Interacao extends Component {
  render() {
    return(
      <section>
        <aside>
          <p><strong>Data Abertura: </strong>01/04/2019 15:30</p>
          <p><strong>Data Encerramento: </strong>01/04/2019 16:30</p>
          <p><strong>Titulo: </strong>Erro Log na solcitação de compras</p>
          <p><strong>Categoria: </strong>Protheus</p>
          <p><strong>Módulo: </strong>SIGACOM</p>
          <p><strong>Ticket Totvs: </strong></p>
          <p><strong>Usuário: </strong>marcelo.silva</p>
          <p><strong>Suporte: </strong>flavio.martins</p>
          <button name="encerrar" id="encerrar">Encerrar Chamado</button>
        </aside>
        <main>
          <div>
            <h1>Marcelo Silva - 01/04/2019 15:30</h1>
            <p>Ao tentar criar uma SC o sistema apresentou um erro LOG</p>
          </div>
          <div>
            <h1>Flávio Martins - 01/04/2019 16:00</h1>
            <p>Um acumulado geral foi aplicado e o problema foi solucionado</p>
          </div>
        </main>
        <footer>
          <form action="">
            <div>
              <label for="texto">Texto</label>
              <textarea name="texto" id="texto" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" name="enviar" id="enviar" value="Enviar"/>
          </form>
        </footer>
      </section>
    )
  }
}
import React from 'react';
import './App.css';

function App() {
  return (
    <footer>
      <section class="address">
        <h3>Localização</h3>
        <div class="traco"></div>
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p><a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a></p>
        <p><a href="tel:+551130901039">+55 11 3090-1039</a></p>
      </section>
      <section class="contact">
        <ul>
          <li>
            <img id="email" src="./email-ico.png" />
            <a id="text-contact" href="/fale-conosco">Entre em contato</a>
          </li>
          <li>
            <img id="headphone" src="./headphone-ico.png" />
            <a id="text-chat" href="/chat">Fale com nosso consultor online</a>
          </li>
        </ul>
      </section>
      <section class="created">
        <div>
          <p>Created by</p>
          <img src="./corebiz.png" alt="Logo Corebiz" />
        </div>
        <div class="vtex">
          <p>Powered by</p>
          <img src="./VTEX.png" alt="Logo VTEX" />
        </div>
      </section>
    </footer>
  );
}

export default App;
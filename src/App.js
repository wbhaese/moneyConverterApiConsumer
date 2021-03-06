import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from "./components/Conversor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversor moedaA="USD" moedaB="BRL" cifrao="$"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD" cifrao="R$"></Conversor>
        {/* Chama Classe e funções, neste caso com construtor padrão */}
      </div>
    );
  }
}

export default App;

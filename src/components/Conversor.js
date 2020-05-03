import React, {Component} from 'react';
import './Conversor.css';

export default class Conversor extends Component {

    constructor(props){
        super(props);//Construtor pelo qual acessamos os valores enviados de App.js
        this.state = {
            moedaA_valor: "",// Valor que virá do front para cálculo
            moedaB_valor: "0,00",//Valor será usado ao clicar em converter
        } 
        
        this.converter = this.converter.bind(this);
    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=f8790975f75e760d28b8`;
        fetch(url)
            .then(res=>{
                return res.json()
            })
            .then(json=>{
                console.log(json)
                let cotacao;
                de_para == "USD_BRL" ? cotacao=json.USD_BRL : cotacao=json.BRL_USD; 
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao.toFixed(2)).toFixed(2);//Multiplica e fixa casas decimais em duas.
                this.setState({moedaB_valor});
            })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} Para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>{/* A ação chama o evento, o target é o input, e o valor que é enviado */}
                <input type="button" value="Converter" onClick={this.converter}></input>{/* Função chamada no click*/}
                <h2>Valor total: R${this.state.moedaB_valor}</h2>

            </div>
        )
    }
} 
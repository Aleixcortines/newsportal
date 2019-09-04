import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
      noticias: []
  }


  componentDidMount(){
    
    this.consultarNoticias();
    }

  consultarNoticias = (categoria ='general') =>{

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=44bc1eed9fd048c1a110db05734e4e24`;

    fetch(url)
      .then(response => response.json())
      .then(noticias => { 
       
        this.setState({
          noticias : noticias.articles
        })

      });
    
    }

  render() {
    return (

      <Fragment>
        <Header
          titulo="Noticias React API"
        />

        <div className="conainer white contenedor-noticias ">

        <Formulario
        
          consultarNoticias={this.consultarNoticias}
        />
        
        <ListaNoticias
          noticias ={this.state.noticias}
        />

        </div>
      </Fragment>
      
    );
  }

  }
 
export default App;


import React from 'react';
import './App.css';
import {CardList, Form} from '../src/Card'

class App extends React.Component{
  state = {
    cards: []
  }
    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
      }))
    }
    render(){
      return(
          <div>
            <Form onSubmit={this.addNewCard}/>
            <CardList cards={this.state.cards}/>
          </div>
      )
    }
  }

export default App;

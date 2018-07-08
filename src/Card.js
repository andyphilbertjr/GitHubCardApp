import React from 'react'
import axios from 'axios'

const Card = (props) => {
	return(
  	<div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        	{props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
	return (
  	<div>
			{props.cards.map(card => <Card key={card.id} {...card}/>)}
    </div>
  )
}
class Form extends React.Component {
state ={userName: ''}
	handleSubmit = (event) => {
  	event.preventDefault();
    //console.log('Event: Form Submit', this.state.userName)
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then(resp => {
      	this.props.onSubmit(resp.data)
        this.setState({userName: ''})
      })
  }
	render(){
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text"
        value={this.state.userName}
        onChange={(event => this.setState({userName : event.target.value}))}
        placeholder="Github Username" required/>
        <button type="Submit">Add Card</button>
    	</form>
    )
  }
}


export {Form, CardList}
import React, {Component} from 'react'
import Table from './components/Table'
import Form from './components/Form'

class App extends Component {
  
  state = {
    characters: [],
  }
  
  removeCharacter = (index) => {
    const characters = this.state.characters
 
    const newCharacters = characters.filter((character, i) => {
      return i !== index 
    })

    this.setState({characters: newCharacters})
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const characters = this.state.characters
    return (
      <div className='container'>
        <h1>React - tutorial</h1>
        <p>Learning React - projeto produzido seguindo o tutorial feito por Tania Rascia - presente na documentação oficial do React</p>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
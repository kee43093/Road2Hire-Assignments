import React from 'react';
import Input from './data/Components/Input'
import './App.css';


class App extends React.Component {
  state = {
    value: [''],
    highScore: 0,
    timesGuessed: '',
    randomStandard: '',
    randomExpert: ''


  }

 generateStandard = () => {
  const randomStandard = Math.floor(Math.random() *10)+ 1;
  this.setState({randomStandard})
  console.log(this.state)
}

generateExpert = () => {
  const randomExpert = Math.floor(Math.random() *100)+ 1;
  this.setState({randomExpert})
  console.log(randomExpert)
}


handleChange = (event) => {
  this.setState({value:event.target.value})
  
 
}

componentDidMount (){
  //this.generateStandard();
}

Counter () { 
  
}

submitButton = (event) => {
  var Input = parseInt(this.state.value);
  console.log(Input)
  console.log(this.state.randomStandard)
  event.preventDefault();
  if (Input < this.state.randomStandard) {
    alert("Your Number is too low!")
  }else if (Input > this.state.randomStandard){
    alert("Your number is too high")
  }else if (Input === this.state.randomStandard) {
    alert("You won!")
    // kick off function to assesshighscore
  }

  var highScore = parseInt(this.state.HighScore)
  this.setState({highScore:highScore + 1})

}

  render() {
    
  return (
    <div className="App">
    <header className="App-header">
      <h1>Contact List</h1>
    </header>
    <button onClick={this.generateStandard}>New Game</button>
    <button className="call">Standard</button>
    <button className="called" onClick={this.generateExpert}>Expert</button>
    <form onSubmit= {this.handleSubmit}>
                <label>
              <input 
              type="text" 
              placeholder="Enter number" value={this.state.value} 
             onChange={(event) => {
               console.log(event.target.value)
               this.handleChange(event)}}/>

            </label>
            <Input submitButton={this.submitButton} Onclick={this.counter}/>
         <p>HighScore: </p>
          <p>Guesses: </p>
      <p>You Guess: {this.state.value}</p>
   
                
  </form>
    
  </div>
);

  }
}

export default App;

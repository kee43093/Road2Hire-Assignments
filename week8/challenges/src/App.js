import React from 'react'
import List from './components/List/List'
import './App.css';

class App extends React.Component {
  state = {
    comments:[]
      // {
      //   comment:""
      // }
  }



  //  submitButton = (event) => {
  //    console.log(event)
  //    var comment = {
  //      "comment": this.state.value
  //    }
  //    this.setState(state => {
  //      const comments = state.comments.push(comment)
     
  //    console.log(event.target.value)
  //    })

// } 
   submitButton = () => {
  
     //this.setState({
     //comments:this.comment.current.value,
     this.setState({ comments: [...this.state.comments, this.comment.current.value],
     })
      
    
    
     console.log(this.state.comments)
     var result = this.comment.current.value
    
  }

  comment = React.createRef();


 render(){
  return (
    <div className="App">
      <label>Comment Section</label>
      <input
      id="input"
      type="text"
      ref={this.comment}
      placeholder="Please enter comment"
      result={this.state.comments} />
      
      <button onClick={(event) => {
        this.submitButton(event)}}>Submit
        </button>
        <List />
      
    </div>
  );
}
}

export default App;

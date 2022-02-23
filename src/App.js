import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const[data,setData]=useState([]);
  const[answer,setAnswer]=useState();
  var correct_answer= null;
  const[display,setDisplay]=useState();
  
  useEffect(()=>{
    fetch('https://jservice.io/api/random').then((result)=>{
      result.json().then((resp)=>{
      setData(resp)
      })
    })
  },[])
  console.log(data);

  const handelOnChange=(event)=>{
    event.preventDefault();
    setAnswer(event.target.value);
  }

  const submit=(event)=>{
    event.preventDefault();
    if(answer.toLowerCase()=== correct_answer.toLowerCase()){
      console.log("correct");
      setDisplay(true);
    }
    else{
      console.log("incorrect");
      setDisplay(false);
    }
  }

  return (
    <div className="App">
      <h1 id="heading">Fill The Correct Answer</h1>
      <div className='quiz-container'>
      <div>
        {
          data.map((items,i)=>{
              correct_answer=(items.answer)}
          )
        }
      </div>
      <div>
        {
          data.map((items,i)=>
            <span key={i}>Question:-{items.question }</span>
          )
        }
      </div>
      <label>Answer:-</label>
      <input className='inputbox' type="text" placeholder='Add correct answer here' onChange={handelOnChange}></input>
      <button className="submit_button" onClick={submit}> Submit </button><br></br>
      <span>{display ? "Your Answer is Correct" : "Incorrect Answer"}</span>
      </div>
    </div>
  );
}

export default App;

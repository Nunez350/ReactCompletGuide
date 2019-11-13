import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';


const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
});

const [otherState,setOtherState] = useState('some other value');

console.log(personsState, otherState)
const switchNameHandler = () => {
  //console.log('Was clicked!');
  // dont do thisthis.state.persons[0].name = "maximilian";
  setPersonsState({
    persons: [
      {name: "Maxeee", age: 28},
      {name: "manu", age: 28},
      {name: "Diana", age:31}
  ]
});
};

   return (
     <div className = "App">
       <h1>Hi iam ract</h1>
       <p> this is really working</p>
       <button onClick={switchNameHandler}> Switch name</button>
       <Person 
          name = {personsState.persons[0].name} 
          age={personsState.persons[0].age}/>

       <Person 
          name = {personsState.persons[1].name}  
          age={personsState.persons[1].age}> My Hobbies: racing </Person>

       <Person 
          name = {personsState.persons[2].name}  
          age={personsState.persons[2].age}/>
       
     </div>


   );


    //return React.createElement('div',{className: 'App'},React.createElement('h1',null, "does this work now"));
  }


export default app;


// //class App extends Component {
//   state = {
//     persons:[
//       {name: "Max", age:28},
//       {name: "Manu", age:29},
//       {name: "Diana", age:30}
//     ],
//     otherSate: 'some other value'
//   }

  // switchNameHandler = () => {
  //   //console.log('Was clicked!');
  //   // dont do thisthis.state.persons[0].name = "maximilian";
  //   this.setState({persons: [
  //     {name: "Maxeee", age: 28},
  //     {name: "manu", age: 28},
  //     {name: "Diana", age:31}
  //   ]})
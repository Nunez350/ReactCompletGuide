
import React, { Component } from 'react';

//import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

//---two way binding----------------------------------------------------------

class App extends Component {
        state = {
          persons:[
            {name: "Max", age:28},
            {name: "Manu", age:29},
            {name: "Diana", age:30}
          ],
          otherSate: 'some other value'
        }

        switchNameHandler = (newName) => {
          //console.log('Was clicked!');
          // dont do thisthis.state.persons[0].name = "maximilian";
          this.setState({persons: [
            {name: "Maxeee", age: 28},
            {name: "manu", age: 28},
            {name: "Diana", age:31}
          ]
          })
        }
        nameChangedHandler = (event) => {
              this.setState({
                persons: [
                  {name: "Maxeee", age: 28},
                  {name: event.target.value, age: 28},
                  {name: "Diana", age:31}
              ]
              })
        
        }


  render() {

   return (
     <div className = "App">
       <h1>Hi iam ract</h1>
       <p> this is really working</p>
       <button onClick={ () => this.switchNameHandler("maximilain")}> Switch name</button>
       <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age}/>

       <Person 
          name = {this.state.persons[1].name}  
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Awesome!")}
          changed={this.nameChangedHandler}> My Hobbies: racing </Person>

       <Person 
          name = {this.state.persons[2].name}  
          age={this.state.persons[2].age}/>
       
     </div>


   );

  }
}

export default App
//----------------------binding --------------------------------------

// const app = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 26}
//     ]
// });

// const [otherState,setOtherState] = useState('some other value');

// console.log(personsState, otherState)
// const switchNameHandler = (newName) => {
//   //console.log('Was clicked!');
//   // dont do thisthis.state.persons[0].name = "maximilian";
//   setPersonsState({
//     persons: [
//       {name: newName, age: 28},
//       {name: "manu", age: 28},
//       {name: "Diana", age:31}
//   ]
// });
// };
  
//    return (
//      <div className = "App">
//        <h1>Hi iam ract</h1>
//        <p> this is really working</p>
//        <button onClick={switchNameHandler.bind(personsState,"find")}> Switch name</button>
//        <Person 
//           name = {personsState.persons[0].name} 
//           age={personsState.persons[0].age}/>

//        <Person 
//           name = {personsState.persons[1].name}  
//           age={personsState.persons[1].age}
//           click={switchNameHandler.bind(personsState,"Awesome!")}> My Hobbies: racing </Person>

//        <Person 
//           name = {personsState.persons[2].name}  
//           age={personsState.persons[2].age}/>
       
//      </div>


//    );


//     //return React.createElement('div',{className: 'App'},React.createElement('h1',null, "does this work now"));
//   }


// export default app;


// // //class App extends Component {
// //   state = {
// //     persons:[
// //       {name: "Max", age:28},
// //       {name: "Manu", age:29},
// //       {name: "Diana", age:30}
// //     ],
// //     otherSate: 'some other value'
// //   }

//   // switchNameHandler = () => {
//   //   //console.log('Was clicked!');
//   //   // dont do thisthis.state.persons[0].name = "maximilian";
//   //   this.setState({persons: [
//   //     {name: "Maxeee", age: 28},
//   //     {name: "manu", age: 28},
//   //     {name: "Diana", age:31}
//   //   ]})
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Prafulla from './components/Prafulla'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'> Error</h1>
        <h1 className={styles.success}>Success</h1>


        
        <Stylesheet primary={true}/>
        <Inline />
      {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}

      <Message />

      <Counter />
    
 {/* <Welcome name="Jintu" heroName="Batman"/> */}

{/*         
      <Greet name="Ganga" heroName="Batman">

        <p> This is a children paragraph</p>
      </Greet>

      <Greet name="Jintu" heroName="Supername">
        <button>action</button>
        <button>action</button>
        <button>action</button>

      </Greet>
      <Greet name="Raja" heroName="Wonder  women"></Greet>
      <Welcome name="Jintu" heroName="Batman"/>
      <Welcome name="Baikuntha" heroName="Superman"/>
      <Welcome name="Roshan Da" heroName="Wonder Man"/> */}
      {/* <Prafulla /> */}
     
      {/* <Hello /> */}

      

      </div>
    );
  }
}  

export default App;

import React from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';

/*function App() {
  return <Header Form/>;
}*/

class App extends React.Component {
  render() {
     return (
      <div>
        <Header/>
        <Form/>
      </div> 
     );
  }
}

export default App;
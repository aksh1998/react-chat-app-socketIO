import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Join}></Route>
      <Route path="/Chat" component={Chat}></Route>
    </Router>
  );
}

export default App;

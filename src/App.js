import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';

function App() {
  return (
    <div className="App">
      <div id = "headerTags">
        <Link to = "/login">Login</Link>
        <Link to = "/logout">Logout</Link>
        <Link to = "/friendList">Friends List</Link>
        <Link to = "/addFriend">Add Friend</Link>
      </div>
      <Routes>
        <Route path = "/login" element = {<LoginPage />}/>
        <Route path = "/" element = {<LoginPage />}/>
        <Route path = "/logout" element = {<LogoutPage />}/>
        <Route path = "/" element = {<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;

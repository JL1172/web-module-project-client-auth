import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import { StyledDiv, StyledHeading } from './components/styles/styledComponents';

function App() {
  return (
    <StyledDiv className="App">
      <StyledHeading id="headerTags">
        <div className='symbols'>
        <Link id = "a" to="/login"><span className="material-symbols-outlined">
          login
        </span>Login</Link>
        </div>
        <div className='symbols'>
        <Link id = "a2" to="/logout"><span className="material-symbols-outlined">
          logout
        </span>Logout</Link>
        </div>
        <div className='symbols'>
        <Link id = "a3" to="/friendList"><span className="material-symbols-outlined">
          view_list
        </span>Friends List</Link>
        </div>
        <div className='symbols'>
        <Link id = "a4" to="/addFriend"><span className="material-symbols-outlined">
          person_add
        </span>Add Friend</Link>
        </div>
      </StyledHeading>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </StyledDiv>
  );
}

export default App;

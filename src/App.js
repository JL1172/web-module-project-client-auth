import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import { StyledDiv, StyledHeading } from './components/styles/styledComponents';
import { useNavigate } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import ProtectedList from './components/ProtectedRouteForList';
import ProtectedAdd from './components/ProtectedRouteForAdd';

function App() {
  const nav = useNavigate(); 
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
        <Route path="/login" element={<LoginPage nav = {nav}/>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/friendList" element={<ProtectedList />} />
        <Route path="/addFriend" element={<ProtectedAdd />} />
      </Routes>
    </StyledDiv>
  );
}

export default App;

import Header from './components/Header/Header';
import './App.css'
import Login from './components/Login/Login';
import Users from './components/Users/Users';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import TaskList from './components/TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from './redux/auth-reducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <>
      <Header/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/users/*" element={<Users />} />
          <Route path="/taskList/*" element={<TaskList />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        {/* <Login className="login"/> */}
        {/* <Users/> */}
      </div>
    </>
  )
}

export default App;


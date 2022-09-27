import Header from './components/Header/Header';
import './App.css'
import Users from './components/Users/Users';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import TaskList from './components/TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from './redux/auth-reducer';
import FormLogin from './components/FormLogin/FormLogin';
import UserCard from './components/Users/UserCard/UserCard';
import WorkItems from './components/WorkItems/WorkItems';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('access')) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/taskList/:workItems' element={<WorkItems />} />
          <Route path='/users/:userId' element={<UserCard />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/taskList/*" element={<TaskList />} />
          <Route path="/login/*" element={<FormLogin />} />
        </Routes>
        {/* <Login className="login"/> */}
        {/* <Users/> */}
      </div>
    </>
  )
}

export default App;


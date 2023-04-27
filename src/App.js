import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.jsx";
import AddShow from "./components/AddShow.jsx"
import Login from "./components/Login.jsx"
import SignUp from "./components/SignUp.jsx"
import './styles/App.css'

function App() {
  const [ shows, setShows] = useState()
  const [user ,setUser] = useState()

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home shows={shows} setShows={setShows} />}  />
        <Route path='/signup' element={<SignUp user={user }setUser={setUser} />}  />
        <Route path='/addshow' element={<AddShow setShows={setShows} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

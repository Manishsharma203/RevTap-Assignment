import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux'
import {fetchdata} from './redux/actions'
import { Link } from 'react-router-dom'
import Routes from './Routes/Routes';

function App() {

  //fetching database and storing locally
  const dispatch= useDispatch()
  useEffect(() => {
      dispatch(fetchdata())
  },[])

  return (
    <div className="App">
        {/* Navbar */}
        <div className='p-2'>  
          <Link to='/'>
            <img src='Revtap_logo.png' alt='logo'/>
          </Link>
        </div>

        {/* Routes */}
        <Routes/>
    </div>
  );
}

export default App;

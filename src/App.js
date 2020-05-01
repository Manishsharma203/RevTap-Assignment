import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux'
import CustomersData from './components/CustomersData';
import OrdersCount from './components/OrdersCount';
import {fetchdata} from './redux/actions'
import OrdersTotalPrice from './components/OrdersTotalPrice';

function App() {
  const dispatch= useDispatch()
  useEffect(() => {
      dispatch(fetchdata())
  },[])
  return (
    <div className="App">
        <CustomersData/>
        {/* <OrdersCount/> */}
        {/* <OrdersTotalPrice/> */}
    </div>
  );
}

export default App;

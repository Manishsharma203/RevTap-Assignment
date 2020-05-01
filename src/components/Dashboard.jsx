import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard(){

    return(
        <div className='d-flex'>

            <div className='col-5 mx-5 Card d-flex justify-content-center align-items-center border' style={{height:'400px'}}>
                <div>
                    <Link to='/customerdata'>
                        <button className='btn btn-outline-success'>Customer Database</button>
                    </Link>
                </div>
            </div>

            <div className='col-5 mx-5 Card d-flex justify-content-center align-items-center border' style={{height:'400px'}}>
                <div>
                    <Link to='/charts'>
                        <button className='btn btn-outline-primary'>Data Visualisation</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Dashboard
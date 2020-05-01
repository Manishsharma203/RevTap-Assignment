import React from 'react'
import {useSelector} from 'react-redux'

function Data(){
    // fetching state keys from redux store
    const currentPage= useSelector(state=>state.currentPage)
    const customers= useSelector(state=>state.customers)
    const dataPerPage= useSelector(state=>state.dataPerPage)

    return (
        <div>
            {/* Customer database table */}
            <table className='table border border-dark'>
                <thead>
                    <tr className='bg-dark text-white'>
                        <th>#</th>
                        <th>Customer ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email Id</th>
                        <th>Created</th>
                        <th>Orders</th>
                    </tr>
                </thead>
                <tbody>
                    {customers && customers
                    .filter((e,i)=>i>=(currentPage-1)*dataPerPage && i<=(currentPage*dataPerPage)-1)
                    .map((e,i)=>
                     <tr key={e.id}>
                         <td>{((currentPage-1)*dataPerPage)+(i+1)}</td>
                         <td>{e.id}</td>
                         <td>{e.firstName}</td>
                         <td>{e.lastName}</td>
                         <td>{e.email}</td>
                         <td>{new Date(Date.parse(e.created)).toDateString()}</td>
                         <td>{e.orders}</td>
                     </tr>   
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Data
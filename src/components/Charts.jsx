import React from 'react'
import OrdersTotalPrice from './OrdersTotalPrice'
import OrdersCount from './OrdersCount'

function Chart(){

    return(
        <div>
            <div className='my-5'>
                <OrdersTotalPrice/>
            </div>
            <div className='my-5'>
                <OrdersCount/>
            </div>
        </div>
    )
}
export default Chart
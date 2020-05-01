import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CustomersData from '../components/CustomersData'
import Dashboard from '../components/Dashboard'
import Chart from '../components/Charts'


function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path='/' render={()=><Dashboard/>}/>
                <Route exact path='/customerdata' render={()=><CustomersData/>}/>
                <Route exact path='/charts' render={()=><Chart/>} />
                <Route render={()=><div className='display-1 text-center'>ERROR 404</div>}/>
            </Switch>
        </div>
    )
}

export default Routes
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchdata,changePage,loading} from '../redux/actions'


function Pagination(){

    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(fetchdata())
    },[])
    

    const customers= useSelector(state=>state.customers)
    const dataLoaded= useSelector(state=>state.dataLoaded)
    useEffect(() => {
        if(customers.length>0){
            dispatch(loading(true))
        }
        else{
            dispatch(loading(false))
        }
    },[customers])

    const currentPage= useSelector(state=>state.currentPage)
    const totalPages= useSelector(state=>state.totalPages)
    const paginationTabs=[]

    for(let i=1; i<=totalPages;i++){
        // if(i===currentPage-1 && i!==0){
        //     paginationTabs.push(<button className='btn-primary' key={i} onClick={()=>dispatch(changePage(currentPage-1))}>{`<`}</button>)
        //     continue;
        // }
        // if(i===currentPage+4){
        //     paginationTabs.push(<button className='btn-primary' key={i} onClick={()=>dispatch(changePage(currentPage+1))}>{`>`}</button>)
        //     continue;
        // }
        paginationTabs.push(<button key={i} style={{background:`${currentPage===i?'green':''}`}} onClick={()=>dispatch(changePage(i))}>{i}</button>)
    }

    return(
        <div>
            {dataLoaded && paginationTabs}
        </div>
    )
}

export default Pagination
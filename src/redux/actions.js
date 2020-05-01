import axios from 'axios'

export const REQUEST_FETCH='REQUEST_FETCH'
export const REQUEST_CUSTOMERDATA='REQUEST_CUSTOMERDATA'
export const REQUEST_FAILURE='REQUEST_FAILURE'
export const CHANGE_PAGE='CHANGE_PAGE'
export const LOADING='LOADING'

export const fetchReq=(payload)=>({
    type:REQUEST_FETCH,
    payload
})
export const fetchCustomerData=(payload)=>({
    type:REQUEST_CUSTOMERDATA,
    payload
})
export const fetchFail=(payload)=>({
    type:REQUEST_FAILURE,
    payload
})

export const changePage=(payload)=>({
    type:CHANGE_PAGE,
    payload
})
export const loading=(payload)=>({
    type:LOADING,
    payload
})

export const fetchdata=(query=null)=>{
    return dispatch => {
        dispatch(fetchReq)
        return axios
            .get('/database/db.json')
            .then(res=>{
                // console.log(res)
                return dispatch(fetchCustomerData(res))
            })
            .catch(err=>console.log(err))
    }
}
import axios from 'axios'

export const REQUEST_FETCH='REQUEST_FETCH'
export const FETCH_DATA='FETCH_DATA'
export const REQUEST_FAILURE='REQUEST_FAILURE'
export const CHANGE_PAGE='CHANGE_PAGE'
export const DATASHOWN='DATASHOWN'

export const fetchReq=(payload)=>({
    type:REQUEST_FETCH,
    payload
})
export const fetchAllData=(payload)=>({
    type:FETCH_DATA,
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
export const fetchdata=(query=null)=>{
    return dispatch => {
        dispatch(fetchReq)
        return axios
            .get('/database/db.json')
            .then(res=>{
                // console.log(res)
                return dispatch(fetchAllData(res))
            })
            .catch(err=>console.log(err))
    }
}
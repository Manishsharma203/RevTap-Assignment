import {REQUEST_FETCH,REQUEST_CUSTOMERDATA,REQUEST_FAILURE,CHANGE_PAGE, LOADING} from './actions'

var initialState={
    currentPage: 1,
    totalData:[],
    customers:[],
    orders:[],
    dataPerPage: 10,
    length: 0,
    totalPages: 0,
    dataLoaded: false,
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        case REQUEST_CUSTOMERDATA:
            return {...state,
                customers:action.payload.data.customers,
                length: action.payload.data.customers.length,
                totalPages: action.payload.data.customers.length/state.dataPerPage,
                isLoadng: false}
        case CHANGE_PAGE:
            return {...state,
            currentPage:action.payload
            } ;
        case LOADING:
            return {...state,
            dataLoaded:action.payload
            }
        default:
            return state ;
    }
}
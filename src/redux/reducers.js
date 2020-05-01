import {REQUEST_FETCH,FETCH_DATA,REQUEST_FAILURE,CHANGE_PAGE} from './actions'

var initialState={
    customers:[],
    orders:[],
    DaywiseOrders:[],
    currentPage: 1,
    dataPerPage: 10,
    totalPages: 0,
    dataLoaded: false,
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_DATA:
            //creating array of DaywiseOrders
            let ordersObject={}
            const ordersCopy= action.payload.data.orders
            for(let i=0;i<ordersCopy.length;i++){
                let parsedDate=Date.parse(ordersCopy[i].created)
                let DateString= new Date(parsedDate).toDateString()
                if(ordersObject[DateString]){
                    ordersObject[DateString][0]++
                    ordersObject[DateString][1]+=Number(ordersCopy[i].price)
                }
                else{
                    ordersObject[DateString]=[1,Number(ordersCopy[i].price)]
                }
            }
            let ordersArray= Object.entries(ordersObject)
            console.log('ordersArray',ordersArray)
            return {...state,
                customers:action.payload.data.customers,
                orders:action.payload.data.orders,
                DaywiseOrders:ordersArray,
                totalPages: action.payload.data.customers.length/state.dataPerPage,
                dataLoaded: true}
        case CHANGE_PAGE:
            return {...state,
            currentPage:action.payload
            } ;
        default:
            return state ;
    }
}
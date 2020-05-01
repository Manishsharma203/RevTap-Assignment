import {REQUEST_FETCH,FETCH_DATA,REQUEST_FAILURE,CHANGE_PAGE} from './actions'

var initialState={
    customers:[],
    orders:[],
    DaywiseOrders:[],
    currentPage: 1,
    dataPerPage: 10,
    totalPages: 0,
    dataLoaded: false,
    error:false
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        // data fetching initiation
        case REQUEST_FETCH:
            return { 
            ...state, 
            error: false
            }

        // successfull data fetching
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
            // console.log('ordersArray',ordersArray)

            return {...state,
                customers:action.payload.data.customers,
                orders:action.payload.data.orders,
                DaywiseOrders:ordersArray,
                totalPages: Math.ceil(action.payload.data.customers.length/state.dataPerPage),
                dataLoaded: true
            }

        // data fetching failure
        case REQUEST_FAILURE:
            console.log(action.payload)
            return { 
            ...state,
            error: true
            }

        // changing the currentPage variable
        case CHANGE_PAGE:
            return {...state,
            currentPage:action.payload
            } ;
        default:
            return state ;
    }
}
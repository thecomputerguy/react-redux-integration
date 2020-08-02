
const Reducer = (state = {vehicle: ""}, action) => {
    
    switch(action.type){
        case 'CAR': return {
            ...state,
            vehicle: "It's a car"
        }
        case 'BIKE': return {
            ...state,
            vehicle: 'Bike'
        }
        default: return 'Nothing'
    }
}

export default Reducer
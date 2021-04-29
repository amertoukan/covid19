const INITIAL_STATE = {
    province: "ON"
}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload){
        case "UPDATE_DATA": 
            return {
                province: action.payload
            }
        default: 
            return state
    }
}

export default dataReducer
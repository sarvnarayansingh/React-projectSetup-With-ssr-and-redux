
import * as actionConstant from '../Actions/ActionConstant/index';


const initialState = {
    globalstore:null

}
function GlobalReducer(state = initialState, action) {
    switch(action.type){
        case actionConstant.GLOBAL_INIT:
        return{
            ...state,
        }
        case actionConstant.GLOBAL_SUCCESS:
        return{
            ...state,
            globalstore:action.payload
        }
        case actionConstant.GLOBAL_FAILED:
        return{
            ...state,
            globalstore:action.payload
        }
        default:
            return state
    }
}
export default GlobalReducer;
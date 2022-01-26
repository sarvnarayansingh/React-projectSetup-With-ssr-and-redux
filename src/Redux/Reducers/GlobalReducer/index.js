import * as actionConstant from '../../Actions/ActionConstant'

const initialState = {
    globalStore:null
}

const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionConstant.GLOBAL_INIT:
        return {
          ...state,
        };
      case actionConstant.GLOBAL_SUCCESS:
        return {
          ...state,
          globalStore: action.payload,
        };
      case actionConstant.GLOBAL_ERROR:
        return {
          ...state,
          globalStore: [],
        };
        default:
      return state;
    }
}
export default GlobalReducer;
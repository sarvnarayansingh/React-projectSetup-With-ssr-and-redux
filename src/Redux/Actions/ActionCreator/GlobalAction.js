import API from '../../../Helper/endpoint';
import * as actionTypes from '../ActionTypes'

export const globalAction = () => async (dispatch, getState, api) => {
    dispatch(actionTypes.globalInit());
    return await api
      .get(API.UserApi)
      .then((res) => {
          dispatch(actionTypes.globalSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actionTypes.globalFailed(error));
      });
  };
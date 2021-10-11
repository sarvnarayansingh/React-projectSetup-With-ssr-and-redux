
import * as actionType from '../ActionType/index';
import API from '../../../Helpers/endpoints';

export const globalAction = () => async (dispatch, getState, api) => {
    dispatch(actionType.globalInit());
    return api
      .get(API.users)
      .then((res) => {
          dispatch(actionType.globalSuccess(res));
      })
      .catch((error) => {
        dispatch(actionType.globalFailed(error));
      });
  };
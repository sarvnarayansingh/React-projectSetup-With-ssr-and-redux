import * as actionConstant from '../ActionConstant';

export function globalInit() {
    return {
      type: actionConstant.GLOBAL_INIT,
    };
  }
  export function globalSuccess(payload) {
    return {
      type: actionConstant.GLOBAL_SUCCESS,
      payload,
    };
  }
  export function globalFailed(payload) {
    return {
      type: actionConstant.GLOBAL_FAILED,
      payload,
    };
  }
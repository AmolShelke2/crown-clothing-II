import SHOP_DATA from './shop-data';

import shopActionType from './shop.types';

const INITAL_STATE = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

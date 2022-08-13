import shopActionType from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: shopActionType.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

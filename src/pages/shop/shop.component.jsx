import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router';
import collectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionsSnapShotToMap,
} from '../../firebase/firebase.utlis';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapShotToMap(snapshot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={collectionPage}
        />
      </div>
    );
  }
}
export default ShopPage;

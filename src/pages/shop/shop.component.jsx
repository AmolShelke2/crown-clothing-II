import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router';
import CollectionPage from '../collection/collection.component';

import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapShotToMap,
} from '../../firebase/firebase.utlis';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collection');

    // FETCH PATTERN || PROMISE PATTERN

    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crown-db-81294/databases/(default)/documents/collection'
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    console.log(loading);

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// Learning Promise pattern

import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-action';

import {
  BackgroundImage,
  CollectionItemContainer,
  CollectionItemFooter,
  AddButtonContainer,
  ItemNameSpan,
  ItemPriceSpan,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionItemFooter>
        <ItemNameSpan>{name}</ItemNameSpan>
        <ItemPriceSpan>{price}</ItemPriceSpan>
      </CollectionItemFooter>
      <AddButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

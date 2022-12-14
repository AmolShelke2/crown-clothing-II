import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux/es/exports';

import { ReactComponent as Logo } from '..//..//assets/crown.svg';
import { auth } from '../../firebase/firebase.utlis';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.select';
import { createCartHidden } from '../../redux/cart/cart.reselect';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header-styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: createCartHidden,
});

export default connect(mapStateToProps)(Header);

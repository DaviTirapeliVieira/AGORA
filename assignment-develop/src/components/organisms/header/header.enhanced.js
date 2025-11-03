import { connect } from 'react-redux';
import {
  headerNavigationSelector,
  headerTitleSelector,
} from '@/logic/header/ducks/header-selector';
import Header from './header.component';

const mapStateToProps = state => ({
  title: headerTitleSelector(state),
  navItems: headerNavigationSelector(state),
});

const mapDispatchToProps = {};

const HeaderEnhanced = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderEnhanced;

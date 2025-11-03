import { connect } from 'react-redux';
import { footerTextSelector } from '@/logic/footer/ducks/footer-selector';
import Footer from './footer.component';

const mapStateToProps = state => ({
  text: footerTextSelector(state),
});

const mapDispatchToProps = {};

const FooterEnhanced = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterEnhanced;

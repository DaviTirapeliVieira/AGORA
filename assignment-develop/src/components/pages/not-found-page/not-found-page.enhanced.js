import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NotFoundPage from './not-found-page.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => {
  const navigate = useNavigate();
  return {
    goBack: () => navigate(-1),
  };
};

const NotFoundPageEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotFoundPage);

export default NotFoundPageEnhanced;

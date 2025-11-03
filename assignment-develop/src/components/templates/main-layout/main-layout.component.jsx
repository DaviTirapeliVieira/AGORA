import PropTypes from 'prop-types';
import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';
import './main-layout.component.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = propTypes;

export default MainLayout;

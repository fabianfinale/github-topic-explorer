import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Navbar />
      {children}
      <Footer />
    </BrowserRouter>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;

import Header from './Header';
import { Fragment } from 'react';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          <div className="row mt-2">{children}</div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

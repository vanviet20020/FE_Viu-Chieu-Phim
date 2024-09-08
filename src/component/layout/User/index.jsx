import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row mt-2">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

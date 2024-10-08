import { useState, useEffect, useCallback } from 'react';
import SideBar from './Sidebar';
import Navbar from './Navbar';
import './Style.scss';

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const AdminLayout = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth < 768
  );
  const [isSearchFormShown, setIsSearchFormShown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
      }

      if (window.innerWidth > 576) {
        setIsSearchFormShown(false);
      }
    };

    const debounceResize = debounce(handleResize, 100);

    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const handleMenuBarClick = useCallback(() => {
    setIsSidebarHidden((prevState) => !prevState);
  }, []);

  const handleSearchButtonClick = useCallback(
    (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        setIsSearchFormShown(!isSearchFormShown);
      }
    },
    [isSearchFormShown]
  );

  return (
    <>
      <SideBar isSidebarHidden={isSidebarHidden} />
      <section id="content">
        <Navbar
          handleMenuBarClick={handleMenuBarClick}
          handleSearchButtonClick={handleSearchButtonClick}
          isSearchFormShown={isSearchFormShown}
        />
        {children}
      </section>
    </>
  );
};

export default AdminLayout;

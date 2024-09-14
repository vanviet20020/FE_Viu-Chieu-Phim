import { useState, useEffect, memo } from 'react';

const Navbar = ({
  handleMenuBarClick,
  handleSearchButtonClick,
  isSearchFormShown,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchMode = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isChecked]);

  return (
    <nav>
      <i
        className="bx bx-menu"
        onClick={handleMenuBarClick}
        aria-label="Toggle sidebar"
      ></i>
      <form action="#">
        <div className={`form-input ${isSearchFormShown ? 'show' : ''}`}>
          <input type="search" placeholder="Search..." />
          <button
            type="submit"
            className="search-btn"
            onClick={handleSearchButtonClick}
            tabIndex="0"
            aria-label="Search"
          >
            <i className={`bx ${isSearchFormShown ? 'bx-x' : 'bx-search'}`}></i>
          </button>
        </div>
      </form>
      <span>Chế độ màn hình</span>
      <input
        type="checkbox"
        id="switch-mode"
        checked={isChecked}
        onChange={handleSwitchMode}
        hidden
      />
      <label htmlFor="switch-mode" className="switch-mode"></label>
    </nav>
  );
};

export default memo(Navbar);

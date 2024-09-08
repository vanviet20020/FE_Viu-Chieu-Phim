import { useState } from 'react';
import { Link } from 'react-router-dom';

const dataSideBars = [
  {
    title: 'Chung',
    // link: 'management',
    link: '#',
    icon: 'bx bxs-dashboard',
  },
  {
    title: 'Tài khoản',
    // link: '#',
    link: '#',
    icon: 'bx bxs-group',
  },
  {
    title: 'Phim',
    // link: 'movies/management',
    link: '#',
    icon: 'bx bxs-film',
  },
  {
    title: 'Rạp chiếu phim',
    // link: 'cinemas/management',
    link: '#',
    icon: 'bx bxs-map',
  },
  {
    title: 'Lịch chiếu phim',
    // link: 'movie-showtimes/management',
    link: '#',
    icon: 'bx bxs-calendar',
  },
  {
    title: 'Nhà cung cấp',
    // link: '#',
    link: '#',
    icon: 'bx bxs-group',
  },
];

function SideBar({ isSideBarHidden }) {
  const [activeLink, setActiveLink] = useState(0); // Đặt mặc định là 0

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <section id="sidebar" className={isSideBarHidden ? 'hide' : ''}>
      <Link to="/admin" className="brand">
        <i className="bx bxs-home"></i>
        <span className="text">Trang quản lý</span>
      </Link>
      <ul className="side-menu top">
        {dataSideBars.map((data, i) => (
          <li key={i} className={activeLink === i ? 'active' : ''}>
            <Link to={data.link} onClick={() => handleClick(i)}>
              <i className={data.icon}></i>
              <span className="text">{data.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bx-log-out"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SideBar;

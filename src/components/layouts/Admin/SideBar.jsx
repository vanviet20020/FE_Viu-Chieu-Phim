import { useState } from 'react';
import { Link } from 'react-router-dom';

const dataSideBars = [
  {
    title: 'Thống kê',
    // link: 'management',
    link: '/admin/dashboard',
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
    link: '/admin/movie',
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

function Sidebar({ isSidebarHidden }) {
  const [activeLink, setActiveLink] = useState(0); // Đặt mặc định là 0

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
      <Link to="/admin/dashboard" className="brand">
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
          <Link to="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="logout">
            <i className="bx bx-log-out"></i>
            <span className="text">Quay lại trang chủ</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

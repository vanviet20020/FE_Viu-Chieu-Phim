import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';

const dataSideBars = [
  {
    title: 'Thống kê',
    link: '/admin/dashboard',
    icon: 'bx bxs-dashboard',
  },
  {
    title: 'Tài khoản',
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
    link: '#',
    icon: 'bx bxs-map',
  },
  {
    title: 'Lịch chiếu phim',
    link: '#',
    icon: 'bx bxs-calendar',
  },
  {
    title: 'Nhà cung cấp',
    link: '/admin/supplier',
    icon: 'bx bxs-group',
  },
];

const Sidebar = ({ isSidebarHidden }) => {
  const location = useLocation();

  return (
    <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
      <Link to="/admin/dashboard" className="brand">
        <i className="bx bxs-home"></i>
        <span className="text">Trang quản lý</span>
      </Link>
      <ul className="side-menu top">
        {dataSideBars.map((data, i) => (
          <li
            key={i}
            className={location.pathname.includes(data.link) ? 'active' : ''}
          >
            <Link to={data.link}>
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
};

export default memo(Sidebar);

import { Link } from 'react-router-dom';

import { useAuth } from '@/provider/authProvider';
import LogoutPage from '@/pages/LogoutPage';
import Logo from '@/assets/logo1024.jpg';
import './Header.scss';

function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <Link to="">
              <img src={Logo} alt="Viu Chiếu Phim" />
            </Link>
          </div>
          <div className="col-md-7 col-sm-7">
            <ul>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                  <p>Trang chủ</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-solid fa-video"></i>
                  <p>Đang chiếu</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-solid fa-film"></i>
                  <p>Sắp chiếu</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-solid fa-shop"></i>
                  <p>Rạp</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-solid fa-map"></i>
                  <p>Bản đồ</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2 user">
            {user ? (
              <>
                <p>Hello {user.fullname}</p>
                <LogoutPage />
              </>
            ) : (
              <>
                <Link className="login" to="/login">
                  Đăng nhập
                </Link>
                <Link className="register" to="/register">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

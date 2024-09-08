import './Footer.scss';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="item">
                <h1>PHIM</h1>
                <ul>
                  <li>Phim đang chiếu</li>
                  <li>Phim sắp chiếu</li>
                  <li>Phim tháng 11/2022</li>
                  <li>Phim chiếu lại</li>
                  <li>Đánh giá phim</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="item">
                <h1>RẠP</h1>
                <ul>
                  <li>CGV</li>
                  <li>Lotte</li>
                  <li>Galaxy</li>
                  <li>BHD</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="item">
                <h1>PHIM SẮP RA MẮT</h1>
                <ul>
                  <li>SAZAM FURY OF THE GODS - 17/03/2023</li>
                  <li>MÈO ĐI HIA: ĐIỀU ƯỚC CUỐI CÙNG - 30/12/2022</li>
                  <li>NHÀ BÀ NỮ - 22/01/2023</li>
                  <li>BHD</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="item">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-flickr"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>© Copyright 2017 Rapchieuphim.com</p>
            </div>
            <div className="col col-right">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of us</a>
              <a href="#">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

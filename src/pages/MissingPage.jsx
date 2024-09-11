import { Link } from 'react-router-dom';

const MissingPage = () => {
  return (
    <article style={{ padding: '100px' }}>
      <h1>Ôi không!</h1>
      <p>Không tìm thấy trang</p>
      <div className="flexGrow">
        <Link to="/">Truy cập Trang chủ của chúng tôi</Link>
      </div>
    </article>
  );
};

export default MissingPage;

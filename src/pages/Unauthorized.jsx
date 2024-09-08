import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Không có quyền truy cập</h1>
      <br />
      <p>Bạn không có quyền truy cập vào trang được yêu cầu.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Quay lại</button>
      </div>
    </section>
  );
};

export default Unauthorized;

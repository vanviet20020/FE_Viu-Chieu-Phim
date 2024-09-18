import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import MainLayout from '@/components/layouts/User';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <MainLayout>
      <section>
        <h1>Không có quyền truy cập</h1>
        <br />
        <p>Bạn không có quyền truy cập vào trang được yêu cầu.</p>
        <div className="flexGrow">
          <Button onClick={goBack}>Quay lại</Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default UnauthorizedPage;

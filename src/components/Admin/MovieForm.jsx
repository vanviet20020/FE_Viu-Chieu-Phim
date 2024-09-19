import { useState, useEffect } from 'react';
import { Button, DatePicker, Form, Input, Select, Upload } from 'antd';
import { MOVIE_STATUS } from '@/utils/constant';
const urlServer = import.meta.env.VITE_SERVER_URL;

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 8, offset: 6 },
  },
};

const MovieForm = ({ onFinish, form = null, oldImageLink = null }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (oldImageLink) {
      setFileList([
        {
          uid: '-1',
          name: 'current_image.png',
          status: 'done',
          url: urlServer + oldImageLink,
        },
      ]);
    }
  }, [oldImageLink]);

  const handleChange = (info) => {
    setFileList(info.fileList);
  };

  const handleSubmit = (values) => {
    let fileData = null;

    if (fileList.length > 0 && fileList[0].originFileObj) {
      fileData = fileList[0].originFileObj;
    } else if (oldImageLink) {
      fileData = oldImageLink;
    }

    Object.assign(values, { image: fileData });

    onFinish(values);
  };

  return (
    <Form
      form={form}
      {...formItemLayout}
      onFinish={handleSubmit}
      initialValues={{
        status: MOVIE_STATUS.screening,
      }}
      className="mt-4"
    >
      <Form.Item
        label="Tên phim"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên phim!' }]}
      >
        <Input placeholder="Nhập tên phim" />
      </Form.Item>

      <Form.Item label="Trạng thái" name="status">
        <Select>
          <Option value={MOVIE_STATUS.screening}>Đang chiếu</Option>
          <Option value={MOVIE_STATUS.expired}>Quá hạn chiếu</Option>
          <Option value={MOVIE_STATUS.comingSoon}>Sắp chiếu</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Ảnh thumnail"
        name="image"
        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList[0])}
        rules={[{ required: !oldImageLink, message: 'Vui chọn ảnh giá vé!' }]}
      >
        <Upload
          accept="image/*"
          beforeUpload={() => false}
          listType="picture-card"
          maxCount={1}
          fileList={fileList}
          onChange={handleChange}
        >
          <button style={{ border: 0, background: 'none' }} type="button">
            <i className="bx bx-image-add" style={{ fontSize: '32px' }}></i>
            <div style={{ marginTop: 8 }}>
              {fileList.length < 1 && <div>+ Tải ảnh lên</div>}
            </div>
          </button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Link trailer"
        name="trailer_link"
        rules={[
          {
            type: 'url',
            required: true,
            message: 'Vui lòng nhập liên kết trailer!',
          },
        ]}
      >
        <Input placeholder="Nhập liên kết trailer" />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea placeholder="Nhập mô tả" />
      </Form.Item>

      <Form.Item
        label="Ngày khởi chiếu"
        name="release_date"
        rules={[{ required: true, message: 'Vui lòng chọn ngày khởi chiếu!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Thời gian chiếu"
        name="runtime"
        rules={[{ required: true, message: 'Vui lòng nhập thời gian chiếu!' }]}
      >
        <Input placeholder="Nhập thời gian chiếu" />
      </Form.Item>

      <Form.Item label="Đạo diễn" name="director">
        <Input placeholder="Nhập tên đạo diễn" />
      </Form.Item>

      <Form.Item label="Diễn viên" name="cast">
        <Input placeholder="Nhập tên diễn viên" />
      </Form.Item>

      <Form.Item label="Ngôn ngữ" name="language">
        <Input placeholder="Nhập ngôn ngữ" />
      </Form.Item>

      <Form.Item label="Thể loại" name="genre">
        <Input placeholder="Nhập thể loại" />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button block type="primary" htmlType="submit">
          Thực hiện
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MovieForm;

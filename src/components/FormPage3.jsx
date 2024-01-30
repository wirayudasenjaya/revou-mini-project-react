import { Form, Input } from "antd";

const FormPage3 = () => {
  return (
    <>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            pattern:/^.{8,}$/,
            message: `8 characters`
          },
          {
            pattern:/^(?=.*[A-Z]).*$/,
            message: `one uppercase letter`
          },
          {
            pattern:/^(?=.*[a-z]).*$/,
            message: `one lowercase letter`
          },
          {
            pattern:/^(?=.*\d).*$/,
            message: `one number`
          },
          {
            pattern:/^(?=.*[!@#$%^&*_=+-]).*$/,
            message: `one special character`
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );
};

export default FormPage3;

import { DatePicker, Form, Input } from "antd";

const FormPage1 = () => {
  return (
    <>
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: "email", message: "Please input a valid email!" },
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="date-of-birth" label="Date of Birth" rules={[
          {
            required: true,
            message: "Please input your date of birth!",
          },
        ]}>
        <DatePicker />
      </Form.Item>
    </>
  );
};

export default FormPage1;

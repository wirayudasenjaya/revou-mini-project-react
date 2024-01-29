import { Form, Input } from "antd";

const FormPage2 = () => {
  return (
    <>
      <Form.Item
        label="Street"
        name="street"
        rules={[
          {
            required: true,
            message: "Please input your address street!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your address city!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="State"
        name="state"
        rules={[
          {
            required: true,
            message: "Please input your address state!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default FormPage2;

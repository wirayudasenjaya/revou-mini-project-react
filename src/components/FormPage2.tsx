import React from "react";
import { Form, Input } from "antd";

const FormPage2: React.FC = () => {
  type FieldType = {
    street?: string;
    city?: string;
    state?: string;
  };

  return (
    <>
      <Form.Item<FieldType>
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

      <Form.Item<FieldType>
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

      <Form.Item<FieldType>
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

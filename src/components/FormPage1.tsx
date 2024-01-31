import React from "react";
import { DatePicker, Form, Input } from "antd";

const FormPage1: React.FC = () => {
  type FieldType = {
    fullname?: string;
    email?: string;
    dateOfBirth?: string;
  };

  return (
    <>
      <Form.Item<FieldType>
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

      <Form.Item<FieldType>
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

      <Form.Item<FieldType> name="dateOfBirth" label="Date of Birth" rules={[
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

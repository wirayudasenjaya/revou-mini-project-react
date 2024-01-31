import React from "react";
import { Form, Input } from "antd";

const FormPage3: React.FC = () => {
  type FieldType = {
    username?: string;
    password?: string;
    confirm?: string;
  };

  return (
    <>
      <Form.Item<FieldType>
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

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            pattern: /^.{8,}$/,
            message: `8 characters`,
          },
          {
            pattern: /^(?=.*[A-Z]).*$/,
            message: `one uppercase letter`,
          },
          {
            pattern: /^(?=.*[a-z]).*$/,
            message: `one lowercase letter`,
          },
          {
            pattern: /^(?=.*\d).*$/,
            message: `one number`,
          },
          {
            pattern: /^(?=.*[!@#$%^&*_=+-]).*$/,
            message: `one special character`,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );
};

export default FormPage3;

import { useState } from "react";
import { Button, Card, Form, Layout } from "antd";
import Step from "../components/Step";
import FormPage1 from "../components/FormPage1";
import FormPage2 from "../components/FormPage2";
import FormPage3 from "../components/FormPage3";

const RegisterForm = () => {
  const [current, setCurrent] = useState(0);

  const onFinish = () => {
    if(current === 2) {
      console.log('submitted');
    } else {
      setCurrent(current+1);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  console.log(current);

  return (
    <Layout className="layout">
      <Step index={current} />
      <br />
      <Card bordered={false}>
        <Form
          name="basic"
          layout="vertical"
          style={{
            width: 300,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          
        >
          {current === 0 ? (
            <FormPage1 />
          ) : current === 1 ? (
            <FormPage2 />
          ) : (
            <FormPage3 />
          )}

          <Form.Item style={{ textAlign: "right" }}>
            <Button
              style={{ margin: "0 8px" }}
              disabled={current === 0 ? true : false}
              onClick={() => setCurrent(current - 1)}
            >
              Previous
            </Button>
            {current < 2 && (
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            )}
            {current === 2 && (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default RegisterForm;

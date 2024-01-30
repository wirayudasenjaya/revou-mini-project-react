import { useState } from "react";
import { Button, Form, Layout } from "antd";
import Step from "../components/Step";
import FormPage1 from "../components/FormPage1";
import FormPage2 from "../components/FormPage2";
import FormPage3 from "../components/FormPage3";
import ResultPage from "../components/Result";
import background from "../assets/image.webp";

const RegisterPage = () => {
  const [current, setCurrent] = useState(0);
  const [formValue, setFormValue] = useState({});
  const [showResult, setShowResult] = useState(false);

  const onFinish = (values) => {
    if (current === 2) {
      setFormValue((prev) => ({ ...prev, ...values }));
      setShowResult(true);
    } else {
      setCurrent(current + 1);
      setFormValue((prev) => ({ ...prev, ...values }));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className="layout">
      {showResult === true ? (
        <div className="result">
          <ResultPage data={formValue} />
        </div>
        
      ) : (
        <>
          <img src={background} alt="background" className="background" />
          <section className="form-box">
            <Step index={current} />
            <br />
            <h1>
              {current === 0
                ? "Personal Information"
                : current === 1
                ? "Address Information"
                : "Account Information"}
            </h1>
            <Form
              name="basic"
              layout="vertical"
              style={{
                width: "90%",
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
          </section>
        </>
      )}
    </Layout>
  );
};

export default RegisterPage;

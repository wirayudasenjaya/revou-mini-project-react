import { Button, Result } from "antd";

const ResultPage = ({ data }) => {
  return (
    <Result
      status="success"
      title="Successfully Registered!"
      subTitle={JSON.stringify(data)}
      extra={[
        <Button type="primary" key="console">
          Home
        </Button>,
      ]}
    />
  );
};

export default ResultPage;

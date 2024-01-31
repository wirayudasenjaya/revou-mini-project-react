import React from "react";
import { Button, Result } from "antd";

interface ResultProps {
  data: {};
}

const ResultPage: React.FC<ResultProps> = ({ data }) => {
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

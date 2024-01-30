import { Steps } from "antd";

const Step = ({ index }) => {
  const steps = [
    {
      title: "",
      content: "personal",
    },
    {
      title: "",
      content: "address",
    },
    {
      title: "",
      content: "account",
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return <Steps current={index ? index : 0} items={items} labelPlacement="vertical" size="small" />;
};

export default Step;

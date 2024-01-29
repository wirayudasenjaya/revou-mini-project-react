import { Steps } from "antd";

const Step = ({ index }) => {
  const steps = [
    {
      title: "Personal Information",
      content: "personal",
    },
    {
      title: "Address Information",
      content: "address",
    },
    {
      title: "Account Information",
      content: "account",
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return <Steps current={index ? index : 0} items={items} labelPlacement="vertical" size="small" />;
};

export default Step;

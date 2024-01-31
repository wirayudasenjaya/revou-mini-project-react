import React from "react";
import { ConfigProvider } from "antd";
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a82a22",
        },
        components: {
          Layout: {
            bodyBg: "#fff",
          },
        },
      }}
    >
      <RegisterPage />
    </ConfigProvider>
  );
};

export default App;

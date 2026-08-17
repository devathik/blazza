import { LockOutlined, SafetyCertificateOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, App, Button, Card, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { loginAdmin } from "../services/admin.api";

const { Title, Text } = Typography;

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { message } = App.useApp();

  const onFinish = async (values: any) => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await loginAdmin(values);
      message.success("Logged in successfully!");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("adminToken", res.accessToken);
      onLoginSuccess();
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid email or password. Please use admin@gmail.com / admin12345");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 px-4 relative overflow-hidden font-sans">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <Card className="w-full max-w-md border-0 bg-white/5 backdrop-blur-xl shadow-2xl rounded-2xl p-4 md:p-8 text-white">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
            <SafetyCertificateOutlined className="text-3xl" />
          </div>
          <Title level={2} className="!text-white !m-0 !font-bold">Welcome Back</Title>
          <Text className="text-slate-400 block mt-2">Sign in to manage Black Tulip Funerals portal</Text>
        </div>

        {errorMsg && (
          <Alert
            message={errorMsg}
            type="error"
            showIcon
            className="mb-6 rounded-lg border-red-500/20 bg-red-500/10 text-red-200"
          />
        )}

        <Form
          name="login_form"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label={<span className="text-slate-300 font-medium">Email Address</span>}
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" }
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-slate-500" />}
              placeholder="admin@gmail.com"
              className="h-12 bg-slate-950/40 border-slate-700/50 hover:border-blue-500 focus:border-blue-500 text-white rounded-xl placeholder:text-slate-600"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="text-slate-300 font-medium">Password</span>}
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-slate-500" />}
              placeholder="admin12345"
              className="h-12 bg-slate-950/40 border-slate-700/50 hover:border-blue-500 focus:border-blue-500 text-white rounded-xl placeholder:text-slate-600"
            />
          </Form.Item>

          <Form.Item className="mt-8 mb-0">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 border-0 rounded-xl font-semibold text-base shadow-lg shadow-blue-500/20"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
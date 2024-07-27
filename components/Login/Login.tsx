"use client";
import React, { useCallback, useState } from "react";
import ImageWrapper from "@components/ImageWrapper";
import useApi from "@hooks/useApi";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";
import { useAppContext } from "@contexts/AppContext";
import { LOGIN_API } from "@utils/endpoints";
import { Button, Checkbox, Col, Flex, Form, Input, Row, Space } from "antd";
import { FiLock, FiUser } from "react-icons/fi";

const Login = () => {
  const router = useRouter();
  const { apiCall, error, loading } = useApi();
  const { setUser } = useAppContext();

  const [loginData, setLoginData] = useState<Record<string, string>>({
    email: "",
    password: "",
  });

  const handleLogin = useCallback(async () => {
    try {
      const res: {
        status: HttpStatusCode;
        token: string;
        data: any;
      } = await apiCall.post(LOGIN_API, loginData);
      if (res.status === HttpStatusCode.Ok) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        if (res.data.user.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [apiCall, loginData, setUser, router]);

  return (
    <Flex justify="space-between" align="center" style={{ height: "100vh" }}>
      <Col span={12}>
        <ImageWrapper
          src="/assets/images/signup.png"
          alt="signup-image"
          fallbackSrc="https://via.placeholder.com/500"
          className="rounded-lg h-auto md:h-full"
          width={800}
          height={800}
        />
      </Col>
      <Col span={12}>
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<FiUser className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<FiLock className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Col>
    </Flex>
  );
};

export default Login;

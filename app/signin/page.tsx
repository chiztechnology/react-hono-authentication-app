'use client'
import Image from "next/image"
import type { FormProps } from 'antd';
import { Button, Form, Input, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/context/userSlice";
import { useRouter } from "next/navigation";

type FieldType = {
    username?: string;
    password?: string;
};

const SignInPage = (props: any) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignIn: FormProps<FieldType>['onFinish'] = async (values: any) => {


        if (values.password.length > 4) {
            setTimeout(() => {
                setLoading(true);
                // pass user details to reducer
                dispatch(setUser({
                    userId: 1,
                    fullName: values.username,
                    username: values.username
                }));
                router.push('/profile');

            }, 2000)

        } else {
            notification.warning({ message: `Your password is too short` })
        }

        setLoading(false);

    };
    return (
        <div className="w-full flex h-[100vh] items-center justify-center bg-white">
            <div className="flex flex-col p-4 rounded-xl shadow-lg w-[80%] md:w-[40%] justify-center items-center">
                <Image src={'/images/hono-title.png'} width={200} height={60} alt="Hono Logo" />
                <Form
                    name="basic"
                    className="mt-8 w-[80%]"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    form={form}
                    onFinish={handleSignIn}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please type your username!' }]}

                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please type your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="******" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button loading={loading} type="primary" htmlType="submit">
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default SignInPage
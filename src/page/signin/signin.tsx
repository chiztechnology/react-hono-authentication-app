import type { FormProps } from 'antd';
import { Button, Form, Image, Input, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from 'react-router-dom';
import { setUser } from '../../context/userSlice';
import logo_app from '../../assets/logic-logo.png'
import './signin.css'

type FieldType = {
    username?: string;
    password?: string;
};

const SignInPage = (props: any) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
                navigate('/profile');

            }, 2000)

        } else {
            notification.warning({ message: `Your password is too short` })
        }

        setLoading(false);

    };
    return (
        <div className="signin-container">
            <div className="signin-sub-container">
                <Image preview={false} src={logo_app} width={155} height={50} alt="Hono Logo" />
                <Form
                    name="basic"
                    className="signin-form"
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
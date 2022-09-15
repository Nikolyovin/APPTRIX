import styles from './Login.module.css'
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.auth.isAuth)

    const onFinish = (values) => {
      dispatch(login(values))
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    console.log('erp_user')
    console.log('12qwaszx12qwaszx')

    if (isAuth) {
        return <Navigate to = {"/users"}/>
    }

  return (
    <div className = { styles.formWrap }>
        <Form
            name="basic"
            labelCol={{span: 8,}}
            wrapperCol={{span: 6,}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    </div>
  );
};

export default Login
import styles from './FormLogin.module.css'
import { Button, Form, Input, Spin, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const FormLogin = () => {
    const dispatch = useDispatch()

    const stateAuth = useSelector(state => state.auth)
    const { isAuth, isLoading, isError401 } = stateAuth
    // const isLoading = useSelector(state => state.auth.isLoading)

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

    if (isLoading) return  (<div className = { styles.loadingWrap }> <Spin size='large' tip="Loading..."/> </div>)

    return (
        <div className = { styles.formWrap }>

            <Typography.Title level={1}  style={{ margin: 0, textAlign: 'center', paddingBottom: 100 }}>
                Пожалуйста, авторизуйтесь в системе!
            </Typography.Title>

            {
                isError401 
                    ? <Typography.Text strong type="danger" style={{ margin: '0 auto', textAlign: 'center', display: 'block'}}>
                        Неверный логин или пароль!
                    </Typography.Text>
                    : <div className = {styles.gag}></div>
                }
            

            <Form
                name="basic"
                labelCol={{span: 10,}}
                wrapperCol={{span: 6,}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <Form.Item
                label="Логин"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста укажите Ваш логин!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите пароль!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 10,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

export default FormLogin
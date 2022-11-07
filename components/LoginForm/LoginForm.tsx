import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { FC, useState } from 'react'
import { useUserContext } from '../../context/CurrentUserContext';
import { TRes, TUser } from '../../types/user';

import styles from './LoginForm.module.scss';

interface ILoginFormProps {
  onSubmit: (user: TUser) => void;
}

const LoginForm: FC<ILoginFormProps> = ({ onSubmit }) => {
  // const [name, setName] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  // const register = async (user: TUser) => {
  //   const res = await axios.post<TRes>('/api/signup', user);
  //   if (res.status === 200) {
  //     setCurrentUser(user);
  //   }
  // }

  // const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
  //   register({ name, password });
  // }

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.name + ' ' + e.target.value)
  //   if (e.target.name === 'name') {
  //     setName(e.target.value);
  //     return;
  //   }
  //   setPassword(e.target.value);
  // }

  const { currentUser, setCurrentUser } = useUserContext();
  const [loginForm] = Form.useForm();

  const submitHandler = (values: TUser) => {
    onSubmit(values);
  }

  const onFill = () => {
    loginForm.setFieldsValue({
      name: 'User',
      password: '1234',
    });
  }

  return (
    <>
      <div className={styles['form-wrapper']}>
        <Form
          form={loginForm}
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default LoginForm
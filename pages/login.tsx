import { Typography } from 'antd';
import axios, { AxiosError } from 'axios';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { useUserContext } from '../context/CurrentUserContext';

import utilStyles from '../styles/utils.module.scss';
import { TRes, TUser } from '../types/user';
import { signin } from '../utils/user_api';

const Login = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const { setCurrentUser } = useUserContext();
  const router = useRouter();

  const signinHandler = async (user: TUser) => {
    try {
      const res = await signin(user);
      if (res.status === 200) {
        setCurrentUser(user);
        router.push('/favorites')
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setErrMessage(err.response?.data.message);
      } else {
        throw new Error('something went wrong');
      }
    }
  }

  return (
    <>
      <Head>
        <title>Doggos | Login</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Login</h1>
        <LoginForm onSubmit={signinHandler} />
        <Typography.Text type={'warning'}>{errMessage}</Typography.Text>
        <Link href='/register'>Need to register first?</Link>
      </section>
    </>
  )
}

export default Login
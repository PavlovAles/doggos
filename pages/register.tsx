import { Typography } from 'antd';
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { useUserContext } from '../context/CurrentUserContext';

import utilStyles from '../styles/utils.module.scss';
import { TUser } from '../types/user';
import { signup } from '../utils/user_api';

const Register = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const { setCurrentUser } = useUserContext();
  const router = useRouter();

  const signupHandler = async (user: TUser) => {
    try {
      const res = await signup(user);
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
        <title>Doggos | Register</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Registration</h1>
        <LoginForm onSubmit={signupHandler} />
        <Typography.Text type={'warning'}>{errMessage}</Typography.Text>
        <Link href='/login'>Already registered?</Link>
      </section>
    </>
  )
}

export default Register
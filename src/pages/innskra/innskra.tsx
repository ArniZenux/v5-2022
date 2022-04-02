import Head from 'next/head'
import Link from 'next/link';

import { Layout } from '../../components/layout/Layout';
import { Login } from '../../components/login/Login';

import s from '../../components/login/Login.module.scss';
import b from '../../components/button/Button.module.scss';

function innskra(){
  return (
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Innskrá</h1>
      <Login/>
      <hr/>
      <ul>
        <li><Link href="/">Forsíða</Link></li>
        <li><Link href="/innskra/innskra">Innskrá</Link></li>
        <li><Link href="/nyskra/nyskra">Nýskrá</Link></li>
      </ul>   
    </Layout>
  ); 
}

export default innskra;

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head'
import Link from 'next/link';

import { Layout } from '../../components/layout/Layout';

export default function PageComponent(){
  return (
    <Layout>
      <Head>
        <title>`Viðburður Zen - NextJs`</title>
      </Head>
      <h1>Innskrá</h1>
      
        <p> Hello Hello prófa </p>

      <hr/>
      <ul>
        <li><Link href="/">Forsíða</Link></li>
        <li><Link href="/innskra/innskra">Innskrá</Link></li>
        <li><Link href="/nyskra/nyskra">Nýskrá</Link></li>
      </ul>   
    </Layout>
  ); 
}

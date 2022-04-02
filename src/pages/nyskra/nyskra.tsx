import Head from 'next/head'
import Link from 'next/link';

import { Layout } from '../../components/layout/Layout';
import { Signup } from '../../components/signup/Signup';

export default function nyskra(){
  return (
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Nýskrá</h1>
      <Signup/>
      <hr/>
      <ul>
        <li><Link href="/">Forsíða</Link></li>
        <li><Link href="/innskra/innskra">Innskrá</Link></li>
        <li><Link href="/nyskra/nyskra">Nýskrá</Link></li>
      </ul>   
    </Layout> 
  ); 
}

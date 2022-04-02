import Head from 'next/head'
import Link from 'next/link';

import { Layout } from '../components/layout/Layout';
import { Events } from '../components/events/Events';

export default function Home() {
  return (
   <Layout>
     <Head>
       <title>Viðburður Zen - NextJs</title>
     </Head>
    <main>
      <h1>Viðburðslisti</h1>
      <h2>Viðburðir á næstunni</h2>
        <Events/> 
      <hr/>
      <ul>
        <li><Link href="/">Forsíða</Link></li>
        <li><Link href="/innskra/innskra">Innskrá</Link></li>
        <li><Link href="/nyskra/nyskra">Nýskrá</Link></li>
      </ul>      
    </main>
   </Layout>
  )
}

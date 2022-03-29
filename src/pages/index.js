import Head from 'next/head'
import Link from 'next/link';

import { Layout } from '../components/layout/Layout';

export default function Home() {
  return (
   <Layout>
    <main>
      <h1>Viðburðslisti</h1>
      <h2>Viðburðir á næstunni</h2>
      <p>Bla bla</p>
      <hr/>
      <ul>
        <li><Link href="/">Forsíða</Link></li>
        <li><Link href="/innskra/innskra">Innskrá</Link></li>
        <li><Link href="/nyskra/nyskra">Nýskrá</Link></li>
      </ul>      
    </main>
   </Layout>
   
    /*
    <div>
      <header className={s.layout__header}>
          <ul className={s.layout__list}>
            <li className={s.layout__listItem}><Link href="/">Viðburðslisti</Link></li>
            <li className={s.layout__listItem}><Link href="/innskra">Innskrá</Link></li>
            <li className={s.layout__listItem}><Link href="/nyskra">Nýskrá</Link></li>
          </ul>
      </header>
      <main className={s.layout__main}> {children} </main>
    </div>
    
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Viðburðslisti</h1>
    </Layout>
    */ 
  )
}

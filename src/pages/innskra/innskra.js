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
    /*
    <Layout>
      
       <main>
        <h1>Innskrá</h1>
     
        <form className={s.Login__form} class="field" method="post" action="/admin/login" autocomplete="off">
          <label className={s.Login__label} for="username">Notandi:</label> 
          <input type="text" name="username "/>
           
          <label className={s.Login__label} for="password">Password:</label>
          <input type="password" id="password" name="password" />
           
          <button className={b.Button__button}>Skrá hæ sig</button>

        </form>
     
     <hr/>
     <ul>
       <li><Link href="/">Forsíða</Link></li>
       <li><Link href="/innskra">Innskrá</Link></li>
     </ul>
           
    </main>
   </Layout>
  */
   ); 
}

export default innskra;

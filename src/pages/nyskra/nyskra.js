import Head from 'next/head'
import { useEffect, useState } from "react";
import { Layout } from '../../components/layout/Layout';
import { Signup } from '../../components/signup/Signup';
import { Footer } from '../../components/footer/footer';
import { Button } from '../../components/button/button';
import { useRouter } from 'next/router';

import L1 from '../../components/login/Login.module.scss';

//const apiUrl = 'https://v3-vefthjousta.herokuapp.com/';
const apiUrl = 'https://vef2-20222-v3-synilausn.herokuapp.com/'; //  Invaldi token, jesus!

function Nyskra(){
  const [Nyskra, setNySkra] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    /*if(!localStorage.getItem('erNySkra')){
      localStorage.setItem('erNySkra', 'false');
    }
    const skraData = window.localStorage.getItem('erSkra');
    */
    //setNySkra(skraData ? JSON.parse(skraData) : false); 
  });

  const onSubmitFall = async( event ) =>{
    event.preventDefault(); 
    console.log('event :', event.target); 
    const data = { 
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(data); 
    const dataJson = JSON.stringify(data);
    const endpoint = apiUrl + 'users/register';
    const options = {
      method: 'POST',
      headers: { 
        'Content-Type':'application/json',
      },
      body: dataJson,
    };
    
    const sending = await fetch(endpoint,options);

    if(sending.ok){
      console.log('sending: ', sending);
      //window.localStorage.setItem("erSkra","true");
      setNySkra(true); 
      router.push('/');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Nýskrá</h1>
      <main>
        <form className={L1.Login__form} method="post" onSubmit={onSubmitFall}>
          <label className={L1.Login__label} htmlFor="nafn">Nafn:</label> 
          <input type="text" id="name" name="name" />
          
          <label className={L1.Login__label} htmlFor="username">Notandi:</label> 
          <input type="text"  id="username" name="username" />

          <label className={L1.Login__label} htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <p id='logged'> {Nyskra ? 'Nýskráður!!' : 'Ekki nýskráður' } </p> 
          <Button/>

        </form>
      </main>
      <hr/>
   
    <Footer/>
    </Layout> 
  ); 
}

export default Nyskra;

import Head from 'next/head'
import { useEffect, useState } from "react";
import { Layout } from '../../components/layout/Layout';
import { Footer } from '../../components/footer/footer';
import { Button } from '../../components/button/button';
import L1 from '../../components/login/Login.module.scss';
import { useRouter } from 'next/router';

//const apiUrl = 'https://v3-vefthjousta.herokuapp.com/';
const apiUrl = 'https://vef2-20222-v3-synilausn.herokuapp.com/'; //  Invaldi token, jesus!

function Innskra(){
  const [SkraInn, setSkraInn] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    function fetchData(){
      
      if(!localStorage.getItem('erSkra')){
        localStorage.setItem('erSkra', 'false');
      }
      
      const skraData = window.localStorage.getItem('erSkra');
      
      setSkraInn(skraData ? JSON.parse(skraData) : false); 
    }

    fetchData();
  
  }, []);
  
  const onSubmitFall = async( event ) =>{
    event.preventDefault(); 
    console.log('event: ', event.target); 
    const data = { 
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(data); 
    const dataJson = JSON.stringify(data);
    const endpoint = apiUrl + 'users/login';
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
      window.localStorage.setItem("erSkra","true");
      setSkraInn(true);
      router.push('/');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Innskrá</h1>
      <main>

        <form className={L1.Login__form} method="post" onSubmit={onSubmitFall}>
          <label className={L1.Login__label} htmlFor="username">Notandi:</label> 
          <input type="text" name="username " id="username"/>
           
          <label className={L1.Login__label} htmlFor="password">Password:</label>
          <input type="password" name="password" id="password"/>
          <p id='logged'> {SkraInn ? 'Skráður inn' : 'Ekki skráður' } </p> 
          <Button/>

        </form>
      </main>
      <hr/>
     
    <Footer/>
    </Layout>
  ); 
}

export default Innskra;
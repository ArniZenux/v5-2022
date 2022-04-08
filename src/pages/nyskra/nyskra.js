import Head from 'next/head'
import { useEffect, useState } from "react";
import { Layout } from '../../components/layout/Layout';
import { Signup } from '../../components/signup/Signup';
import { Footer } from '../../components/footer/footer';
import { Button } from '../../components/button/button';

import L1 from '../../components/login/Login.module.scss';

const apiUrl = 'https://v3-vefthjousta.herokuapp.com/';

function nyskra(){
  const [Nyskra, setNySkra] = useState(false);

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
    console.log('event --> ', event.target); 
    const data = { 
      nameuser: event.target.nameuser.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(data); 
    const dataJson = JSON.stringify(data);
    const endpoint = apiUrl + 'notandi/register';
    const options = {
      method: 'POST',
      headers: { 
        'Content-Type':'application/json',
      },
      body: dataJson,
    };
    const sending = await fetch(endpoint,options);
    const notAdmin = document.querySelector('#logged');
    if(sending.ok){
      console.log('sending: ', sending);
      //window.localStorage.setItem("erSkra","true");
      setNySkra(true); 
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
          <label className={L1.Login__label} for="nafn">Nafn:</label> 
          <input type="text" id="nameuser" name="nameuser" />
          
          <label className={L1.Login__label} for="username">Notandi:</label> 
          <input type="text"  id="username" name="username" />

          <label className={L1.Login__label} for="password">Password:</label>
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

export default nyskra;

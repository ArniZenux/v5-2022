import Head from 'next/head'
import Link from 'next/link';
import React, { useEffect, useState  } from 'react';

import { Layout } from '../components/layout/Layout';
import { Footer } from '../components/footer/footer';

const apiUrl = 'https://v3-vefthjousta.herokuapp.com/';
//const apiUrl = 'https://vef2-20222-v3-synilausn.herokuapp.com/'  Invaldi token, jesus!

console.log(apiUrl);

export default function Home() {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 

      let json; 
      try  
      {
        const result = await fetch(apiUrl + 'events'); 
        if(!result.ok){
          throw new Error('Ekki ok');        }

        json = await result.json();

      }
      catch(e){
        console.warn('unable to fetch data', e); 
        setError('Gat ekki sótt efni í vefþjónustu - Bilað í þjónustuna.');
        return; 
      }
      finally{
        setLoading(false); 
      }
      
      console.log(json);

      setData(json); 

    }

    fetchData(); 
  }, []);
  
  if (error) {
    return (
      <Layout>
      <Head>
        <title>Viðburður Zen - NextJS</title>
      </Head>
      <main>
        <h1>Viðburðslisti</h1>
        <h2>Viðburðir á næstunni</h2>
        
        <p> Villa, tókst ekki að sækja gögn</p>
        
      <hr/>
     
      </main>
      <Footer/>
      </Layout>
   );
  }

  if(loading){
    return (
      <Layout>
      <Head>
        <title>Viðburður Zen - NextJS</title>
      </Head>
      <main>
        <h1>Viðburðslisti</h1>
        <h2>Viðburðir á næstunni</h2>
        
        <p> Sæki gögn.... </p>
        
      <hr/>
          
      </main>
      <Footer/>
      </Layout>
    )
  }
  
  return (
    <Layout>
    <Head>
      <title>Viðburður Zen - NextJS</title>
    </Head>
    <main>
      <h1>Viðburðslisti</h1>
      <h2>Viðburðir á næstunni</h2>
      <ul>
      { 
       data.map( (item, index) => (
          <li key={index}><Link href={`/event/${item.id}`}><a> { item.namevidburdur } </a></Link></li> 
       ))
      }
      </ul>
      
    <hr/>
      
    </main>
    <Footer/>
    </Layout>

  );
}
import Head from 'next/head'
import React, { useEffect, useState  } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Footer } from '../../components/footer/footer';
import { Form } from '../../components/form/form';
import { useRouter } from 'next/router';

const apiUrl = 'https://v3-vefthjousta.herokuapp.com/';

export default function EventOne(){
  const router = useRouter();
  const {id} = router.query;

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 
      setNotFound(false); 

      let json; 

      const apiUrlId = apiUrl + 'events/';
      const url = new URL(id, apiUrlId); 

      try{
        const result = await fetch(url); 
        
      if(result.status === 404 ){
        setNotFound(true); 
        return;
      }

      if(!result.ok){
        throw new Error('Ekki ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        setError('Gat ekki sótt efni');
        return; 
      }
      finally{
        setLoading(false); 
      }
      
      console.log(json);

      setData(json);
    }

    fetchData(); 
  }, [id]);
  
  let itemss = []; 
  let notendur = [];

  if( data && data.items){
      itemss = data.items;
      notendur = data.notendur;
  }

  if (error) {
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Viðburðir á næstunni</h1>

      <p>Villa...</p>     
      
      <hr/>
      <Form/>
      <hr/>
     
    <Footer/>
    </Layout>
  }

  if(loading){
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Viðburðir á næstunni</h1>

      <p>sæki gögn....</p>     
      
      <hr/>
      <Form/>
      <hr/>
     <Footer/>
    </Layout>
  } 
 
  return (
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Viðburðir á næstunni</h1>
     
      {itemss.map((item, i) => (
        <h2 key={i}>{ item.namevidburdur }</h2>
      ))}
     
      <br/>
      <h3> Skráningur </h3>

      <ul>
      
      { ( notendur && notendur.length > 0 && notendur.map((item,i ) => {
          return (  
                <ul key={i}> 
                  <li key={i}> { item.nameskra } </li>
                  <li key={i}> { item.comment }</li>
                </ul>
                )
             })
         ) }

      </ul>
      <hr/>
      <Form/>
      <hr/>
    
    <Footer/>
    </Layout>
  ); 
}
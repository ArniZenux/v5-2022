import React, { useEffect, useState  } from 'react';
import { Event } from '../event/Event';

import s1 from './Events.module.scss';

import { IEventArray, IEventOverview  } from '../../types'

const apiUrl = 'https://v3-vefthjousta.herokuapp.com';

console.log("apiUrl: " + apiUrl); 

export function Events() {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 

      let json; 

      try{
        const result = await fetch(apiUrl + '/events'); 

        if(!result.ok){
          throw new Error('Ekki ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        //setError();
        return; 
      }
      finally{
        setLoading(false); 
      }
      setData(json); 
    }

    //console.log(data);

    fetchData(); 
  }, []);

  if (error) {
    return (
      <div className={s1.Events__header}>
          <p> Villa: {error} </p>
      </div>
   );
  }

  if(loading){
    return (
     <div className={s1.Events__header}>
          <p> sæki gögn .... loading... </p>
     </div>
    )
  } 

return (
  <main>
   <section className={s1.Events__header}>
      { data.length === 0 && ( <p className={s1.Events_layout__h2}> Engir viðburðir </p>) }
        
        { 
         data.map( (item, i) => {
           return (
            <div key={i} className={s1.Event_layout____item}>
              <p> Hello prófa </p>
             </div>
            )
          })
        }
    </section> 
  </main>
  );
}


export async function getServerSideProps() {
	const res = await fetch(
		`https://v3-vefthjousta.herokuapp.com`
	);
	const events: IEventArray = await res.json();
	return {
		props: { events }, // will be passed to the page component as props
	};
}
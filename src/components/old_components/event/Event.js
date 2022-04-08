import React, { useEffect, useState  } from 'react';
//import { Link } from "react-router-dom";
//import { NotFound } from '../../pages/notfound';
import Link from 'next/link';
import PropTypes from 'prop-types';

//import { Form } from '../../components/form/form';

import se from './Event.module.scss';
import { IEventArray, IEventOverview  } from '../../types';

const apiUrl = 'https://v3-vefthjousta.herokuapp.com';
console.log("apiUrl: " + apiUrl); 
//const apiUrl = process.env.REACT_APP_API_URL;

Event.propTypes = {
  id: PropTypes.string.isRequired,
  idUrl: PropTypes.string,
  limit: PropTypes.number,
}

export function Event( props: { events: IEventArray } ){
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [dataEvent, setData] = useState(null);
 
  //console.log(title);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 
      setNotFound(false); 

      let json; 
      const apiUrlId = apiUrl + '/events/';
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
        //setError('Gat ekki sótt efni');
        return; 
      }
      finally{
        setLoading(false); 
      }
      
      setData(json);
     
    }
    fetchData(); 
  }, [id]);

  if (error) {
    return (
      <div className="App">
        <h2>Viðburðarlisti</h2>
          <p> Villa.. {error} </p>
      </div>
   );
  }

  if(loading){
    return (
     <div className="App">
       <h2>Viðburðarlisti</h2>
          <p> sæki gögn .... loading... </p>
     </div>
    );
  } 
 
  /*if(notFound){
    return (
     <NotFound />
    );
  }*/
 
  let itemss = []; 
  let notendur = [];
/*
  if( dataEvent && dataEvent.items){
      itemss = dataEvent.items;
      notendur = dataEvent.notendur;
  }
  */
  if( itemss.length === 0 ) {
    return (  
        <section> 
          <p> Engir viðburðir </p> 
        </section>
    )
  }
         
  return (
    <section>
      { 
      /*1
        idUrl && itemss.length > 0 && itemss.map((item,i ) => {
           return (
               
            <ul>
                <li key={i}> <Link href={`/event/${item.id}`}><a>{item.namevidburdur}</a></Link> </li>
            </ul>
           ) 
        })
        */
      }       
      { 
        /*idUrl && (itemss && itemss.length > 0 && itemss.map((item,i ) => {
          return (  
                <ul className={se.Event__ul}> 
                  <li className={se.Event__li}> <Link href={apiUrl + '/events'+idUrl} ><a> { item.namevidburdur } </a> </Link>  </li>
                </ul>
                )
            })
          )
      
         idUrl && ( itemss && itemss.length > 0 && itemss.map((item,i ) => {
          return (  
                <ul className={se.layout__ul}> 
                  <li className={se.layout__li} > <Link href={apiUrl + '/events' + idUrl} ><a> { item.namevidburdur }</a></Link> 
                  </li>
                </ul>
                )
             })
            ) */
        }
        { 
            // !idUrl && ( <Link to="/"> Til baka </Link> ) 
        }
    </section>
  /*
                   <Link href={apiUrl + '/events' + idUrl} ><a> { item.namevidburdur }</a></Link> 
                
        { !idUrl && ( <hr className={se.layout__hr}/> ) }
        { !idUrl && ( notendur && notendur.length > 0 && notendur.map((item,i ) => {
          return (  
                <ul className={se.layout__ul}> 
                  <li className={se.layout__li}> { item.nameskra } </li>
                  <li className={se.layout__li2}> { item.comment }</li>
                </ul>
                )
             })
         ) }

        { !idUrl && ( <Form/> ) } 
        { !idUrl && ( <Link to="/"> Til baka </Link> ) }

      </section>
    </div>*/

  );
}

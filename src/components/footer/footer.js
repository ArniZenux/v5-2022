import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer(){
  const [SkraInn, setSkraInn] = useState(false);

  useEffect(() => {
    function fetchData(){
      if(!localStorage.getItem('erSkra')){
        localStorage.setItem('erSkra', 'false');
      }

      const skraData = window.localStorage.getItem('erSkra');
      setSkraInn(skraData ? JSON.parse(skraData) : false); 
    }
  
    fetchData(); 
  },[]);
  
  return (
    <footer>
       <ul>
        <li><Link href="/">Forsíða</Link></li>
        <li><Link href="/nyskra/nyskra">Nýskrá</Link></li>
        <Link href={SkraInn ? '/utskra/logout' : '/innskra/innskra'}><a>{SkraInn ? 'Útskrá' : 'Innskrá'}</a></Link>
        <p id='logged'> {SkraInn ? 'Skráður inn' : 'Ekki skráður' } </p> 
      </ul>      
      <hr/>
      Footer ehf. 
    </footer>
  );
}
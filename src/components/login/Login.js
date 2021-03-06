import { Button } from '../button/button';

import L1 from './Login.module.scss';

export function Login(){
  return (
      <main>

        <form className={L1.Login__form} method="post" action="/admin/login" autoComplete="off">
          <label className={L1.Login__label} htmlFor="username">Notandi:</label> 
          <input type="text" name="username "/>
           
          <label className={L1.Login__label} htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
           
          <Button/>

        </form>
      </main>
  );
 }

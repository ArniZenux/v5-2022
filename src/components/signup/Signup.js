import { Button } from '../button/button';

import L1 from './Signup.module.scss';

export function Signup(){
  return (
      <main>

        <form className={L1.Login__form} method="post" action="/admin/login">
          <label className={L1.Login__label} for="username">Notandi:</label> 
          <input type="text" name="username "/>
           
          <label className={L1.Login__label} for="username">Notandi:</label> 
          <input type="text" name="username "/>

          <label className={L1.Login__label} for="password">Password:</label>
          <input type="password" id="password" name="password" />
           
          <Button/>

        </form>
      </main>
  );
 }

import { Button } from '../button/button';
import ff from './Form.module.scss';

export function Form(){
  return (
    <div className="App">
      <main>
       <form class="field" method="post" action="/admin/login" autocomplete="off">
         <label className={ff.Form_layout__label} for="name">Nafn:</label> 
         <input className={ff.Form_layout__input} type="text" name="name "/>
         <br/>
         <label className={ff.Form_layout__label} for="comment">Athugsemdir:</label>
         <input className={ff.Form_layout__input} type="text" id="comment" name="comment" />
        
         <Button />
      </form>
    </main>
  </div>
 );
}

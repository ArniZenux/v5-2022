import Link from 'next/link';

import s1 from './Events.module.scss';

export function Events({ event }){
  return (
   <main>
   <section className={s1.Events__header}>
            <div className={s1.Event_layout____item}>
              <ul>
                <li> <Link href={`/event/${event.id}`}><a>{event.name}</a></Link> </li>
              </ul>
            </div>
    </section> 
  </main> 
  );
}

import s from './Layout.module.scss';
/*
type Props = {
  children: React.ReactNode;
};*/

export function Layout({ children }) {
  return (
    <main className={s.layout__main}> {children} </main>
  );
}
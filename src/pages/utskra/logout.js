import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from '../../components/layout/Layout';
import { Footer } from '../../components/footer/footer';

function Logout(){
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('erSkra', 'false');
    router.push('/');
  });

  return (
    <Layout>
      <Head>
        <title>Viðburður Zen - NextJs</title>
      </Head>
      <h1>Útskrá</h1>
      <hr/>
     
    <Footer/>
    </Layout>
  );
}

export default Logout;
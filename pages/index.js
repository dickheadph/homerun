import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
import Navbar from '@/Layout/navbar';
import Hero from '@/Layout/hero';
import Features from '@/components/features';
import BannerContainer from '@/components/banner-container';
import Footer from '@/Layout/footer';
import Feedbacks from '@/components/feedbacks';
export default function Home() {
  return (
    <>
      <Head>
        <title>Homerun: Construction and Architecture</title>
        <meta
          name='description'
          content='Never worry about your future home. We at Homerun got your back. We can provide you with the most modern House Architecture from Design, materilas p[laaning and the actual construction of your home.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={''}>
        <Navbar />
        <Hero />
        <Features />
        <BannerContainer />
        <Feedbacks />
        <Footer />
      </main>
    </>
  );
}

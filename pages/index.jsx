import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tatoo my face</title>
        <meta name="description" content="Réserver votre prochain tatouage en ligne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className="max-w-7xl mx-auto">
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
        </section>
      </main>
    </div>
  )
}

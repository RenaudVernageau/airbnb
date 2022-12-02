import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData,cardsData}) {
  return (
    <div>
      <Head>
        <title>Tatoo my face</title>
        <meta name="description" content="Réserver votre prochain rendez-vous pour un tatouage en ligne." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explorer les environs</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({img,name,distance,location}) => (
              <SmallCard 
                key={img}
                name={name} 
                img={img} 
                distance={distance} 
                location={location} 
              />
            ))} 
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Nos coups de cœur</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({img,title}) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
          </section>
          <section>
          <div>
            <LargeCard
              img="/images/largeCard.jpg"
              title="Témoignage"
              description="Jean-Renaud de Vernageau - Amateur de tatouages"
              buttonText="Inspirez-vous"
            />
          </div>
          </section>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData : exploreData,
      cardsData : cardsData
    }
  }
}
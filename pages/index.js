import Head from 'next/head'
import Testimonial from './testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BeKoder - Share the Code</title>
        <meta name="description" content="BeKoder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div>
        <img src="/home.jpg" alt='Home' />
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-serif text-gray-900">BeKoder - Share the Code</h1>
                <p className="mb-1 leading-relaxed">BeKoder A platform to share your code and projects freely without any cost. Awesome,extraordinary and amazing projects are waiting for u. Go and Grab them at the Projects page and to upload your projects go to the Creativity page. Have a nice day ahead.</p>
              </div>
          </div>
        </section>
      </div>
      </main>


    <Testimonial />
    </div>


  )
}

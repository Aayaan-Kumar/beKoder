import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <div>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1858086125833373" crossorigin="anonymous"></script>
        <title>BeKoder - About Us</title>
        <meta name="description" content="BeKoder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src='/about.jpg' alt='about' />
      <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">About Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hello everyone, this is a website to give you awesome coding projects and templates. We support HTML, Next JS, React, Python, and many more are coming in the future. So stay tuned for more awesome projects. This is all for now. </p>
          </div>
          </div>
      </section>
      </main>
    </div>
  )
}

export default about

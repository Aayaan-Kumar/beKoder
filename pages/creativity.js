import React from 'react'
import Head from 'next/head'

const creativity = () => {
  return (
    <div>
      <Head>
        <title>BeKoder - Creativity</title>
        <meta name="description" content="BeKoder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src='/creative.jpg' alt='creativity'/>
      </div>
      <div className='text-4xl text-black justify-center py-20 px-5'>
        <p>This page is under development.Come back soon.</p>
      </div>
    </div>
  )
}

export default creativity
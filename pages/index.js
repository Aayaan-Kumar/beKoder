import Head from 'next/head'
import Testimonial from './testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1858086125833373"
     crossorigin="anonymous"></script>
        <title>BeKoder - Share the Code</title>
        <meta name="description" content="BeKoder" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="WuQ9OpdL0B248z-aRwSWsxu_DmTrsw1DtVdx8V4CEEY" />
        <script>(function(w, d) { w.CollectId = "62bbfe7b7fd5da5e20c6907a"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);</script>
      </Head>
      <main>
      <div>
        <img src="/home.jpg" alt='Home' />
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1858086125833373"
     crossorigin="anonymous"></script>
<!-- square ads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1858086125833373"
     data-ad-slot="6939352790"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
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

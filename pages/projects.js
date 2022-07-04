import React from 'react'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Projects = ({ projects }) => {
  const message = () => toast("Download started!");


  return (
    <div>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1858086125833373"
     crossorigin="anonymous"></script>
        <title>BeKoder - Projects</title>
        <meta name="description" content="CodersEra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/project.jpg" alt="image" />
      <main>
        <section className="text-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Python</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">BeastBoy- A Virtual Assistant</h1>
                  <p className="leading-relaxed mb-3">BeastBoy is a virtual assistant and he can do as many tasks as you want by just adding a few lines of code.</p>
                  <a onClick={message} href="/projects/BeastBoy.docx" download="BeastBoy.docx" className="text-purple-700 cursor-pointer inline-flex items-center">Get Codes
                    <ToastContainer />
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Python</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Voice Typing in Python</h1>
                  <p className="leading-relaxed mb-3">This is a program to convert voice to text and then type it, simply, it is a voice typing program</p>
                  <a onClick={message} href="/projects/Writer.py" download="Writer.py" className="text-purple-700 cursor-pointer inline-flex items-center">Get Codes
                    <ToastContainer />
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Tailwind CSS - HTML</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">A Virtual Assistant site</h1>
                  <p className="leading-relaxed mb-3">This is a assistant site made by using tailwind css. You can use it if you want to public your virtual assistant</p>
                  <a onClick={message} href="/projects/Assistant Site.zip" download="Assistant Site.zip" className="text-purple-700 cursor-pointer inline-flex items-center">Get Codes
                    <ToastContainer />
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Python Tkinter</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Sign Up Page with datasheet</h1>
                  <p className="leading-relaxed mb-3">This is a sign up page made in python tkinter, it also has a datasheet which records all the actions.</p>
                  <a onClick={message} href="/projects/Signup.zip" download="Signup.zip" className="text-purple-700 cursor-pointer inline-flex items-center">Get Codes
                    <ToastContainer />
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">React</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">GetPost - Social Media App</h1>
                  <p className="leading-relaxed mb-3">GetPost is a social media app or site created in React. You can post GIFs and photos to it by just signing up.</p>
                  <a href="https://getpostgp.netlify.app/" className="text-purple-700 cursor-pointer inline-flex items-center">Check it now!
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>




            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Projects;

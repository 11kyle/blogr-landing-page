import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Section from "./components/Section"
import Image from "./components/Image"
import editorDesktop from "./assets/illustration-editor-desktop.svg"
import editorMobile from "./assets/illustration-editor-mobile.svg"
import laptopDesktop from "./assets/illustration-laptop-desktop.svg"
import laptopMobile from "./assets/illustration-laptop-mobile.svg"
import phones from "./assets/illustration-phones.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <Main>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-content-center">
          <div className="xl:order-2 place-self-center xl:place-self-start">
            <Image desktopSrc={editorDesktop} mobileSrc={editorMobile} />
          </div>
          <div className="xl:order-1 xl:my-auto place-self-center xl:place-self-end">
            <Section
              heading="Introducing an extensible editor"
              body="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
            />
            <Section
              heading="Robust content management"
              body="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 bg-circle-pattern bg-[center_bottom_0rem] bg-no-repeat text-center xl:text-left rounded-tr-[100px] rounded-bl-[100px] xl:h-[400px] pb-24 xl:pb-0 mt-72 xl:mt-20 mb-20">
          <div className="relative place-self-center xl:place-self-end">
            <img
              className="aboslute top-0 -translate-y-[45%] xl:-translate-y-[13%]"
              src={phones}
              alt="phones"
            />
          </div>

          <div className="place-self-center xl:place-self-start max-w-[540px] xl:my-auto">
            <h1 className="text-white text-[40px] leading-[61px] font-semibold mb-4 -mt-52">
              State of the Art Infrastructure
            </h1>
            <p className="text-white text-base leading-7 font-normal px-6 xl:px-0">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>

        {/* <div className="relative bg-circle-pattern bg-[center_bottom_0rem] bg-no-repeat text-center rounded-tr-[100px] rounded-bl-[100px] pb-24 mt-72 mb-20">
          <img
            className="aboslute top-0 -translate-y-1/2"
            src={phones}
            alt="phones"
          />
          <h1 className="text-white text-[40px] leading-[61px] font-semibold mb-4 -mt-52">
            State of the Art Infrastructure
          </h1>
          <p className="text-white text-base leading-7 font-normal px-6">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div> */}

        <div className="grid grid-cols-1 xl:grid-cols-2 place-content-center">
          <div className="place-self-center xl:place-self-end">
            <Image desktopSrc={laptopDesktop} mobileSrc={laptopMobile} />
          </div>
          <div className="place-self-center xl:place-self-start xl:my-auto">
            <Section
              heading="Free, open, simple"
              body="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
            />
            <Section
              heading="Powerful tooling"
              body="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
            />
          </div>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default App

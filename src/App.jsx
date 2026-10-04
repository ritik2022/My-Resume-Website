import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import { ContactSection, default as ContactDialog } from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const dialogRef = useRef(null);
  const [isBlog, setIsBlog] = useState(window.location.hash === "#/blog");

  useEffect(() => {
    const route = () => {
      const blog = window.location.hash === "#/blog";
      setIsBlog(blog);
      document.title = blog ? "Blog | Ritik Kumar" : "Ritik Kumar | Business Analyst";

      if (blog) {
        window.scrollTo(0, 0);
      } else {
        const id = window.location.hash.slice(1);
        const element = id && document.getElementById(id);
        if (element && id !== "top") element.scrollIntoView();
        else if (!id || id === "top") window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", route);
    route();
    return () => window.removeEventListener("hashchange", route);
  }, []);

  const openContact = () => dialogRef.current?.showModal();
  const closeContact = () => dialogRef.current?.close();

  return (
    <>
      <Header />

      <main id="top">
        {isBlog ? (
          <Blog />
        ) : (
          <>
            <Hero onContact={openContact} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <ContactSection />
          </>
        )}
      </main>

      <Footer />
      <ContactDialog dialogRef={dialogRef} onClose={closeContact} />
    </>
  );
}

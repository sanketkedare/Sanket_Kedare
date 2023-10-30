import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div >
        <HomePage />
        <About />
        <Skills />
        <Resume />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

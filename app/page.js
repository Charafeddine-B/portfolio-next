import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex  justify-between">
          <h1 className="text-xl font-burtons">developedby</h1>
          <ul className="flex items-center ">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Charaf Eddine Belyazid</h2>
          <h3>FullStack Developer</h3>
          <p>4th year student @EMSI 
            Freelancer providing services for programming and needs. Join me down below and let's get cracking!</p>
        </div>
        <div>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>


        </div>
      </section>
    </main>
  );
}

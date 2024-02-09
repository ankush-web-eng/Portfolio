import Link from "next/link";
import { ModeToggle } from "@/components/toggle-theme";
import { FaLinkedin } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSocketdotio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="flex justify-between max-h-full py-3">
        <ul className="md:ml-6 ml-1 flex flex-row space-x-3 items-center">
          <li className="font-serif font-bold text-2xl box-shadow-xl p-2 rounded-lg hover:bg-blue-400 ease-linear duration-300 cursor-pointer">
            Portfolio
          </li>
        </ul>
        <ul className="flex md:mr-6 mr-1 items-center font-serif space-x-4">
          <li className="hover:bg-blue-400 p-2 rounded-lg ease-linear duration-300">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:bg-blue-400 p-2 rounded-lg ease-linear duration-300">
            <Link href="/freelance">Freelance</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <main className="flex md:flex-row flex-col md:justify-around items-center mt-6 ">
        <img
          alt="Ankush"
          src="/Ankush_1mb.jpg"
          // width={250}
          // height={500}
          className="rounded-full w-56 h-56"
        />
        <div className="md:w-1/2 w-5/6 mt-5 flex flex-col space-y-4 items-start">
          <p className="p-4 ease-linear duration-300 italic font-bold">
            Hi! I am Ankush, a Full-Stack Web Developer with skill set of
            NEXTJS, TypeScript and MongoDB. I work in MERN Stack totally and
            provide my services as a freelancer on multiple platforms. If you
            want to join me, Connect me with my Social Media Handles.
          </p>
          <span className="flex flex-row space-x-4">
            <Link
              href="https://www.linkedin.com/in/ankush-singh-b0389b27b/"
              target="_blank"
            >
              <FaLinkedin color="blue" size={20} />
            </Link>
            <Link href="https://github.com/ankush-web-eng/" target="_blank">
              <RxGithubLogo size={20} />
            </Link>
            <Link href="https://www.instagram.com/ankush__57s/" target="_blank">
              <FaInstagram color="red" size={20} />
            </Link>
          </span>
        </div>
      </main>
      <div className="mt-4  h-screen flex flex-col bg-blue-500 dark:bg-pink-500">
        <h1 className="flex items-center mt-4 ml-4">
          <MdWork size={40} color="blue" />
          <span className="text-2xl font-serif font-bold dark:text-black">
            Projects
          </span>
        </h1>
        <div className="flex justify-evenly items-center md:flex-row flex-wrap">
          <section className="box-shadow-xl shadow-xl px-2 py-1 bg-white dark:bg-black rounded-md flex-col">
            <h1 className="flex items-center justify-start">
              <IoIosChatbubbles />
              <span className="font-bold">Chat-App</span>
            </h1>
            <p className="">
              A Real Time Chat Application
              <br />
              where old-messages persisted <br />
              on Screen.
              <br />
              <h1 className="flex space-x-2">
                <TbBrandNextjs  size={20}/>
                <SiSocketdotio color="blue" size={20}/>
                <SiMongodb color="green" size={20}/>
              </h1>
            </p>
          </section>
          <section className="box-shadow-xl shadow-xl px-2 py-1 bg-white dark:bg-black rounded-md flex-col"></section>
          <section className="box-shadow-xl shadow-xl px-2 py-1 bg-white dark:bg-black rounded-md flex-col"></section>
          <section className="box-shadow-xl shadow-xl px-2 py-1 bg-white dark:bg-black rounded-md flex-col"></section>
        </div>
      </div>
    </div>
  );
}

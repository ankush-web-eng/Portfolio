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
import { FaBlog } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col scroll-smooth overflow-x-hidden ">
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
      <main className="flex md:flex-row flex-col md:justify-around items-center mt-6 mb-8">
        <img
          alt="Ankush"
          src="/Ankush_1mb.jpg"
          // width={250}
          // height={500}
          className="rounded-full w-56 h-56"
        />
        <div className="md:w-1/2 w-5/6 mt-5 flex flex-col space-y-4 items-start">
          <div className="p-4 ease-linear duration-300 italic font-bold">
            Hi! I am Ankush, a Full-Stack Web Developer with skill set of
            NEXTJS, TypeScript and MongoDB. I work in MERN Stack totally and
            provide my services as a freelancer on multiple platforms. If you
            want to join me, Connect me with my Social Media Handles.
          </div>
          <div className="flex flex-row space-x-4">
            <Link
              href="https://www.linkedin.com/in/ankush-singh-b0389b27b/"
              target="_blank"
            >
              <FaLinkedin color="blue" size={25} />
            </Link>
            <Link href="https://github.com/ankush-web-eng/" target="_blank">
              <RxGithubLogo size={25} />
            </Link>
            <Link href="https://www.instagram.com/ankush__57s/" target="_blank">
              <FaInstagram color="red" size={25} />
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-4 mb-8 flex flex-col bg-blue-500 dark:bg-teal-500">
        <div className="mt-4 ml-5 flex flex-col">
          <div className="flex items-center space-x-2">
            <BsBoxFill color="black" size={30} />
            <p className="font-bold text-2xl text-black">Tech-Stacks</p>
          </div>
          <div className="flex items-center justify-start space-x-3 ml-20 mt-3">
            <FaHtml5 color="red" size={25} />
            <IoLogoCss3 color="orange" size={25} />
            <IoLogoJavascript color="yellow" size={25} />
            <SiTypescript color="blue" size={25} />
            <SiMongodb color="green" size={25} />
            <SiExpress color="red" size={25} />
            <FaReact color="blue" size={25} />
            <FaNodeJs color="black" size={25} />
            <SiTailwindcss color="blue" size={25} />
            <TbBrandNextjs color="black" size={25} />
            <SiSocketdotio color="blue" size={25} />
          </div>
        </div>
        <div className="flex items-center mt-4 ml-4 space-x-2">
          <MdWork color="black" size={40} />
          <span className="text-2xl font-serif font-bold dark:text-black">
            Projects
          </span>
        </div>
        <div className="flex justify-evenly items-center md:flex-row flex-col space-y-3 mb-8">
          <section className="box-shadow-xl shadow-xl px-2 py-1 bg-white dark:bg-black rounded-md flex-col">
            <div className="flex items-center justify-start">
              <IoIosChatbubbles />
              <div className="font-bold">
                <Link
                  href="https://blog-app-five-coral.vercel.app/"
                  target="_blank"
                >
                  Chat-App
                </Link>
              </div>
            </div>
            <div className="">
              A Real Time Chat Application
              <br />
              where old-messages persisted <br />
              on Screen.
              <br />
              <div className="flex space-x-2">
                <TbBrandNextjs size={20} />
                <SiSocketdotio color="blue" size={20} />
                <SiMongodb color="green" size={20} />
                <SiTailwindcss color="blue" size={20} />
              </div>
            </div>
          </section>
          <section className="box-shadow-xl shadow-xl px-2 py-1 bg-white dark:bg-black rounded-md flex-col">
            <div className="flex items-center justify-start">
              <FaBlog />
              <span className="font-bold">Blog-App</span>
            </div>
            <div className="">
              A Blog Web Application
              <br />
              where User can share his <br />
              thoughts for everyone to read.
              <br />
              <div className="flex space-x-2">
                <TbBrandNextjs size={20} />
                <SiMongodb color="green" size={20} />
                <SiTailwindcss color="blue" size={20} />
              </div>
            </div>
          </section>
          <section className="box-shadow-xl shadow-xl px-2 py-1 mb-10 bg-white dark:bg-black rounded-md flex-col">
            <div className="flex items-center justify-start">
              <GiSlicedBread />
              <span className="font-bold">E-Commerce Store</span>
            </div>
            <div className="">
              An E-commerce Store which is
              <br />
              used to keeps record of <br />
              all items of a grocery Store.
              <br />
              <div className="flex space-x-2">
                <SiMongodb color="green" size={20} />
                <SiExpress color="red" size={20} />
                <FaReact color="skyblue" size={20} />
                <FaNodeJs size={20} />
                <SiTailwindcss color="blue" size={20} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="h-1/4 "></div>
    </div>
  );
}

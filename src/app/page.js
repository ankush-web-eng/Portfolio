import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/toggle-theme";
import { FaLinkedin } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="flex justify-between max-h-full py-3">
        <ul className="ml-6 flex flex-row space-x-3 items-center">
          
          <li className="font-serif font-bold text-2xl box-shadow-xl p-2 rounded-lg hover:bg-blue-400 ease-linear duration-300 cursor-pointer">
            Portfolio
          </li>
        </ul>
        <ul className="flex mr-6 items-center font-serif space-x-4">
          <li  className="hover:bg-blue-400 p-2 rounded-lg ease-linear duration-300">
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
        <Image
        alt="Ankush"
        src="/Ankush_1mb.jpg"
        width={200}
        height={250}
        className="rounded-full"

         />
         <div className="md:w-1/2 w-5/6 mt-5 flex flex-col space-y-4">
          <p className="p-4 ease-linear duration-300">
            Hi! I am Ankush, a Full-Stack Web Developer with skill set of NEXTJS, TypeScript and MongoDB.
            I work in MERN Stack totally and provide my services as a freelancer on multiple plateforms.
            If you want to join me, Connect me with my Social Media Handles. 
          </p>
          <span className="flex flex-row space-x-4">
            <Link href="https://www.linkedin.com/in/ankush-singh-b0389b27b/" target="_blank"><FaLinkedin /></Link>
            <Link href="https://github.com/ankush-web-eng/" target="_blank"><RxGithubLogo /></Link>
            <Link href="https://www.instagram.com/ankush__57s/" target="_blank"><FaInstagram /></Link>
          </span>
         </div>
      </main>
    </div>
  );
}

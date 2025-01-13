import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaBlogger, FaLinkedin } from "react-icons/fa";

export default function SectionOne() {
  return (
    <div className="relative flex flex-row w-full justify-evenly gap-8 h-screen bg-transparent">
      <div
        className="flex flex-col gap-8 sm:gap-14 justify-center sm:pl-4 pt-10
        font-bold text-[#f7f7f7] text-3xl sm:text-5xl"
      >
        <img
          className="w-[220px] h-[220px] border rounded-full brightness-75 sm:hidden"
          src="src/assets/me.jpg"
          alt="Me"
        />
        <div className="text-orange-400 ">Hello! I&apos;m</div>
        <div className="flex flex-col sm:text-8xl">
          <span>Hyunjin</span>
          <span>Shin</span>
        </div>
        <div className="text-green-400 text-3xl sm:text-5xl">Web Developer</div>
        <button className="bg-green-600 hover:bg-green-500 sm:hover:w-80 transition-all text-[#f7f7f7] font-bold py-2 px-4 mt-8 mb-2 rounded-full w-60">
          Hire Me
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:gap-6 sm:items-center sm:justify-center sm:pt-20 sm:w-[500px]">
        <img
          className="w-[280px] h-[280px] border rounded-full brightness-75"
          src="src/assets/me.jpg"
          alt="Me"
        />
        <div className="text-[#f7f7f7] text-xl">
          <span className="text-3xl text-orange-500">With</span> a passion for
          solving complex problems, I enjoy creating APIs, designing database
          architectures, building web application with seamless user
          experiences.
        </div>
        <div className="flex flex-col w-full gap-4 mt-10">
          <div className="text-3xl w-full text-green-800 font-bold">
            Connect with Me
          </div>
          <div className="flex flex-row justify-start gap-8 h-24 w-full">
            <a
              href="https://github.com/gitdevjin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="bg-[#f7f7f7] hover:bg-blue-200 text-black size-12 rounded-full opacity-50 transition-all transform hover:scale-125" />
            </a>
            <FaSquareXTwitter className="bg-[#f7f7f7] hover:bg-blue-200 text-black size-12 rounded-md opacity-50 transition-all transform hover:scale-125" />
            <FaBlogger className="bg-[#f7f7f7] hover:bg-blue-200 text-black size-12 rounded-md opacity-50 transition-all transform hover:scale-125" />
            <FaLinkedin className="bg-[#f7f7f7] hover:bg-blue-200 text-black size-12 rounded-md opacity-50 transition-all transform hover:scale-125" />
            <IoIosMail className="bg-[#f7f7f7] hover:bg-blue-200 text-black size-12 rounded-md opacity-50 transition-all transform hover:scale-125" />
          </div>
        </div>
      </div>

      <img
        className="absolute animate-spin w-[250px] -left-6 top-[80px] p-0 m-0 hidden lg:block opacity-20"
        src="src/assets/logo-letters.png"
        alt=""
      />
    </div>
  );
}

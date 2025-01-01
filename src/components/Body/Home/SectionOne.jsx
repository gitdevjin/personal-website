export default function SectionOne() {
  return (
    <div className="relative flex flex-row w-full justify-center">
      <div className="flex flex-col gap-10 justify-start pl-10 sm:pl-48 border-l-1 border-b-lime-100 border-l-lime-100 text-[#f7f7f7] text-3xl sm:text-5xl w-full">
        <div className="text-orange-400 ">Hello! I&apos;m</div>
        <div className="flex flex-col sm:text-8xl">
          <span>Hyunjin</span>
          <span>Shin</span>
        </div>
        <div className="text-green-400 text-3xl sm:text-5xl">Web Developer</div>
      </div>
      <img
        className="absolute left-[33%] animate-spin w-auto p-0 m-0 sm:max-w-[400px] hidden lg:block"
        src="src/assets/logo-letters.png"
        alt=""
      />
      <div className="w-full">
        <img
          className="sm:pl-40 sm:max-w-[400px] w-auto opacity-30"
          src="src/assets/cat.jpg"
          alt="Me"
        />
      </div>
    </div>
  );
}

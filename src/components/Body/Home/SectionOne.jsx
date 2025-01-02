export default function SectionOne() {
  return (
    <div className="m-10 p-5 relative flex flex-row w-full justify-evenly h-3/4">
      <div
        className="flex flex-col gap-10 justify-center pl-5 pt-5
        font-bold text-[#f7f7f7] text-3xl sm:text-5xl"
      >
        <div className="text-orange-400 ">Hello! I&apos;m</div>
        <div className="flex flex-col sm:text-8xl">
          <span>Hyunjin</span>
          <span>Shin</span>
        </div>
        <div className="text-green-400 text-3xl sm:text-5xl">Web Developer</div>
      </div>
      <img
        className="absolute animate-spin w-[400px] -left-20 top-80 p-0 m-0 md:hidden lg:block opacity-20"
        src="src/assets/logo-letters.png"
        alt=""
      />
      <div className="flex items-center justify-center">
        <img
          className="w-[300px] h-[300px] border rounded-full"
          src="src/assets/cat.jpg"
          alt="Me"
        />
      </div>
    </div>
  );
}

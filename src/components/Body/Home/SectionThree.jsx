import BlogCard from "../Blog/BlogCard";

export default function SectionThree() {
  return (
    <div id="SectionThree">
      <div>
        <div className="relative sm:text-4xl">
          <span
            className="text-orange-400 hover:before:scale-x-100 before:content-['']
                      before:absolute before:bottom-0 before:left-0 before:w-full
                      before:h-[2px] before:bg-current before:scale-x-0
                      before:origin-left before:transition-transform before:duration-500
                      before:bg-white"
          >
            Blog Preview
          </span>
        </div>
        <div id="CardContainer" className="flex flex-col sm:flex-row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

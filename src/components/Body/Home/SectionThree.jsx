import BlogCard from "../Blog/BlogCard";

export default function SectionThree() {
  return (
    <div id="SectionThree" className="w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="relative sm:text-4xl sm:mb-20">
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
        <div
          id="CardContainer"
          className="flex w-full flex-col justify-center items-center sm:flex-row gap-4 sm:pl-5 sm:pr-5"
        >
          <a
            href="https://whispering-brass-91c.notion.site/18567585b4f6817f9fdacd63915dbde5?v=18567585b4f6816dae47000cd998c267"
            className="w-full"
          >
            <BlogCard
              imageUrl="src/assets/js.png"
              hoverText="Javascript Blog Writings"
              explanation="All the good knowledges for Javascript projects"
            />
          </a>
          <a
            href="https://whispering-brass-91c.notion.site/18967585b4f680d3bc55e9352c4cb0cd?v=18967585b4f6818a87c5000cd9f55dfd"
            className="w-full"
          >
            <BlogCard
              imageUrl="src/assets/git.png"
              hoverText="Git Blog Writings"
              explanation="All the useful knowledges for Git"
            />
          </a>
          <a
            href="https://whispering-brass-91c.notion.site/18967585b4f680fa8a61ffee2258d9a5?v=18967585b4f68142ad53000c29418d17"
            className="w-full"
          >
            <BlogCard
              imageUrl="src/assets/python.png"
              hoverText="Python Blog Writings"
              explanation="All the useful knowledges for Python projects"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

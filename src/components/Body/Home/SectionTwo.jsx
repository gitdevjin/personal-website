export default function SectionTwo() {
  return (
    <div id="sectionTwo" className="w-full h-full pt-28">
      <div className="flex flex-col justify-center items-center">
        <div className="relative sm:text-4xl">
          <span
            className="text-orange-400 hover:before:scale-x-100 before:content-['']
                      before:absolute before:bottom-0 before:left-0 before:w-full
                      before:h-[2px] before:bg-current before:scale-x-0
                      before:origin-left before:transition-transform before:duration-500
                      before:bg-white"
          >
            Profile Preview
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full h-full justify-around pl-5 pr-5 sm:pt-10 sm:pl-20 sm:pr-20">
          <div className="w-full">
            <div className="flex justify-center items-center sm:text-5xl pb-2">
              Education
            </div>
            <div className="text-lg sm:text-3xl">
              <div className="flex flex-col p-3">
                <span className="text-orange-300">
                  Computer Programming and analysis
                </span>
                <span className="text-xl text-gray-400">Advanced Deploma</span>
                <span className="text-xl text-gray-400">2022 - 2024</span>
                <span className="text-xl text-gray-400">Seneca College</span>
                <span className="text-2xl text-red-300">Toronto, Canada</span>
              </div>
              <div className="sm:flex sm:flex-col sm:p-3 hidden">
                <span className="text-orange-300">English Literature</span>
                <span className="text-xl text-gray-400">
                  Completed Coursework for a Master&apos;s degree
                </span>
                <span className="text-xl text-gray-400">2018 - 2019</span>
                <span className="text-xl text-gray-400">
                  Chungbuk National University
                </span>
                <span className="text-2xl text-red-300">
                  Cheong-ju, South Korea
                </span>
              </div>
              <div className="flex flex-col p-3">
                <span className="text-orange-300">
                  English Literature and Linguisitcs
                </span>
                <span className="text-xl text-gray-400">Bachelor Degree</span>
                <span className="text-xl text-gray-400">2011 - 2018</span>
                <span className="text-xl text-gray-400">
                  Chungbuk National University
                </span>
                <span className="text-2xl text-red-300">
                  Cheong-ju, South Korea
                </span>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="w-full">
            <div className="flex justify-center items-center sm:text-5xl pb-2">
              Tech Stacks
            </div>
            <div className="text-lg sm:text-3xl">
              <div className="flex flex-col p-3">
                <span className="text-orange-300">Frontend</span>
                <span className="text-xl text-gray-400">
                  HTML5, CSS3, JavaScript(ES6)
                </span>

                <span className="text-xl text-gray-400">React.js</span>
              </div>
              <div className="flex flex-col p-3">
                <span className="text-orange-300">Backend</span>
                <span className="text-xl text-gray-400">
                  Node.js,Express.js, JDBC/Servlet/JSP(Java)
                </span>
                <span className="text-xl text-gray-400">
                  Spring Boot(Java), ASP.NET
                </span>
                <span className="text-xl text-gray-400">Oracle, MongoDB</span>
              </div>
              <div className=" sm:flex sm:flex-col sm:p-3 hidden">
                <span className="text-orange-300">Application Development</span>
                <span className="text-xl text-gray-400">
                  JavaFX, React Native
                </span>
              </div>

              <div className="flex flex-col p-3">
                <span className="text-orange-300">Cloud Computing</span>
                <span className="text-xl text-gray-400">
                  Aamazon Web Services &lt; Cognito, EC2, ECS, ECR, S3, DynamoDB
                  &gt;
                </span>
                <span className="text-xl text-gray-400">Microsoft Azure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";

const Dot = ({ num, currentPage }) => {
  return (
    <div
      className={`w-2.5 h-2.5 border border-gray-800 rounded-full transition-all duration-500 ${
        currentPage === num ? "bg-[#f7f7f7]" : "bg-transparent"
      }`}
    ></div>
  );
};

Dot.propTypes = {
  num: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default function DotScroll({ currentPage }) {
  return (
    <div className="fixed top-1/2 right-[50px] transform -translate-y-1/2">
      <div className="flex flex-col justify-between items-center w-5 h-24">
        <Dot num={1} currentPage={currentPage}></Dot>
        <Dot num={2} currentPage={currentPage}></Dot>
        <Dot num={3} currentPage={currentPage}></Dot>
        <Dot num={4} currentPage={currentPage}></Dot>
      </div>
    </div>
  );
}

DotScroll.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

import PropTypes from "prop-types";

BlogCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
};

export default function BlogCard({ imageUrl, hoverText, explanation }) {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto overflow-hidden rounded-2xl shadow-lg bg-gray-800 bg-opacity-50">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt="Card Image"
          className="w-full h-40 sm:h-52 md:h-80 object-cover opacity-75"
        />
      </div>

      {/* Explanation Section */}
      <div className="p-4 text-gray-200 text-center text-sm sm:text-base">
        {explanation}
      </div>

      {/* Hover Overlay (Covers Whole Card) */}
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-0 opacity-0 
        flex flex-col items-center justify-center text-white text-xl font-bold 
        transition-all duration-300 hover:bg-opacity-75 hover:opacity-100"
      >
        <p>{hoverText}</p>
      </div>
    </div>
  );
}

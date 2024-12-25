import ReactFullpage from "@fullpage/react-fullpage";

export default function HomePage() {
  return (
    <ReactFullpage
      navigation
      scrollingSpeed={1000} // Scroll speed in milliseconds
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {/* Section 1 */}
          <div className="section">
            <h1 className="text-white">Section 1</h1>
            <p>Content for Section 1</p>
            <img className="animate-spin" src="src/assets/logo-letters.png" alt="" />
          </div>
          {/* Section 2 */}
          <div className="section" style={{ backgroundColor: "#333" }}>
            <h1 className="text-white">Section 2</h1>
            <p>Content for Section 2</p>
          </div>
          {/* Section 3 */}
          <div className="section" style={{ backgroundColor: "#666" }}>
            <h1 className="text-white">Section 3</h1>
            <p>Content for Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

// indigo color

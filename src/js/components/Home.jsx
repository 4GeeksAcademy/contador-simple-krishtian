import React from "react";
import SecondsCounter from "./SecondsCounster..jsx";

function Home({ seconds }) {
  return (
    <div className="page">
      <SecondsCounter seconds={seconds} />
    </div>
  );
}

export default Home;

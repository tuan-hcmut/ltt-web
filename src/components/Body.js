import React from "react";
import SlideShow from "./slide";
import Content from "./contentBody/content";

function Body() {
  return (
    <React.Fragment>
      <SlideShow />
      <Content />
    </React.Fragment>
  );
}

export default Body;

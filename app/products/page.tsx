import React from "react";
import Category from "./components/category";
import Share from "./components/Share";
import Intro from "./components/Intro";
import PhotoShow from "./components/PhotoShow";

export default function Page() {
  return (
    <div>
      <Category />
      <PhotoShow />

      <Intro />
      <Share />
    </div>
  );
}

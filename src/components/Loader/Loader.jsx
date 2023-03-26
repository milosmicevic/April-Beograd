import React from "react";
import "./Loader.scss";

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-wrap ${!isLoading ? "hidden" : ""}`}>
      <div className="loader-item">
        <div className="cd-loader-layer closing" data-frame="25">
          <div className="loader-layer"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

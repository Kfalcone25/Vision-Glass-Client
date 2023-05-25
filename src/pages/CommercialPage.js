import React from "react";

const CommercialPage = () => {
  return (
    <div className="commercial-page">
      <h1 id="page-h1">Commercial</h1>
      <div className="block-container">
        <div className="content-container">
          <img id="top-img" src="/storefrount.jpg" alt="commercial work" />
          <div className="text-content">
          <h2>Build it.</h2>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          </div>
        </div>

        <div className="content-container">
          <div className="text-content">
            <h2>Dream it.</h2>
            <p>
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
          </div>
          <img id="bottom-img" src="/storefrount2.jpg" alt="commercial work" />
        </div>
      </div>
    </div>
  );
};

export default CommercialPage;

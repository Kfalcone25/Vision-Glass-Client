import React from "react";

const ResidentialPage = () => {
  return (
    <div className="residential-page">
      <h1 id="page-h1">Residential</h1>

      <div className="residential-container">
        <div className="block" id="shower-block">
          <img src="/shower2.jpg" alt="block 1" />
          <h2>Showers</h2>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
        </div>

        <div className="block" id="mirror-block">
          <img src="/mirrios.jpg" alt="block 2" />
          <h2>Mirrors</h2>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
        </div>

        <div className="block" id="window-block">
          <img src="/window.jpg" alt="block 3" />
          <h2>Windows</h2>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentialPage;

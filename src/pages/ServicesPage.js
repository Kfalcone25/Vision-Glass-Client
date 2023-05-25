import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <div className="service-header">
        {/* set backgound img in css */}
        <h1>Our Services</h1>
      </div>

      <div>
        <h2>What we offer</h2>
        <div>
          <div>
            <h3>Service 1</h3>
            <p>
              What should we know about this service? Describe important details
              like price, value, length of service, and why it’s unique. Or use
              these sections to showcase key values of your services.
            </p>
          </div>

          <div>
            <h3>Service 2</h3>
            <p>
              What should we know about this service? Describe important details
              like price, value, length of service, and why it’s unique. Or use
              these sections to showcase key values of your services.
            </p>
          </div>

          <div>
            <h3>Service 3</h3>
            <p>
              What should we know about this service? Describe important details
              like price, value, length of service, and why it’s unique. Or use
              these sections to showcase key values of your services.
            </p>
          </div>

          <div>
            <h3>Service 4</h3>
            <p>
              What should we know about this service? Describe important details
              like price, value, length of service, and why it’s unique. Or use
              these sections to showcase key values of your services.
            </p>
          </div>
        </div>
      </div>

      <div className="service-gallery">
        <img src="/" alt="block 1" />
        <img src="/" alt="block 1" />
      </div>

      <div>
        <h2>The Results</h2>
        <div>
          <quote>
            “Whatever it is, the way you tell your story online can make all the
            difference.”
          </quote>

          <p>__ Quote Name</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

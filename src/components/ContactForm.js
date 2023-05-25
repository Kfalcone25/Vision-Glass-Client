import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h1>Contact Form</h1>

      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">What kind of job?</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Give us a brief description !</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="exampleFormControlFile1">input any images</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

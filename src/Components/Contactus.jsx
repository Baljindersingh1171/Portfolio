import { useState } from "react";
import { toast } from "react-toastify";
import "./Contactus.css";
import emailjs from "emailjs-com";
import Map from "./Map";
function Contactus() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(value);

    setData({ ...data, [name]: value });
    console.log(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(Object.keys(data));
    const emptyKeys = Object.keys(data).filter((key) => data[key] === "");
    // setData({});
    console.log(typeof emptyKeys);
    console.log(emptyKeys);

    // const jsonString = JSON.stringify(data);
    // const hasEmptyValues = jsonString.includes("");
    // console.log(hasEmptyValues);

    if (emptyKeys.length === 0) {
      toast.success("message is send successfully");
    } else {
      toast.error("Fill the form");
    }
    const templateParms = {
      from_name: data.firstname,
      message: data.message,
      to_email: "itsbaljindersingh17@gmail.com",
    };
    if (emptyKeys.length === 0) {
      emailjs
        .send("252550", "17102001", templateParms, "WKm8cURn02NeYFTM1")
        .then(
          (response) => {
            console.log(
              "email sent succesfully!",
              response.status,
              response.text
            );
            //
          },
          (error) => {
            console.log("failed to send email", error);
          }
        );
    }
  }
  return (
    <div className="contactus">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Contact US</h2>
        <div className="names">
          <input
            type="text"
            name="firstname"
            // value={data.firstname}
            onChange={handleChange}
            placeholder="First name"
          />

          <input
            type="text"
            placeholder="Last name"
            name="lastname"
            // value={data.lastname}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="contact">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            // value={data.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="phone"
            // value={data.phone}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <textarea
          rows="7"
          cols="49"
          name="message"
          // value={data.message}
          onChange={handleChange}
        ></textarea>
        <div>
          <br></br>
          <button id="btnsend">Send Message</button>
        </div>
      </form>
      <div className="mydetail">
        <Map />
        <p>📩EmailId:-itsbaljindersingh17@gmail.com</p>
        <p>📱Phone:-7814214323</p>
        <p>
          <i class="fa-solid fa-map-pin"></i>Address:-Village Dialpura(MANSA)
        </p>
      </div>
    </div>
  );
}

export default Contactus;

import React from "react";
import Footer from "../../Components/Footer";
import Form from "../Home/Components/Form";

import { FiAtSign } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import "../Home/Home.css";
import "./Contact.css";
import Button from "../Home/Components/Button";

const Contact_Image =
  "https://firebasestorage.googleapis.com/v0/b/evna-1c728.appspot.com/o/img%2Fcommunity.png?alt=media&token=3fc93805-da1d-4a16-8a1d-34428bc4e5ad";

export default function Contact() {
  return (
    <>
      <div id="egg">
        <div className="container contact_container" id="star-five ">
          <h2 className="text-center custom_heading">Lets Talk !</h2>
          <div className="border_animation"></div>
          <p className="text-center">
            Would you like to sponsor an event ? Get in touch with us!
          </p>

          <div className="row">
            <div className="col-lg-6">
              <img src={Contact_Image} alt="" />
            </div>

            <div className="col-lg-6 col-md-12">
              <Form placeholder="Name" />
              <Form placeholder="Email" />
              <Form placeholder="Phone" />
              <Form placeholder="Subject" />

              <textarea
                className="col-12"
                placeholder="Your Message"
              ></textarea>

              <Button
                text="SEND MESSAGE"
                buttonSize="50px"
                column="4"
                btn_customStyle="send_message_btn"
              />
            </div>
          </div>

          <div className="row d-flex justify-content-center container custom__card">
            <div className="col-lg-5 col-sm-12 card__container">
              <Link href="#">
                <FiAtSign className="custom_icon" />
              </Link>

              <div className="_heading">
                <h2>Email</h2>
                <p>CDC@mmmut.ac.com</p>
              </div>
            </div>

            <div className="col-lg-5 col-sm-12 card__container">
              <Link href="#">
                <MdLocationOn className="custom_icon" />
              </Link>

              <div className="_heading">
                <h2>Address</h2>
                <p>MMMUT, Gorakhpur</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

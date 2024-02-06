import React from "react";
import HeroSection from "../../Components/HeroSection";
import TitleCenter from "./Components/TitleCenter";
import Card from "../Home/Components/Card";
import Card_Details from "./data/Card_Details";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data/Data";
import {
  TitleCenter1,
  TitleCenter2,
  TitleCenter3,
} from "./data/TitleCenterData";
import Form from "../Home/Components/Form";

import Button from "./Components/Button";
import FaQ from "./Components/FaQ";
import Footer from "../../Components/Footer";

import "../Home/Home.css";
const ideaImage =
  "https://firebasestorage.googleapis.com/v0/b/evna-1c728.appspot.com/o/img%2Fcommunity.png?alt=media&token=3fc93805-da1d-4a16-8a1d-34428bc4e5ad";
export default function Home() {
  return (
    <>
      {" "}
      <div className="main">
        <div className="container _shapeAnimation">
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjFour} />
        </div>
        {/* Technologies section */}{" "}
        <div className="tech_bg_color">
          {" "}
          <div className="container">
            <div className="text-center">
              <TitleCenter {...TitleCenter1} />
            </div>
            <div className="row d-flex justify-content-center">
              {Card_Details.map((item, index) => (
                <div key={index} className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                  <Card img={item.img} tech_Name={item.tech_Name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Technologies section ended */} {/* recent_project section */}{" "}
        {/* <div className="text-center recent_project">
          {" "}
          <TitleCenter {...TitleCenter2} />
          <p
            style={{
              color: "grey",
            }}
          >
            No Projects Available Right Now
          </p>
        </div> */}
        {/* recent_project section ended */}{" "}
        <div className="form_bg_color idea_container">
          {" "}
          <div className="container ">
            <div className="row main_content">
              <div className="col-lg-7 col-md-12 mx-auto">
                <div>
                  <img className="idea_img" src={ideaImage} alt="Idea-Image" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 form_container">
                <div className="form_content">
                  <Form placeholder="Name*" />
                  <Form placeholder="Email*" />
                  <Form placeholder="Branch*" />
                  <Form placeholder="Year*" />
                  <Form placeholder="Idea*" />
                  <Button text="SUBMIT IDEA" column="12" buttonSize="50px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ section ----------->>>> */}{" "}
        <div className="tech_bg_color">
          {" "}
          <div className="text-center">
            <TitleCenter {...TitleCenter3} />
          </div>
          <FaQ />
        </div>
        {/* FAQ section ----------->>>> end */}{" "}
        {/* Footer ----------------->>>>> */} <Footer />{" "}
      </div>
    </>
  );
}

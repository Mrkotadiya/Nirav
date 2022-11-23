import React from "react";
import Offer from "./Offers";
import logo1 from "../images/one.jpeg";
import logo2 from "../images/two.jpeg";
import logo3 from "../images/three.jpeg";
import logo4 from "../images/four.jpeg";
import logo5 from "../images/five.jpeg";
import logo6 from "../images/six.jpeg";
import Header from "./Header";
import "./employe.css";

const data = [
  {
    img: logo1,
    name: " Barnado Dogalaviz",
    employeId: "FT-00007",
    email: "barnadodogalaviz@gmial.com",
    mobileno: "9812345670",
    joinDate: "1-jan-2013",
    role: "Web Devlopeor",
  },
  {
    img: logo2,
    name: "Jefary Warden",
    employeId: "FT-00006",
    email: "barnadodogalaviz@gmial.com",
    mobileno: "9812345670",
    joinDate: "1-jan-201",
    role: "Web Devlopeor",
  },
  {
    img: logo3,
    name: "John Doe",
    employeId: "FT-00001",
    email: "barnadodogalaviz@gmial.com",
    mobileno: "9812345670",
    joinDate: "1-jan-2013",
    role: "Web Devlopeor",
  },
  {
    img: logo4,
    name: "John Smith",
    employeId: "FT-00005",
    email: "barnadodogalaviz@gmial.com",
    mobileno: "9812345670",
    joinDate: "1-Apr-2014",
    role: "Web Devlopeor",
  },
  {
    img: logo5,
    name: "Mike Litoren",
    employeId: "FT-00004",
    email: "barnadodogalaviz@gmial.com",
    mobileno: "9812345670",
    joinDate: "1-Apr-2014",
    role: "Web Devlopeor",
  },
  {
    img: logo6,
    name: "Riched Miler",
    employeId: "FT-00003",
    email: "barnadodogalaviz@gmial.com",
    mobileno: "9812345670",
    joinDate: "1-Mar-2014",
    role: "Web Devlopeor",
  },
];

function Employee() {
    return (
     <table>
        <Header />
        <tbody>
          {data.map((i) => {
            return (
              <Offer key={data.i}
                img={i.img}
                name={i.name}
                employeId={i.employeId}
                email={i.email}
                mobileno={i.mobileno}
                joinDate={i.joinDate}
                role={i.role}
              />
            );
          })}
        </tbody>
      </table>
    );
  }

export default Employee;

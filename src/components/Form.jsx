import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [submit, setSubmit] = useState({
    fname: "",
    lname: "",
    userName: "",
    email: "",
    employeId: "",
    joinDate: "",
    contactNo: "",
    company: "",
    department: "",
    designation: "",
  });

  function Datasubmit(){
  }
  function HendleChange (e) {
    
  }
  

  const [record, setRecord] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newRecord = { ...submit, id: new Date().getTime().toString() };
    console.log(record);
    setRecord([...record, newRecord]);
  }
  return (
    <div>
      <form action="" >
        <div className="leftColumn">
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="fname"
            value={submit.fname}
            onChange={HendleChange}
          />
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="userName"
            value={submit.userName}
            onChange={HendleChange}
          />
          <label htmlFor="">EmployeId</label>
          <input
            type="text"
            name="employeId"
            value={submit.employeId}
            onChange={HendleChange}
          />
          <label htmlFor="">contactNo</label>
          <input
            type="number"
            name="contactNo"
            value={submit.contactNo}
            onChange={HendleChange}
          />
          <label htmlFor="">DepartMent</label>
          <input
            type="text"
            name="department"
            id=""
            value={submit.department}
            onChange={HendleChange}
          />
        </div>
        <div className="rightColumn">
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="lname"
            value={submit.lname}
            onChange={HendleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={submit.email}
            onChange={HendleChange}
          />
          <label htmlFor="">JoinDate</label>
          <input
            type="date"
            name="joinDate"
            value={submit.joinDate}
            onChange={HendleChange}
          />
          <label htmlFor="">Company</label>
          <input
            type="text"
            name="company"
            value={submit.company}
            onChange={HendleChange}
          />
          <label htmlFor="">Designation</label>
          <input
            type="text"
            name="designation"
            id=""
            value={submit.designation}
            onChange={HendleChange}
          />
        </div>
      </form>
      <div>
        <button id="button" type="submit" onClick={Datasubmit}>
          submit
        </button>
      </div>
    </div>
  );


}

export default Form;

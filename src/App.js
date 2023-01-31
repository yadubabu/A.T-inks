import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Main from "./components/main/Main";
import "./app.scss";
import Info from "./components/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import FandQ from "./components/FandQ";

const App = () => {
  const [contacts, setContacts] = useState({
    email: ["abcd@gmail.com", "pqrs@gmail.com"],
    phone: [12345678, 987654321],
  });
  const [address, setAddress] = useState({
    dno: "1-20/1",
    street: "Maadhapur",
    landmark: "gachiboli",
    city: "hyderabad",
    state: "Telangana",
    pin: "530001",
  });
  const editAddress = (data) => {
    // console.log(data);
    setAddress({ data });
  };
  const [statement, setStatement] = useState({
    posts: [
      "Your personal statement is any essay that you must write for your main application, such as the Common App Essay, University of California.",
      "This type of essay focuses on your unique experiences, ideas, or beliefs that may not be discussed throughout the rest of your application.",
    ],
  });
  const addContact = (data) => {
    console.log(data.email);
    contacts.email.push(data.email);
    contacts.phone.push(data.phone);
  };
  return (
    <div>
      <Header />
      <div className="main">
        <SideBar className="side" />
        <Main
          className="mainBody"
          email={contacts.email}
          phone={contacts.phone}
          editAddress={editAddress}
          address={address}
          addContact={addContact}
        />
      </div>
    </div>
  );
};

export default App;

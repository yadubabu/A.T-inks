import React, { useState } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import Mainbody from "./components/Mainbody";
import Sidebar from "./components/sidebar/SideBar";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      title: "Sales Team",
      email: ["test1@gmail.com", "test2@gmail.com"],
      phone: [354645769, 464865468],
    },
  ]);
  const addContact = (data) => {
    console.log(data);
    setContacts([...contacts, data]);
  };
  const editStoreContact = (data) => {
    setContacts(data);
  };
  const [address, setAddress] = useState({
    dno: "23-34/1",
    street: "Maadhapur",
    landmark: "golden City",
    city: "hyderabad",
    state: "Telangana",
    pin: 67867687,
  });
  const [posts, setPosts] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et illo",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et illo",
  ]);
  console.log(address);
  const updateAddress = (data) => {
    setAddress(data.newAddress);
  };
  const addPost = (data) => {
    setPosts([...posts, data]);
  };
  console.log(contacts.length);
  return (
    <div className="container">
      <div className="Header">
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="mainbody">
        <Mainbody
          contacts={contacts}
          address={address}
          updateAddress={updateAddress}
          editStoreContact={editStoreContact}
          addContact={addContact}
          posts={posts}
          addPost={addPost}
        />
      </div>
    </div>
  );
};

export default App;

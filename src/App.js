import React from "react";
import "bulma/css/bulma.css";

import Navbar from "./navbar/Navbar.js";
import Signup from "./signup/Signup.js";
import Message from "./message/Message.js";


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Signup />
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </React.Fragment>
  );
};

export default App;
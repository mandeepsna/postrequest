import axios from "axios";
import "./App.css";
import Button from "./components/Button";
import UserForm from "./components/UserForm";
import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  let [showform, setForm] = useState(false);
  let [user, setUser] = useState([]);
  const addUser = () => {
    setForm(true);
  };

  const receiveUser = (user) => {
    //  fetch('https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users.json',{
    //   method:'POST',
    //   body:JSON.stringify(user),
    //  }).then((response)=>
    //  {
    //     console.log(response);
    //  })
    axios.post(
      "https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users.json",
      user
    );
  };

  const getUsers = () => {
    const userarray = [];
    fetch(
      "https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let key in data) {
          userarray.push({ ...data[key], id: key });
        }
      });
    setUser(userarray);
  };

  return (
    <div>
      <div className="d-flex justify-content-end ">
        <div>
          {" "}
          <Button
            classname="btn btn-primary p-1 rounded-2"
            BtnClicked={addUser}
          >
            Add User
          </Button>
        </div>
        <div>
          {" "}
          <Button
            classname="btn btn-secondary p-1 rounded-2"
            BtnClicked={getUsers}
          >
            Get Users
          </Button> 
        </div>
      </div>
      <UserDetails userarray={user}></UserDetails>
      {showform && <UserForm receiveuser={receiveUser}></UserForm>}
    </div>
  );
}

export default App;

import React from "react";
import "./UserForm.css";
import Button from "./Button";
import { useRef } from "react";
const UserForm = (props) => {
  const fname= useRef();
  const lname= useRef();
  const email= useRef();
  const password= useRef();
  const cpassword= useRef();
  const country= useRef();
  const city= useRef();
  const date=useRef();
  const gender=useRef();

  const formsubmitted=(event)=>
  {
      // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
      const user={ 
      firstName: fname.current.value,
      lastName:lname.current.value,
      Email:email.current.value,
      Password:password.current.value,
      Cpassword:cpassword.current.value,
      Country:country.current.value,
      City:city.current.value,
      Date:date.current.value,
      Gender:gender.current.value,
      }
    props.receiveuser(user);
    fname.current.value='';
    lname.current.value='';
    email.current.value='';
    password.current.value='';
    cpassword.current.value='';
    country.current.value='';
    city.current.value='';
    date.current.value='';
    gender.current.value='';
  }
    return (
    <>
      <h3>Create new user</h3>
      <div className="user-form">
        <form onSubmit={formsubmitted}>
          <div>
            <input type="text" placeholder="First name" ref={fname} />
            <input type="text" placeholder="Last name" ref={lname} />
          </div>
          <div>
            <input type="email" placeholder="Email"  ref={email}/>
          </div>
          <div>
            <input type="password" placeholder="Password" ref={password} />
            <input type="password" placeholder="Confirm Password" ref={cpassword}  />
          </div>
          <div>
            <select name="country" ref={country}>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <select name="city" ref={city}>
              <option value="Delhi">Delhi</option>
              <option value="Berlin">Berlin</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div>
          <div>
            <input type="date" placeholder="Date of Birth" ref={date} />
            <select name="gender" ref={gender} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
         <div className="d-grid gap-2 mt-5"> <Button classname="btn btn-primary" >Create User</Button></div>
          {/* <button className='add-user-button'>Create User</button> */}
        </form>
      </div>
    </>
  );
};
export default UserForm;

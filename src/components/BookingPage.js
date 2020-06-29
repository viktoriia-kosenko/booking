import React, { useState } from "react";
import { validateForm } from "../helpers";
import { connect } from "react-redux";

// add proper validation for each field
// enable user to choose previous date,

const Booking = ({ addBooking }) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    email: "",
    persons: "",
  };

  ////change useState for formState on useReducer ?
  const [formState, setFormState] = useState(initialFormState);
  const [errMsg, setErrMsg] = useState(null);

  const onChange = (e) => {
    errMsg && setErrMsg(null);
    const inputValue = { [e.target.id]: e.target.value };
    setFormState({ ...formState, ...inputValue });
  };

  // add proper validation for each field
  // bookingN should be unique value, could use uuid
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formState)) {
      setErrMsg("All fields are required");
    } else {
      addBooking(formState);
      setFormState(initialFormState);
    }
  };

  return (
    <div className="booking-page">
      <p>Please fill in this form</p>
      {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      <form className="booking-page-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          onChange={onChange}
          value={formState.firstName}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          onChange={onChange}
          value={formState.lastName}
        />

        <label htmlFor="date">Dining Date</label>
        <input
          type="date"
          placeholder="Dining Date"
          id="date"
          onChange={onChange}
          value={formState.date}
        />

        <label htmlFor="persons">Number of Covers</label>
        <input
          type="number"
          id="persons"
          min="1"
          max="12"
          placeholder="1-12"
          onChange={onChange}
          value={formState.persons}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{11}"
          placeholder="11 digits"
          onChange={onChange}
          value={formState.phone}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="xxxxx@xxx.xx"
          onChange={onChange}
          value={formState.email}
        />
        <div></div>
        <button type="submit">Save booking</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBooking: (booking) => {
      dispatch({ type: "ADD_BOOKING", booking });
    },
  };
};

export default connect("", mapDispatchToProps)(Booking);

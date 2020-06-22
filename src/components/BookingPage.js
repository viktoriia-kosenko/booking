import React, { useState } from "react";

// add proper validation for each field
// enable user to choose previous date,

const Booking = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    email: "",
    persons: "",
  };

  ////change on useReducer ?
  const [formState, setFormState] = useState(initialFormState);
  const [errMsg, setErrMsg] = useState(null);

  const onChange = (e) => {
    if (errMsg) {
      setErrMsg(null);
    }
    const inputValue = { [e.target.id]: e.target.value };
    setFormState({ ...formState, ...inputValue });
  };

  //refactor
  // bookingN should be unique value, could use uuid
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, date, phone, email, persons } = formState;
    if (!firstName || !lastName || !date || !phone || !email || !persons) {
      setErrMsg("All fields are required");
    } else {
      if (localStorage.getItem("bookings") === null) {
        localStorage.setItem(
          "bookings",
          JSON.stringify([{ ...formState, bookingN: 1 }])
        );
      } else {
        const existingEntries = JSON.parse(localStorage.getItem("bookings"));
        const bookingN = existingEntries.length + 1;
        localStorage.setItem(
          "bookings",
          JSON.stringify([...existingEntries, { ...formState, bookingN }])
        );
      }
      setFormState(initialFormState);
    }
  };

  return (
    <div>
      <h1>This is Booking page</h1>
      <p>Please fill in this form</p>
      {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            onChange={onChange}
            value={formState.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={onChange}
            value={formState.lastName}
          />
        </div>
        <div>
          <label htmlFor="date">Dining Date</label>
          <input
            type="date"
            placeholder="Dining Date"
            id="date"
            onChange={onChange}
            value={formState.date}
          />
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{11}"
            placeholder="11 digits"
            onChange={onChange}
            value={formState.phone}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="xxxxx@xxx.xx"
            onChange={onChange}
            value={formState.email}
          />
        </div>
        <button type="submit">Save booking</button>
      </form>
    </div>
  );
};

export default Booking;

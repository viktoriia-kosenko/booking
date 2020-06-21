import React, { useState } from "react";

// add validation for each field
// enable user to choose previous date,
const Booking = () => {
  const [errMsg, setErrMsg] = useState(null);
  const [formState, setFormState] = useState({
    firstName: null,
    lastName: null,
    date: null,
    phone: null,
    email: null,
    persons: null,
  });

  const onChange = (e) => {
    if (errMsg) {
      setErrMsg(null);
    }
    const inputValue = { [e.target.id]: e.target.value };
    setFormState({ ...formState, ...inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, date, phone, email, persons } = formState;
    if (!firstName || !lastName || !date || !phone || !email || !persons) {
      setErrMsg("All fields are required");
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
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="date">Dining Date</label>
          <input
            type="date"
            placeholder="Dining Date"
            id="date"
            onChange={onChange}
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
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="xxxxx@xxx.xx"
            onChange={onChange}
          />
        </div>
        <button type="submit">Save booking</button>
      </form>
    </div>
  );
};

export default Booking;

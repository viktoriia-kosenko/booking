import React, { useState } from "react";

// add validation for each field
// enable user to choose previous date,
const Booking = () => {
  return (
    <div>
      <h1>This is Booking page</h1>
      <p>Please fill in this form</p>

      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text" placeholder="First Name" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" placeholder="Last Name" id="lastName" />
        </div>
        <div>
          <label htmlFor="date">Dining Date</label>
          <input type="date" placeholder="Dining Date" id="date" />
        </div>
        <div>
          <label htmlFor="persons">Number of Covers</label>
          <input
            type="number"
            id="persons"
            min="1"
            max="12"
            placeholder="1-12"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{11}"
            placeholder="11 digits"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="xxxxx@xxx.xx" />
        </div>
        <button type="submit">Save booking</button>
      </form>
    </div>
  );
};

export default Booking;

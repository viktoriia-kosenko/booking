import React from "react";
import { connect } from "react-redux";
import { addNewBooking } from "../redux/actionCreators";
import { useFormik } from "formik";
import * as Yup from "yup";

const Booking = ({ addNewBooking }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      phone: "",
      email: "",
      persons: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      date: Yup.date().required("Required"),
      persons: Yup.number()
        .min(1, "Cant be les then 1")
        .max(12, "can't be mor then 12")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      addNewBooking(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="booking-page">
      <p>Please fill in this form</p>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      {formik.touched.date && formik.errors.date ? (
        <div>{formik.errors.date}</div>
      ) : null}
      {formik.touched.persons && formik.errors.persons ? (
        <div>{formik.errors.persons}</div>
      ) : null}
      <form className="booking-page-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          name="firstName"
          placeholder="first name"
          {...formik.getFieldProps("firstName")}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          id="lastName"
          {...formik.getFieldProps("lastName")}
        />

        <label htmlFor="date">Dining Date</label>
        <input
          id="date"
          name="date"
          type="date"
          placeholder="Dining Date"
          {...formik.getFieldProps("date")}
        />

        <label htmlFor="persons">Number of Covers</label>
        <input
          type="number"
          id="persons"
          min="1"
          max="12"
          placeholder="1-12"
          {...formik.getFieldProps("persons")}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{11}"
          placeholder="11 digits"
          {...formik.getFieldProps("phone")}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="xxxxx@xxx.xx"
          {...formik.getFieldProps("email")}
        />
        <div></div>
        <button type="submit">Save booking</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewBooking: (newBooking) => {
      dispatch(addNewBooking(newBooking));
    },
  };
};

export default connect("", mapDispatchToProps)(Booking);

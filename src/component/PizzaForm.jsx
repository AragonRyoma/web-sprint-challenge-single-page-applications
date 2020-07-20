import React, { useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";

//name for order form
//dropdown for pizza size
//topings checklist
//text for special intructions
//and add to order button that submits form and reutnrs a database record

const PizzaForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    id: Date.now(),
    size: "",
    pineapple: false,
    ham: false,
    pepperoni: false,
    Mushroom: false,
    olives: false,
    addRequest: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const [buttonValue, setButtonValue] = useState(true);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required, Must be at least 2 Characters")
      .min(2),
    size: yup.string(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
    pepperoni: yup.boolean(),
    Mushroom: yup.boolean(),
    olives: yup.boolean(),
    addRequest: yup.string(),
  });

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setButtonValue(!valid);
    });
  }, [form]);

  const validateChange = (e) => {
    //how it finds what its looking for
    yup
      .reach(formSchema, e.target.name)
      //what its looking for
      .validate(e.target.value)
      //using the errors
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const submitForm = () => {
    formSchema.validate(form).then(() => {
      axios
        .post("https://reqres.in/api/users", form)
        .then((resp) => {
          console.log("Data", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    setForm({
      name: "",
      id: Date.now(),
      size: "",
      pineapple: false,
      ham: false,
      pepperoni: false,
      Mushroom: false,
      olives: false,
      addRequest: "",
    });
  };

  const handleChange = (e) => {
    e.persist();
    const newFormData = {
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setForm(newFormData);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label className="name">
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Za size:
          <select name="size" value={form.size} onChange={handleChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="Large"> Large</option>
          </select>
        </label>

        <label>
          Pineapple:
          <input
            type="checkbox"
            name="pineapple"
            value={form.pineapple}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Ham:
          <input
            type="checkbox"
            name="ham"
            value={form.ham}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Pepperoni:
          <input
            type="checkbox"
            name="pepperoni"
            value={form.pepperoni}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Mushroom:
          <input
            type="checkbox"
            name="mushroom"
            value={form.mushroom}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Olives:
          <input
            type="checkbox"
            name="olives"
            value={form.olives}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Additional request:
          <textarea
            type="textarea"
            name="addRequest"
            value={form.addRequest}
            onChange={handleChange}
          ></textarea>
        </label>

        <button disabled={buttonValue}>click me!</button>
      </form>
    </div>
  );
};

export default PizzaForm;

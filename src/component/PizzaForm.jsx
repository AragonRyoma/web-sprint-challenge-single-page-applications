import React, { useState } from "react";
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToppings = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label>
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
            onChange={handleToppings}
          ></input>
        </label>
        <label>
          Ham:
          <input
            type="checkbox"
            name="ham"
            value={form.ham}
            onChange={handleToppings}
          ></input>
        </label>
        <label>
          Pepperoni:
          <input
            type="checkbox"
            name="pepperoni"
            value={form.pepperoni}
            onChange={handleToppings}
          ></input>
        </label>
        <label>
          Mushroom:
          <input
            type="checkbox"
            name="mushroom"
            value={form.mushroom}
            onChange={handleToppings}
          ></input>
        </label>
        <label>
          Olives:
          <input
            type="checkbox"
            name="olives"
            value={form.olives}
            onChange={handleToppings}
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
        <button>Place order!</button>
      </form>
    </div>
  );
};

export default PizzaForm;

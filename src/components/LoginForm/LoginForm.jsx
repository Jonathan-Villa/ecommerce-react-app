import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
function LoginForm() {
  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    }).catch((err) => console.log(err));
  };

  return (
    <form
      className="login-form-wrapper"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <TextField
        value={input.firstName}
        required
        name="firstName"
        variant="outlined"
        label="First Name"
        color="primary"
      />
      <TextField
        value={input.lastName}
        required
        name="lastName"
        variant="outlined"
        label="First Name"
        color="primary"
      />
      <TextField
        value={input.email}
        required
        name="email"
        variant="outlined"
        label="First Name"
        color="primary"
      />
      <TextField
        value={input.password}
        required
        name="password"
        variant="outlined"
        label="First Name"
        color="primary"
      />

      <Button color="primary" variant="outlined" type="POST">
        Submit
      </Button>
    </form>
  );
}

export default LoginForm;

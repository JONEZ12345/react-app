const Authenticationsystems = ({
  nam,
  namFunc,
  email,
  emailFunc,
  password,
  passwordFunc,
  Register,
}) => {
  return (
    <div>
      <form onSubmit={Register}>
        <fieldset>
          <legend>Register here:</legend>
          <p>
            Name:{" "}
            <input
              type="text"
              value={nam}
              required
              onChange={(e) => namFunc(e.target.value)}
            />
          </p>
          <p>
            Email:{" "}
            <input
              type="email"
              value={email}
              required
              onChange={(e) => emailFunc(e.target.value)}
            />
          </p>
          <p>
            Password:{" "}
            <input
              type="password"
              autoComplete="current_password"
              value={password}
              required
              onChange={(e) => passwordFunc(e.target.value)}
            />
          </p>
          <p>
            <input
              type="submit"
              required
              style={{ marginLeft: "220px", cursor: "pointer" }}
              value={"Sign Up"}
            />
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Authenticationsystems;

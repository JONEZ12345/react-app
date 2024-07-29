const Loginsystem = ({ names, namesFunc, passwords, passwordsFunc, Login }) => {
  return (
    <div>
      <form onSubmit={Login}>
        <fieldset>
          <legend>Login here:</legend>
          <p>
            Name:{" "}
            <input
              type="text"
              value={names}
              required
              onChange={(e) => namesFunc(e.target.value)}
            />
          </p>
          <p>
            Password:{" "}
            <input
              type="password"
              autoComplete="current_password"
              value={passwords}
              required
              onChange={(e) => passwordsFunc(e.target.value)}
            />
          </p>
          <p>
            <input
              type="submit"
              required
              style={{ marginLeft: "220px", cursor: "pointer" }}
              value={"Login"}
            />
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Loginsystem;

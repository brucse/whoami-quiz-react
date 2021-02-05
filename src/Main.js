import React from "react";

const Main = (props) => {
  return (
    <main className="content">
      <section className="login-form">
        <input id="login" type="text" placeholder="login" />
        <input id="password" type="text" placeholder="password" />
        <button>enter</button>
        <div className="register">
          Don't have an account yet?<a href="#">Register here</a>
        </div>
        <div className="forgot-password">
          I forgot my password<a href="#">Password reset</a>
        </div>
      </section>
    </main>
  );
};

export default Main;

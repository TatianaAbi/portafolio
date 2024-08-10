import React from "react";
import { useState } from "react";
import "../../styles/Form.css";
import { Nav } from "./Nav";
import { CallData } from "../../http";

function Form() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [notificationBox, setNotificationBox] = useState(false);

  const read = (e) => {
    e.preventDefault();
    CallData(email, subject, message);
    setNotificationBox(true);
  };
  const cancel = () => {
    setEmail("");
    setSubject("");
    setMessage("");
    setNotificationBox(false);
  };

  return (
    <>
      <Nav />
      <section className="articles">
        <article className="send-email">
          <form className="send-email_form" onSubmit={read}>
            <h2 className="send-email_title">Contact Me!</h2>
            <section className="send-email_mail send-email-space">
              <p className="send-email_text">email:</p>
              <input
                className="send-email_input"
                id="email"
                type="text"
                name="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </section>
            <section className="send-email_subject send-email-space">
              <p className="send-email_text">subject:</p>
              <input
                className="send-email_input"
                type="text"
                name="subject"
                value={subject}
                required
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </section>
            <section className="send-email_message send-email-space">
              <p className="send-email_text">message:</p>
              <textarea
                name="message"
                className="box_message"
                value={message}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </section>

            <input className="send-email_input_button" type="submit" />
          </form>
        </article>
        <articles
          className={`notification_shallow_box ${!notificationBox && "inactive"}`}
        >
          <div className="notification_box">
            <h3 className="notification_text">Message Send</h3>
            <button className="notification_button" onClick={cancel}>
              go back
            </button>
          </div>
        </articles>
      </section>
    </>
  );
}

export { Form };

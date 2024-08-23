import React from "react";
import { useState } from "react";
import "../../styles/Form.css";
import { Nav } from "./Nav";
import { CallData } from "../../http/index.js"
import { dataType } from "../interfaces";


function Form() {
  const [data,setData]= useState<dataType>({
    email:"",
    subject:"",
    message:""
  })

  const [notificationBox, setNotificationBox] = useState(false);

  const read = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CallData(data.email!, data.subject!, data.message!);
    setNotificationBox(true);
  };
  const cancel = () => {
    setData({
      email:"",
      subject:"",
      message:""
    })
    setNotificationBox(false);
  };

  return (
    <>
      <Nav />
      <div className="articles">
        <section className="send-email">
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
                value={data.email}
                onChange={(e) => {
                  setData({email:e.target.value});
                }}
              />
            </section>
            <section className="send-email_subject send-email-space">
              <p className="send-email_text">subject:</p>
              <input
                className="send-email_input"
                type="text"
                name="subject"
                value={data.subject}
                required
                onChange={(e) => {
                  setData({subject:e.target.value});
                }}
              />
            </section>
            <section className="send-email_message send-email-space">
              <p className="send-email_text">message:</p>
              <textarea
                name="message"
                className="box_message"
                value={data.message}
                required
                onChange={(e) => {
                setData({message:e.target.value});
                }}
              ></textarea>
            </section>

            <input className="send-email_input_button" type="submit" />
          </form>
        </section>
        <section
          className={`notification_shallow_box ${!notificationBox && "inactive"}`}
        >
          <div className="notification_box">
            <h3 className="notification_text">Message Send</h3>
            <button className="notification_button" onClick={cancel}>
              go back
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export { Form };

import React, { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

function Contact() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const form = useRef();

    function formChangeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        console.log("Form Submitted");
        emailjs.sendForm('service_qv8jsgx', 'template_d9anjk2', form.current, 'deTBD0NPCV05v57fn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormData(prevData => {
        return {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
      })
    }

    return (
        <section className={styles["contact-section"]} id="contact">
            <h2 className={styles["contact-header"]}>Contact</h2>
            <form ref={form} onSubmit={formSubmitHandler}>
                <div className={styles["form-header"]}>
                    <label htmlFor="name" className={styles["contact-label"]}>Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={formChangeHandler}
                        required
                    />
                    <label htmlFor="email" className={styles["contact-label"]}>Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={formChangeHandler}
                        required
                    />
                </div>
                <label htmlFor="subject" className={styles["contact-label"]}>Subject</label>
                <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={formChangeHandler}
                    required
                />
                <label htmlFor="message" className={styles["contact-label"]}>Message</label>
                <textarea 
                    id="message" 
                    rows="8"
                    name="message"
                    value={formData.message}
                    onChange={formChangeHandler}
                    required
                />
                <button>Send</button>
            </form>
        </section>
    )
}

export default Contact;
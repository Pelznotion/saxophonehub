import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // 1️⃣ Send message to YOU
      await emailjs.sendForm(
        "service_fj3irca", // ✅ Your service ID
        "template_ltma1rw", // ✅ Correct contact form template ID
        form.current,
        "B9n9Y3vaocQlAYWSB" // ✅ Your public key
      );

      // 2️⃣ Send auto-reply to user
      const formData = new FormData(form.current);
      const userEmail = formData.get("user_email");
      const userName = formData.get("user_name");

      if (userEmail && userEmail.includes("@")) {
        await emailjs.send(
          "service_fj3irca",
          "template_ap9mra4", // ✅ Correct auto-reply template ID
          {
            user_email: userEmail,
            user_name: userName,
          },
          "B9n9Y3vaocQlAYWSB"
        );
      }

      setMessage("");
      toast.success(" Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("");
      toast.error(" Failed to send message. Try again!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact Us{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Today
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        We are a few steps close to you!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          disabled={isSending}
          className="bg-black text-orange-400 px-8 py-2 rounded"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {message && (
          <p className="text-center text-sm text-gray-700 mt-2">{message}</p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;

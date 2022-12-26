import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_7h28bys", "template_3mozyax", form.current, "pSrFeQE6jNanC-PjM").then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          background: "#651fff",
          color: "#fff",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "message successfully sent",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <div class="max-w-full mt-8 lg:mx-6" id="contact">
        <div className="w-full mx-auto text-center font-bold text-4xl pt-32 mb-12">Contact me</div>
        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-xl shadow-2xl lg:max-w-xl shadow-deep-purple-accent-400/50">
          <h1 class="text-lg font-medium text-deep-purple-accent-400 text-center">What do you want to ask me?</h1>

          <form class="mt-6" ref={form} onSubmit={sendEmail}>
            <div class="flex-1">
              <label class="block mb-2 text-sm text-deep-purple-accent-400 ">Full Name</label>
              <input
                required
                name="user_name"
                type="text"
                placeholder="John Doe"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-none focus:ring-1 focus:ring-deep-purple-accent-400 focus:rounded-xl border-b border-deep-purple-accent-400 "
              />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-deep-purple-accent-400 ">Email address</label>
              <input
                required
                name="user_email"
                type="email"
                placeholder="johndoe@example.com"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-none focus:ring-1 focus:ring-deep-purple-accent-400 focus:rounded-xl border-b border-deep-purple-accent-400  "
              />
            </div>

            <div class="w-full mt-6">
              <label class="block mb-2 text-sm text-deep-purple-accent-400 ">Message</label>
              <textarea
                required
                name="message"
                class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-none focus:ring-1 focus:ring-deep-purple-accent-400 focus:rounded-xl border-b border-deep-purple-accent-400 md:h-48  "
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-deep-purple-accent-400 rounded-xl focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              get in touch
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

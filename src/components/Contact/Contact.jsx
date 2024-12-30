import React, { useState } from 'react'
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
   
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const validateForm = () => {
    let isValid = true;
    let formErrors = {};

    // Validate name
    if (!formData.from_name) {
      formErrors.from_name = "Name is required";
      isValid = false;
    }

    // Validate email
    if (!formData.from_email) {
      formErrors.from_email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      formErrors.from_email = "Please enter a valid email";
      isValid = false;
    }

 
    // Validate message
    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      formErrors.message = "Message should be at least 10 characters long";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if validation fails
    }

    // EmailJS credentials (ensure these are correct and the service is set up properly)
    const serviceId = "service_25igr0i"; // Your service ID
    const templateId = "template_og3i49g"; // Your template ID
    const publicKey = "gLbkWJZNFXJ64Os2K"; // Your public key

    // Send the form data to EmailJS
    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");
        setFormData({ from_name: "", from_email: "", from_phone: "", message: "" });
        setErrors({}); // Clear errors after submission
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <>
      <div className='min-h-screen bg-zinc-800 text-white flex'>
        <div className='w-1/2'>
          <h1 className='md:text-[5vw]'>Let's Work <br /> Together</h1>
          <div className='flex flex-col justify-center '>
            <div className='flex items-center gap-2'>
              <SiGmail />
              <p>Mail</p>
            </div>
            <p className='px-6'>nikhilbatiyal3891@gmail.com</p>
          </div>
          <div className='flex flex-col justify-center '>
            <div className='flex items-center gap-2'>
              <CiLocationOn />
              <p>Address</p>
            </div>
            <p className='px-6'>Chandigarh</p>
          </div>
          <div className='flex flex-col justify-center '>
            <div className='flex items-center gap-2'>
              <FaPhoneAlt />
              <p>Phone</p>
            </div>
            <p className='px-6'>+91 7807569493</p>
          </div>
        </div>


       <div className="flex  w-1/2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md  shadow-lg rounded-lg p-6"
      >

        <div className="mb-4">
          {/* <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
            Name
          </label> */}
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Name"
            required
          />
          {errors.from_name && <p className="text-red-500 text-xs">{errors.from_name}</p>}
        </div>

        <div className="mb-4">
          {/* <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
            Email
          </label> */}
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            required
          />
          {errors.from_email && <p className="text-red-500 text-xs">{errors.from_email}</p>}
        </div>

        {/* <div className="mb-4">
          <label htmlFor="from_phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="from_phone"
            name="from_phone"
            value={formData.from_phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Phone Number"
            required
          />
          {errors.from_phone && <p className="text-red-500 text-xs">{errors.from_phone}</p>}
        </div> */}

        <div className="mb-4">
          {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label> */}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
      </div>

    </>
  )
}

export default Contact

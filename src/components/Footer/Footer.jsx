import { useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }
    setTimeout(() => {
      setMessage("✅ Thank you for subscribing! You'll receive updates soon.");
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 lg:px-20 border-t-2 border-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Profile Section */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400">Nikhil Guleria</h3>
          <a href="#contact">
            <button className="p-3 bg-gray-800 rounded-lg mt-5 hover:bg-yellow-500 hover:text-black transition-transform transform hover:translate-x-2 duration-500">
              Let's Connect
            </button>
          </a>
        </div>

        {/* Social Profiles */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400">Profiles</h3>
          <div className="mt-4 space-y-3">
            <a href="https://github.com/Nikhilguleria98" target="_blank" className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-500">
              <FaGithub className="text-xl" /> Github
            </a>
            <a href="https://www.linkedin.com/in/nikhil-guleria/" target="_blank" className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-500">
              <FaLinkedin className="text-xl" /> Linkedin
            </a>
            <a href="https://www.instagram.com/nikhil_batiyal_98" target="_blank" className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-500">
              <FaInstagram className="text-xl" /> Instagram
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400">Contact Me</h3>
          <ul className="mt-4 space-y-3">
            <a href="tel:+917807569493" className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-500">
              <FaPhoneAlt /> +91 7807569493
            </a>
            <a href="mailto:nikhilbatiyal3891@gmail.com" className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-500">
              <SiGmail /> nikhilbatiyal3891@gmail.com
            </a>
          </ul>
        </div>

        {/* Subscription */}
        <div className="w-full max-w-md">
          <h3 className="text-lg font-bold text-yellow-400">Stay Connected</h3>
          <p className="text-gray-300 mt-2">Subscribe to get updates on my latest projects, blogs, and collaborations.</p>
          <div className="flex mt-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full border-none rounded-l-lg text-black"
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow-400 text-black font-bold rounded-r-lg px-4"
            >
              Subscribe
            </button>
          </div>
          {message && <p className="mt-3 text-sm font-semibold text-white">{message}</p>}
          <div className="mt-4 text-sm text-gray-400">No spam, just occasional updates. Unsubscribe anytime.</div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © 2025 Nikhil Guleria. All rights reserved.
      </div>
    </footer>
  );
}

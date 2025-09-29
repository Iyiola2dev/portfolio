"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

type FormStatus = {
  submitted: boolean;
  success: boolean;
  message: string;
};

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({
      submitted: false,
      success: false,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
        });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-gray-50/50 to-white font-ovo"
    >
      <div className="max-w-6xl mx-auto px-4 py-5" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach
            out! I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto  gap-12 border border-gray-400 p-4 rounded-lg shadow-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6">Send Me a Message</h3>

            {formStatus.submitted ? (
              <motion.div
                className={`p-4 rounded-lg ${
                  formStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {formStatus.message}
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-4 rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                      className="w-full px-4 py-2 border border-gray-400 dark:border-primary-700 rounded-lg  bg-white dark:bg-primary-800 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                      className="w-full px-4 py-2 border border-gray-400 dark:border-primary-700 rounded-lg  bg-white dark:bg-primary-800 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                    className="w-full px-4 py-2 border border-gray-400 dark:border-primary-700 rounded-lg  bg-white dark:bg-primary-800 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-400 dark:border-primary-700 rounded-lg  bg-white dark:bg-primary-800 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer ${
                      isLoading
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-gray-200 via-purple-100 to-blue-100 text-gray-700 hover:from-purple-300 hover:via-blue-300 hover:to-blue-400"
                    }`}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    <FiSend className="mr-2" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-accent-600 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

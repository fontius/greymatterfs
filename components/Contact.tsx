"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { validationSchema } from "@/lib/validations";
import { ToastContainer, toast } from "react-toastify";

type FormValues = {
  email: string;
  message: string;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formspreeEndpoint = "mgvkbjrl";

  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      setIsLoading(true);
      await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      resetForm();
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Failed to send email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Formik
        initialValues={{ email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className="mt-6 flex flex-col bg-card rounded-2xl border border-border p-6 shadow-sm"
          >
            <Field
              name="email"
              type="email"
              className="h-14 px-4 rounded-lg border border-border bg-background transition-all 
                         focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2
                         placeholder:text-muted-foreground/60"
              placeholder="Your email"
            />
            <ErrorMessage name="email" component="div" className="text-destructive text-sm mt-1 text-left" />
            
            <Field
              name="message"
              as="textarea"
              className="h-52 my-4 rounded-lg border border-border p-4 bg-background transition-all 
                         focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2
                         placeholder:text-muted-foreground/60 resize-none"
              placeholder="Your message"
            />
            <ErrorMessage name="message" component="div" className="text-destructive text-sm -mt-2 mb-2 text-left" />
            
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="tracking-wider flex mx-auto rounded-md bg-[var(--fire-red)] py-2 px-8 text-base font-medium text-white transition duration-300 ease-in-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting || isLoading ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.section>
  );
}
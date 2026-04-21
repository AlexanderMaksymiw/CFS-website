import { useState } from "react";
import { sendEmail } from "./Resend";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleAction(formData) {
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <form action={handleAction} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="border p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="border p-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Send Message
        </button>
      </form>
      {status && <p className="text-sm font-bold">{status}</p>}
    </div>
  );
}

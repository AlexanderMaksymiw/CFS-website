import { sendEmail } from "./actions";

export default function ContactForm() {
  return (
    <form action={sendEmail} className="flex flex-col gap-4">
      <input name="name" type="text" placeholder="Your Name" required />
      <input name="email" type="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
}

/**
 * Contact page.
 * Provides a form to reach out, along with alternative contact methods and social links.
 */
export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-heading mb-2">Contact Us</h1>
      <p>Have questions or ideas? Get in touch with us using the form below or through our social channels.</p>
      {/* Placeholder contact form */}
      <form className="grid gap-4 max-w-lg">
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea placeholder="Message" rows={4} className="p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-primary text-neutralLight rounded font-semibold">Send Message</button>
      </form>
    </div>
  );
}
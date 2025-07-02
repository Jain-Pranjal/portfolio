import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import { send } from "@/actions/email";
import Link from "next/link";
import { contactDetails } from "@/content/sectionContent";
import { contactForm } from "@/types/section";

export function ContactSection() {
  const [formData, setFormData] = useState<contactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  // Handle form submission with server action
  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await send(formData);
      
      if (result.success) {
        setSubmitMessage("Thanks for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage(result.message || "Sorry, there was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl px-4 py-10 pl-4">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Contact Me
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-notes-text mb-4">Get In Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-notes-accent mr-3 mt-0.5" />
              <div>
                <h3 className="text-notes-text font-medium">Email</h3>
                <p className="text-notes-muted break-all">pranjalworkon@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 text-notes-accent mr-3 mt-0.5" />
              <div>
                <h3 className="text-notes-text font-medium">Phone</h3>
                <p className="text-notes-muted">+91-9999284260</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-notes-accent mr-3 mt-0.5" />
              <div>
                <h3 className="text-notes-text font-medium">Location</h3>
                <p className="text-notes-muted">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-notes-text mb-4">Follow Me</h2>
            <div className="flex flex-wrap gap-4">
              
            {contactDetails.map((contact, index) => {
              const IconComponent = 
                contact.icon === "github" ? Github :
                contact.icon === "linkedin" ? Linkedin :
                contact.icon === "twitter" ? Twitter :
                contact.icon === "instagram" ? Instagram : Mail; // Default to Mail if not found
                  return (
                  <Link
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-notes-sidebarHover flex items-center justify-center hover:bg-notes-sidebarActive"
                    aria-label={`Visit my ${contact.platform}`}
                  >
                    <IconComponent className="h-5 w-5 text-notes-text" />
                  </Link>
              );
            })}
            </div>
          </div>

          <Image
            src="/signature.png"
            alt="Signature"
            width={256}
            height={256}
            className="w-52 lg:w-72 object-contain"
            draggable={false}
          />
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-notes-text mb-4">Send Me a Message</h2>
          
          {/* Display submit message */}
          {submitMessage && (
            <div className={`mb-4 p-3 rounded-md ${
              submitMessage.includes('Thanks') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitMessage}
            </div>
          )}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-notes-text mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-notes-sidebarHover border border-notes-border rounded-md px-4 py-2 text-notes-text focus:outline-none focus:ring-2 focus:ring-notes-accent disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-notes-text mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-notes-sidebarHover border border-notes-border rounded-md px-4 py-2 text-notes-text focus:outline-none focus:ring-2 focus:ring-notes-accent disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-notes-text mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full bg-notes-sidebarHover border border-notes-border rounded-md px-4 py-2 text-notes-text focus:outline-none focus:ring-2 focus:ring-notes-accent resize-none disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full bg-notes-accent text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
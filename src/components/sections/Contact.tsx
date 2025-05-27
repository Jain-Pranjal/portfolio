import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for your message, ${formData.name}! Your message is sent.`);
    setFormData({ name: "", email: "", message: "" });
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
              <a href="https://github.com/Jain-Pranjal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-notes-sidebarHover flex items-center justify-center hover:bg-notes-sidebarActive">
                <Github className="h-5 w-5 text-notes-text" />
              </a>
              <a href="https://www.linkedin.com/in/pranjalll/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-notes-sidebarHover flex items-center justify-center hover:bg-notes-sidebarActive">
                <Linkedin className="h-5 w-5 text-notes-text" />
              </a>
              <a href="https://x.com/PranjalJain03" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-notes-sidebarHover flex items-center justify-center hover:bg-notes-sidebarActive">
                <Twitter className="h-5 w-5 text-notes-text" />
              </a>
              <a href="https://www.instagram.com/pranjalll_jain/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-notes-sidebarHover flex items-center justify-center hover:bg-notes-sidebarActive">
                <Instagram className="h-5 w-5 text-notes-text" />
              </a>
            </div>
          </div>

          <Image
          src="/signature.png"
          alt="Signature"
          width={256}
          height={256}
          className="w-52  lg:w-72 object-contain"
          draggable={false}
        />
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-notes-text mb-4">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-notes-text mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-notes-sidebarHover border border-notes-border rounded-md px-4 py-2 text-notes-text focus:outline-none focus:ring-2 focus:ring-notes-accent"
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
                className="w-full bg-notes-sidebarHover border border-notes-border rounded-md px-4 py-2 text-notes-text focus:outline-none focus:ring-2 focus:ring-notes-accent"
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
                className="w-full bg-notes-sidebarHover border border-notes-border rounded-md px-4 py-2 text-notes-text focus:outline-none focus:ring-2 focus:ring-notes-accent resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full bg-notes-accent text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Music,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-12 px-4 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
            <Music className="w-5 h-5 text-teal-400" />
            Brand of Music
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Vibe Studio — Delivering soulful music and premium sound experiences.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-block text-sm text-teal-400 hover:text-white underline transition"
            >
              Explore Our Tracks
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Courses</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />
              ashfaqahmad9958@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" />
              +91 8077718530
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              Noida, Uttar Pradesh
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="https://github.com/ashfaq9958" target="_blank" className="hover:text-white transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ashfaqahmad99/" target="_blank" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/yusufkhan.845/" target="_blank" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vibe Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

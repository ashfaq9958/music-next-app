import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Music,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-12 px-4 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">YourBrand</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering creators through high-quality mentorship and immersive tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Courses</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              ashfaqahmad9958@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 8077718530
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Aligarh, Uttar Pradesh
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Music Brand */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Music className="w-5 h-5" />
            Brand of Music
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Vibe Studio — Delivering soulful music and premium sound experiences.  
          </p>
          <div className="mt-3">
            <a href="#" className="text-sm underline text-teal-400 hover:text-white">
              Explore Our Tracks
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

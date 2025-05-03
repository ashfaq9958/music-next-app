import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-12 px-4 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">YourBrand</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering learners and creators through high-quality mentorship and immersive tools.
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

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

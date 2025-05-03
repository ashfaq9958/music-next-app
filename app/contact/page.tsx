import { Mail, User, MessageSquare, PencilLine } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export default function ContactUs() {
  return (
    <>
      <section className="min-h-screen  text-white px-4 py-16 flex items-center justify-center mt-15">
        <div className="min-h-screen w-full flex items-center justify-center  px-4 py-12">
          <div className="relative max-w-xl w-full">
            {/* Glowing Gradient Background */}
            <div className="absolute inset-0 scale-[0.85] transform rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 blur-3xl opacity-30" />

            {/* Main Card */}
            <div className="relative z-10 rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-10 shadow-2xl flex flex-col gap-6">
              {/* Icon */}
              <h2 className="text-sm font-semibold text-teal-500 tracking-widest uppercase text-center">
                Contact Us{" "}
              </h2>

              {/* Heading */}
              <p className="text-center text-gray-400 text-sm sm:text-base mb-10">
                We&apos;d love to hear from you. Please fill out the form below.
              </p>

              {/* Description */}
              <form className="space-y-6">
                {/* Name & Email */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center bg-zinc-900 rounded-lg border border-zinc-700 px-4 py-3 w-full focus-within:border-cyan-500 transition">
                    <User className="text-gray-400 mr-3" size={18} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div className="flex items-center bg-zinc-900 rounded-lg border border-zinc-700 px-4 py-3 w-full focus-within:border-cyan-500 transition">
                    <Mail className="text-gray-400 mr-3" size={18} />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex items-center bg-zinc-900 rounded-lg border border-zinc-700 px-4 py-3 focus-within:border-cyan-500 transition">
                  <PencilLine className="text-gray-400 mr-3" size={18} />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex items-start bg-zinc-900 rounded-lg border border-zinc-700 px-4 py-3 focus-within:border-cyan-500 transition">
                  <MessageSquare
                    className="text-gray-400 mr-3 mt-1"
                    size={18}
                  />
                  <textarea
                    placeholder="Your Message"
                    className="bg-transparent outline-none text-white w-full placeholder-gray-400 h-28 resize-none text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button className="self-start rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 px-5 py-2 text-sm font-medium text-white transition hover:brightness-110">
                    Send Message
                  </button>
                </div>
              </form>

              {/* Meteor Effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

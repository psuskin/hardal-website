"use client";

import React, { useState } from "react";
import SubHero from "@/components/Common/SubHero";
import MinimalButton from "@/components/Buttons/MinimalButton";

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Allgemeine Anfrage",
  });

  const [focusedField, setFocusedField] = useState("");

  const subjects = [
    "Allgemeine Anfrage",
    "Reservierung",
    "Catering",
    "Veranstaltung",
    "Feedback",
  ];

  const openingHours = [
    { day: "Sonntag", hours: "07:00–03:00" },
    { day: "Montag", hours: "07:00–01:00" },
    { day: "Dienstag", hours: "07:00–01:00" },
    { day: "Mittwoch", hours: "07:00–01:00" },
    { day: "Donnerstag", hours: "07:00–01:00" },
    { day: "Freitag", hours: "07:00–01:00" },
    { day: "Samstag", hours: "07:00–03:00" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-black">
      <SubHero
        title="Kontakt"
        description="Besuchen Sie uns in Hamburg"
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
        imageAlt="Hardal Restaurant Contact"
        height="small"
        overlay="dark"
        align="center"
        showDivider={false}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Name Field */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-transparent text-white pt-6 pb-2 focus:outline-none border-b border-white/20 focus:border-[#fcc81a] transition-colors peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-0 top-6 text-white/50 transition-all duration-300 pointer-events-none
                          ${
                            focusedField === "name" || formData.name
                              ? "text-xs -translate-y-full text-[#fcc81a]"
                              : ""
                          }
                          peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-[#fcc81a]`}
                      >
                        Name
                      </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-transparent text-white pt-6 pb-2 focus:outline-none border-b border-white/20 focus:border-[#fcc81a] transition-colors peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-0 top-6 text-white/50 transition-all duration-300 pointer-events-none
                          ${
                            focusedField === "email" || formData.email
                              ? "text-xs -translate-y-full text-[#fcc81a]"
                              : ""
                          }
                          peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-[#fcc81a]`}
                      >
                        E-Mail
                      </label>
                    </div>

                    {/* Phone Field */}
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-transparent text-white pt-6 pb-2 focus:outline-none border-b border-white/20 focus:border-[#fcc81a] transition-colors peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute left-0 top-6 text-white/50 transition-all duration-300 pointer-events-none
                          ${
                            focusedField === "phone" || formData.phone
                              ? "text-xs -translate-y-full text-[#fcc81a]"
                              : ""
                          }
                          peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-[#fcc81a]`}
                      >
                        Telefon
                      </label>
                    </div>

                    {/* Subject Field */}
                    <div className="relative group">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField("")}
                        className="w-full bg-transparent text-white pt-6 pb-2 focus:outline-none border-b border-white/20 focus:border-[#fcc81a] transition-colors appearance-none peer"
                      >
                        {subjects.map((subject) => (
                          <option
                            key={subject}
                            value={subject}
                            className="bg-black"
                          >
                            {subject}
                          </option>
                        ))}
                      </select>
                      <label
                        htmlFor="subject"
                        className={`absolute left-0 top-6 text-white/50 transition-all duration-300 pointer-events-none
                          ${
                            focusedField === "subject" || formData.subject
                              ? "text-xs -translate-y-full text-[#fcc81a]"
                              : ""
                          }
                          peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-[#fcc81a]`}
                      >
                        Betreff
                      </label>
                      <svg
                        className="absolute right-0 top-8 w-4 h-4 text-white/50 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      rows={4}
                      className="w-full bg-transparent text-white pt-6 pb-2 focus:outline-none border-b border-white/20 focus:border-[#fcc81a] transition-colors resize-none peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className={`absolute left-0 top-6 text-white/50 transition-all duration-300 pointer-events-none
                        ${
                          focusedField === "message" || formData.message
                            ? "text-xs -translate-y-full text-[#fcc81a]"
                            : ""
                        }
                        peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-[#fcc81a]`}
                    >
                      Nachricht
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <MinimalButton type="submit" variant="light" size="default">
                      Nachricht senden
                    </MinimalButton>
                  </div>
                </form>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-[#fcc81a] text-sm tracking-wider uppercase mb-4">
                    Über Uns
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Das HARDAL RESTAURANT steht Ihnen mit einem großen
                    Frühstücks- und Mittagstisch, sowie Abendessen zur
                    Verfügung.
                  </p>
                </div>

                <div>
                  <h2 className="text-[#fcc81a] text-sm tracking-wider uppercase mb-4">
                    Kontakt
                  </h2>
                  <div className="space-y-2 text-white/80">
                    <p>Möllner Landstraße 3</p>
                    <p>22111 Hamburg</p>
                    <div className="pt-2">
                      <a
                        href="tel:+494084708231"
                        className="hover:text-[#fcc81a] transition-colors"
                      >
                        +49 (040) 84 70 82 31
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:info@hardal-restaurant.de"
                        className="hover:text-[#fcc81a] transition-colors"
                      >
                        info@hardal-restaurant.de
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-[#fcc81a] text-sm tracking-wider uppercase mb-4">
                    Öffnungszeiten
                  </h2>
                  <div className="space-y-2">
                    {openingHours.map((item, index) => (
                      <div
                        key={item.day}
                        className={`flex justify-between items-center py-2 ${
                          index !== openingHours.length - 1
                            ? "border-b border-white/10"
                            : ""
                        }`}
                      >
                        <span className="text-white/80">{item.day}</span>
                        <span className="text-white font-light">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-[#fcc81a] text-sm tracking-wider uppercase mb-4">
                    Social Media
                  </h2>
                  <a
                    href="https://facebook.com/hardalrestaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-[#fcc81a] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>

                {/* Map Button */}
                <div className="pt-4">
                  <a
                    href="https://maps.google.com/?q=Möllner+Landstraße+3,+22111+Hamburg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MinimalButton variant="light" size="default">
                      Auf Google Maps öffnen
                    </MinimalButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KontaktPage;

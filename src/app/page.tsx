"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function TeamBuildingInvitation() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    dietaryRestrictions: "",
    notes: "",
  });

  // 3D card animation state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [cardHover, setCardHover] = useState(false);

  const handleMouseMove = (e: {
    currentTarget: any;
    clientX: number;
    clientY: number;
  }) => {
    if (!cardHover) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = (y - centerY) / 10;
    const rotateYVal = (centerX - x) / 10;
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update countdown timer
  useEffect(() => {
    const eventDate = new Date("March 21, 2025 18:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;

      if (timeRemaining > 0) {
        setTimeLeft({
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your RSVP!");
    setIsRsvpOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden relative">
      <Head>
        <title>Team Building Party | March 21, 2025</title>
        <meta
          name="description"
          content="Join us for an evening of team building fun"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-40 w-36 h-36 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-xl opacity-20 animate-pulse"></div>

      {/* Stars/Particles Background */}
      <div className="stars">
        {/* Use predefined star positions to avoid hydration errors */}
        {[
          { top: 42.9, left: 33.9, delay: 3.7, width: 3.2, height: 3.3 },
          { top: 60.3, left: 70.4, delay: 4.9, width: 2.5, height: 1.7 },
          { top: 14.4, left: 51.1, delay: 0.8, width: 1.8, height: 1.9 },
          { top: 0.5, left: 67.0, delay: 3.5, width: 2.1, height: 3.4 },
          { top: 0.6, left: 27.7, delay: 4.4, width: 1.1, height: 3.5 },
          { top: 79.5, left: 64.1, delay: 4.7, width: 2.8, height: 1.2 },
          { top: 67.7, left: 34.2, delay: 0.01, width: 3.1, height: 1.1 },
          { top: 23.4, left: 42.7, delay: 1.7, width: 1.9, height: 1.3 },
          { top: 5.4, left: 40.3, delay: 2.3, width: 3.3, height: 1.6 },
          { top: 33.8, left: 12.5, delay: 2.7, width: 3.0, height: 2.0 },
          { top: 60.0, left: 1.5, delay: 0.8, width: 2.0, height: 2.4 },
          { top: 24.5, left: 24.5, delay: 2.2, width: 1.7, height: 2.8 },
          { top: 68.0, left: 5.5, delay: 4.1, width: 1.7, height: 3.2 },
          { top: 24.1, left: 13.2, delay: 2.6, width: 2.6, height: 1.8 },
          { top: 64.8, left: 95.3, delay: 0.5, width: 2.3, height: 3.1 },
          { top: 49.3, left: 20.7, delay: 2.4, width: 2.5, height: 3.6 },
          { top: 17.9, left: 39.3, delay: 0.2, width: 3.4, height: 1.1 },
          { top: 87.5, left: 77.2, delay: 3.0, width: 2.4, height: 2.5 },
          { top: 36.8, left: 4.8, delay: 3.3, width: 1.3, height: 2.2 },
          { top: 21.4, left: 87.1, delay: 4.0, width: 1.0, height: 2.3 },
        ].map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              width: `${star.width}px`,
              height: `${star.height}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 relative z-10">
        {/* 3D Header Card */}
        <div
          className="perspective-1000 my-12"
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => {
            setCardHover(false);
            setRotateX(0);
            setRotateY(0);
          }}
          onMouseMove={handleMouseMove}
        >
          <div
            className="transform-style-3d transition-transform duration-200"
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <header className="text-center py-16 md:py-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden transform-style-3d">
              {/* 3D Floating Elements */}
              <div
                className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink-500/20 blur-xl transform-style-3d"
                style={{ transform: "translateZ(40px)" }}
              ></div>
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-xl transform-style-3d"
                style={{ transform: "translateZ(20px)" }}
              ></div>

              <div
                className="relative z-10 transform-style-3d"
                style={{ transform: "translateZ(50px)" }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300">
                  Annual Team Building
                </h1>
                <p className="text-xl text-white/90">
                  Connect, collaborate and celebrate with your colleagues
                </p>

                <div className="mt-8 inline-block bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
                  <p className="text-white/90 mb-1">All team members invited</p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Spring 2025 Retreat
                  </h2>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* 3D Countdown Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 mb-12 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Countdown to the Event
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg h-20 flex items-center justify-center mb-2 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                  <span className="text-3xl font-bold relative z-10">
                    {item.value}
                  </span>
                </div>
                <p className="text-indigo-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Glassmorphism Event Details */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Event Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2 text-white">Date</h3>
              <p className="text-indigo-200">March 21, 2025</p>
              <p className="text-indigo-300 text-sm mt-1">Friday Evening</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2 text-white">Time</h3>
              <p className="text-indigo-200">6:00 PM - 11:00 PM</p>
              <p className="text-indigo-300 text-sm mt-1">
                One exciting evening
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2 text-white">Location</h3>
              <p className="text-indigo-200">The Bull Restaurant</p>
              {/* <p className="text-indigo-300 text-sm mt-1">
                Departmant store Branch
              </p> */}
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2 text-white">
                Participants
              </h3>
              <p className="text-indigo-200">All Team Members</p>
            </div>
          </div>
        </div>

        {/* Agenda with 3D Glass Cards */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Event Agenda
          </h2>

          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
            <h3 className="font-medium text-xl text-white mb-4 relative z-10">
              Evening Schedule
            </h3>
            <ul className="mt-2 space-y-4 relative z-10">
              {/* <li className="flex items-start">
                <span className="text-blue-300 font-medium mr-2">6:00 PM:</span>
                <span className="text-indigo-100">
                  Welcome drinks & reception
                </span>
              </li> */}
              <li className="flex items-start">
                {/* <span className="text-blue-300 font-medium mr-2">6:30 PM:</span> */}
                <span className="text-indigo-100">
                  Fun team-building activities & games
                </span>
              </li>
              <li className="flex items-start">
                {/* <span className="text-blue-300 font-medium mr-2">7:30 PM:</span> */}
                <span className="text-indigo-100">Dinner service</span>
              </li>

              <li className="flex items-start">
                {/* <span className="text-blue-300 font-medium mr-2">9:00 PM:</span> */}
                <span className="text-indigo-100">Music & dancing</span>
              </li>
              <li className="flex items-start">
                {/* <span className="text-blue-300 font-medium mr-2">
                  11:00 PM:
                </span> */}
                <span className="text-indigo-100">Event concludes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fancy RSVP Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-xl"></div>

          <div className="relative z-10">
            {/* <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              RSVP by March 14, 2025
            </h2> */}

            {!isRsvpOpen ? (
              <div className="text-center">
                <p className="text-indigo-100 mb-6">
                  Please let us know if you'll be joining us for this important
                  team event
                </p>
                <div>
                  <button
                    onClick={() => setIsRsvpOpen(true)}
                    className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Open RSVP Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-indigo-100 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-indigo-100 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-indigo-100 mb-2">
                    Will you attend?
                  </label>
                  <div className="space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === "yes"}
                        onChange={handleInputChange}
                        className="text-purple-500"
                      />
                      <span className="ml-2 text-indigo-100">
                        Yes, I'll be there
                      </span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === "no"}
                        onChange={handleInputChange}
                        className="text-purple-500"
                      />
                      <span className="ml-2 text-indigo-100">
                        No, I can't make it
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dietaryRestrictions"
                    className="block text-indigo-100 mb-2"
                  >
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Any dietary requirements or allergies"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-indigo-100 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    // rows="3"
                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Any questions or comments?"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsRsvpOpen(false)}
                    className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-colors duration-300"
                  >
                    Submit RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-indigo-200">
          <p className="mt-2 text-sm text-indigo-300">
            © 2025 All rights reserved.
          </p>
        </footer>
      </div>

      {/* CSS for Stars Animation */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          opacity: 0.5;
          animation: twinkle 5s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

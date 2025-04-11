import React from "react";
import { useNavigate } from "react-router-dom";

const labels = [
  "bedroom",
  "kitchen",
  "toilet",
  "drawing",
  "terrace",
  "garden",
  "lawn",
  "dining",
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Top Bold Heading */}
      <br/>
      <h1 className="text-3xl font-bold text-center">LUXURIOUS HOUSE TOUR</h1>
      <br />

      {/* Rounded Rectangle */}
      <div className="w-1/2 max-w-4xl flex items-center justify-center  p-4">
        <img
          src="assets/images/luxury-house.jpg"
          alt="Luxury House"
          className="w-full"
        />
      </div>
      <br />
      {/* Thumbnails in a Row */}
      <div className="w-full px-4 py-6">
        <div className="grid grid-cols-4 md:grid-cols-8gap-4">
          {labels.map((label, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => navigate(`/room/${label}`)}
            >
              <img
                src={`/assets/images/${label}-360.jpg`}
                alt={label}
                className="w-[20vw] h-[22vh] xs:w-[11vw] xs:h-[16vh] object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              <br/>
              <h5 className="mt-2 font-medium text-gray-800 text-center">
                {label.toUpperCase()}
              </h5>
              <br/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

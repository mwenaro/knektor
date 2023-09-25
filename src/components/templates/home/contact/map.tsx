import React from "react";

const MapSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-gray-300 rounded-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://maps.google.com/maps?q=YOUR_API_LOCATION&output=embed"
              className="w-full h-full"
              frameBorder={0}
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

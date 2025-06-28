"use client";
import React from "react";

const LocationMap = () => {
  return (
    <div className="mt-24 p-8 bg-white/5 rounded-xl">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#fcc81a] mb-6">
        Besuchen Sie uns
      </h3>
      <p className="text-white/80 mb-8 text-lg leading-relaxed">
        Das Hardal Restaurant befindet sich im Herzen des Schanzenviertels,
        einem der lebendigsten Viertel Hamburgs. Wir sind optimal an das
        öffentliche Verkehrsnetz angebunden und nur wenige Gehminuten von der
        S-Bahn Station Sternschanze entfernt.
      </p>
      <div className="aspect-video relative w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.4990630163877!2d9.962932776677012!3d53.56247997246745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f4c9884bc3f%3A0x4263df27bd63aa0!2sSchanzenviertel%2C%20Hamburg!5e0!3m2!1sen!2sde!4v1709764532061!5m2!1sen!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="text-[#fcc81a] font-semibold mb-2">Adresse</h4>
          <p className="text-white/80">
            Schulterblatt 73
            <br />
            20357 Hamburg
            <br />
            Schanzenviertel
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="text-[#fcc81a] font-semibold mb-2">
            Öffentliche Verkehrsmittel
          </h4>
          <p className="text-white/80">
            S-Bahn: Sternschanze (S11, S21, S31)
            <br />
            U-Bahn: U3 Sternschanze
            <br />
            Bus: Metrobus 15
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faShieldAlt,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

export const Services = (props) => {
  const iconStyle = {
    fontSize: "42px",
    width: "120px",
    height: "120px",
    padding: "40px 0",
    background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
    borderRadius: "50%",
    color: "#fff",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.05)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const servicesData = [
    {
      icon: faTools,
      name: "Installation & Setup",
      text: "We manage everything from machine customization to installation, ensuring a smooth and hassle-free setup for your operations.",
    },
    {
      icon: faShieldAlt,
      name: "Preventive Maintenance",
      text: "Scheduled maintenance programs to keep your machinery running efficiently, preventing costly downtime and repairs.",
    },
    {
      icon: faChalkboardTeacher,
      name: "Operator Training",
      text: "We provide comprehensive training for your staff to ensure safe and efficient operation, maximizing your equipment's performance.",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Empowering your milling operations with seamless solutions, expert
            care, and round-the-clock support.
          </p>
        </div>
        <div className="row">
          {servicesData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <div style={iconStyle}>
                <FontAwesomeIcon icon={d.icon} />
              </div>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

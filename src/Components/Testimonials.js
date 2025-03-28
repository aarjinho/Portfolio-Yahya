import React from "react";

const testimonials = [
  {
    quote:
      "The internship went incredibly well, exceeding our expectations, prompting us to seriously consider bringing Yahya on board as an apprentice.",
    name: "Matthieu CONSTANT",
    title: "IT Project Manager at PROBTP",
  },
  {
    quote:
      "Very satisfactory progress has been made on the developments. The apprentice has remained consistently engaged, effective, and independent.",
    name: "Veronique VANLERBERGHE",
    title: "Project Manager at PROBTP Groupe",
  },
  {
    quote:
      "I valued working with Ibrahim on numerous computer science projects; his creativity, intelligence, and drive significantly improved our debugging and problem-solving efforts.",
    name: "Mathieu BERGER",
    title: "Software Engineer at PROBTP",
  },
];


const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="header-box">
        <p className="sub-title">What others say</p>
        <h2 className="main-title">Testimonials</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote-symbol">"</p>
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-footer">
              <p className="testimonial-name">
                <span className="blue-text">@</span> {testimonial.name}
              </p>
              <p className="testimonial-title">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
import React from "react";

const Contact = () => {
    const handleDownload = () => {
            const link = document.createElement("a");
            link.href = "/Yahya_Aarji_cv.pdf";
            link.download = "Yahya_AARJI_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };
        
  return (
    <div className="contact-container">
      <h3 className="subtitle">Get in touch</h3>
      <h1 className="title large-title">Contact</h1>
      <div className="contact-details">
        <p>
          <span className="label">Email:</span> aarjipro@gmail.com
        </p>
        <p>
          <span className="label">Phone:</span> +33 6 29 16 07 66
        </p>
        <p>
          <span className="label">LinkedIn:</span> Yahya AARJI
        </p>
        <p>
          <span className="label">Location:</span> Nice, France
        </p>
        <p className="relocation">Open to relocation.</p>
      </div>
      <button className="download-btn" onClick={handleDownload}>Download My CV</button>
    </div>
  );
};

export default Contact;

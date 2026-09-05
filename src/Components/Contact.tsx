import { useState } from "react";
import "./Contact.css";

interface ContactForm {
    name: string;
    mobile: string;
    email: string;
    subject: string;
    message: string;
}

function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Your message has been sent successfully!");
        setFormData({
            name: "",
            mobile: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="contact-page">

            {/* ================= Header ================= */}
            <section className="contact-header">
                <h1>Get in Touch</h1>
                <p>
                    Have questions about the  program? We are here to help.
                    Reach out to us via phone, email, or visit our office.
                </p>
            </section>

            {/* ================= Information Cards ================= */}
            <section className="contact-container">

                <div className="contact-info-grid">

                    {/* Location Card */}
                    <div className="info-card">
                        <div className="info-icon location-icon">📍</div>
                        <h3>Our Location</h3>
                        <p>
                            Islamic Development Bank 
                            <br />
                            Agargaon
                            <br />
                            Agargaon, Dhaka-1200
                        </p>
                    </div>

                    {/* Contact Info Card */}
                    <div className="info-card">
                        <div className="info-icon phone-icon">📞</div>
                        <h3>Contact Info</h3>
                        <p>
                            Helpline: 01319-195766
                            <br />
                            Email: pmit@juniv.edu
                        </p>
                    </div>

                    {/* Office Hours Card */}
                    <div className="info-card">
                        <div className="info-icon time-icon">🕐</div>
                        <h3>Office Hours</h3>
                        <p>
                            Friday: 08:30 AM - 06:30 PM
                            <br />
                            Saturday: 08:30 AM - 06:00 PM
                            <br />
                            Sunday - Thursday: 08:30 AM - 04:30 PM
                        </p>
                    </div>

                </div>

                {/* ================= Main Contact Area ================= */}
                <div className="contact-main">

                    {/* Left Side */}
                    <div className="contact-left">

                        {/* Map */}
                        <div className="map-container">
                            <iframe
                                title="IIT Jahangirnagar University Map"
                                src="https://www.google.com/maps?q=Institute%20of%20Information%20Technology%20Jahangirnagar%20University&output=embed"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Social Media */}
                        <div className="social-box">
                            <h3>Connect With Us</h3>
                            <div className="social-links">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social facebook"
                                >
                                    🔵 Facebook
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social linkedin"
                                >
                                    🔗 LinkedIn
                                </a>
                                <a
                                    href="https://www.isdb-bisew.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social website"
                                >
                                    🌐 IDB Website
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* ================= Contact Form ================= */}
                    <div className="form-card">
                        <h2>Send us a Message</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="01XXXXXXXXX"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Admission Inquiry"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="send-button">
                                ✈ Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Contact;
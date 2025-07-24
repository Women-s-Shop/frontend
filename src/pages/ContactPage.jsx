"use client"

import { useState } from "react"
import "../styles/contact.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would send this to your API
      console.log("Contact form submitted:", formData)

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send us a Message</h2>

            {submitted && (
              <div className="success-message">
                <h3>Thank you for your message!</h3>
                <p>We've received your inquiry and will get back to you within 24 hours.</p>
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="sizing">Sizing Help</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </section>

          {/* Contact Information */}
          <section className="contact-info-section">
            <h2>Get in Touch</h2>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <h3>Email Us</h3>
                <p>hello@mareve.com</p>
                <p className="method-description">We typically respond within 24 hours</p>
              </div>

              <div className="contact-method">
                <div className="method-icon">📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p className="method-description">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="contact-method">
                <div className="method-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Available on our website</p>
                <p className="method-description">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <h3>Visit Us</h3>
                <p>
                  123 Fashion Avenue
                  <br />
                  New York, NY 10001
                </p>
                <p className="method-description">By appointment only</p>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days.</p>
            </div>
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We offer 30-day returns on all items in original condition with tags attached.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer international shipping?</h3>
              <p>Yes, we ship to most countries worldwide. Shipping costs and times vary by location.</p>
            </div>
            <div className="faq-item">
              <h3>How do I track my order?</h3>
              <p>
                You'll receive a tracking number via email once your order ships. You can also track orders in your
                account.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage

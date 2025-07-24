"use client"

import { useState } from "react"
import "../styles/support.css"

const SupportPage = () => {
  const [activeCategory, setActiveCategory] = useState("orders")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState(null)

  const supportCategories = [
    { id: "orders", label: "Orders & Shipping", icon: "📦" },
    { id: "returns", label: "Returns & Exchanges", icon: "🔄" },
    { id: "sizing", label: "Sizing & Fit", icon: "📏" },
    { id: "account", label: "Account & Payment", icon: "👤" },
    { id: "products", label: "Product Care", icon: "🧥" },
    { id: "technical", label: "Technical Support", icon: "💻" },
  ]

  const faqData = {
    orders: [
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and international shipping options are also available.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs duties.",
      },
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer:
          "We offer 30-day returns on all items in original condition with tags attached. Items must be unworn and in their original packaging.",
      },
      {
        question: "How do I start a return?",
        answer:
          "Log into your account, go to your order history, and select 'Return Items'. You can also contact our customer service team for assistance.",
      },
      {
        question: "Who pays for return shipping?",
        answer:
          "We provide free return shipping for defective items or our errors. For other returns, a small return shipping fee may apply.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Refunds are processed within 3-5 business days after we receive your returned items. The refund will appear on your original payment method.",
      },
    ],
    sizing: [
      {
        question: "How do I find my size?",
        answer:
          "Use our detailed size guide available on each product page. We recommend measuring yourself and comparing to our size chart for the best fit.",
      },
      {
        question: "What if the item doesn't fit?",
        answer:
          "We offer free exchanges for different sizes within 30 days. Simply return the item and we'll send you the correct size at no extra cost.",
      },
      {
        question: "Do your sizes run large or small?",
        answer:
          "Our sizes are designed to be true to size. Each product page includes fit notes and customer reviews to help you choose the right size.",
      },
      {
        question: "Can I get sizing advice?",
        answer:
          "Our customer service team can provide personalized sizing recommendations. Contact us with your measurements and we'll help you choose.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer:
          "Click 'Account' in the top navigation and select 'Sign Up'. You'll need to provide your email address and create a password.",
      },
      {
        question: "I forgot my password. What do I do?",
        answer:
          "Click 'Forgot Password' on the login page. We'll send you a reset link via email. Check your spam folder if you don't see it.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.",
      },
    ],
    products: [
      {
        question: "How should I care for my MA RÊVE items?",
        answer:
          "Care instructions are included with each item and on the product page. Generally, we recommend gentle machine wash or hand wash for most items.",
      },
      {
        question: "Are your products sustainable?",
        answer:
          "We're committed to sustainability. Many of our items are made from eco-friendly materials and we use ethical manufacturing practices.",
      },
      {
        question: "Do you offer alterations?",
        answer:
          "We don't offer alterations directly, but we can recommend trusted tailors in your area. Most of our items are designed to fit well without alterations.",
      },
      {
        question: "What materials do you use?",
        answer:
          "We use high-quality materials including organic cotton, sustainable fabrics, and premium blends. Material details are listed on each product page.",
      },
    ],
    technical: [
      {
        question: "The website isn't working properly. What should I do?",
        answer:
          "Try clearing your browser cache and cookies, or try a different browser. If the problem persists, please contact our technical support team.",
      },
      {
        question: "I can't complete my purchase. Help!",
        answer:
          "This could be due to payment processing issues or browser problems. Try using a different payment method or contact our support team.",
      },
      {
        question: "How do I update my account information?",
        answer:
          "Log into your account and go to 'Account Settings'. You can update your personal information, addresses, and payment methods there.",
      },
      {
        question: "I'm not receiving your emails. Why?",
        answer:
          "Check your spam folder first. If you still don't see our emails, add hello@mareve.com to your contacts and contact us to update your preferences.",
      },
    ],
  }

  const filteredFaqs = faqData[activeCategory]?.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="support-page">
      <div className="support-container">
        {/* Hero Section */}
        <section className="support-hero">
          <h1>How can we help you?</h1>
          <p>Find answers to common questions or get in touch with our support team</p>

          {/* Search Bar */}
          <div className="support-search">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <div className="action-item">
              <div className="action-icon">📦</div>
              <h3>Track Your Order</h3>
              <p>Get real-time updates on your order status</p>
              <button className="action-button">Track Order</button>
            </div>
            <div className="action-item">
              <div className="action-icon">🔄</div>
              <h3>Start a Return</h3>
              <p>Easy returns within 30 days</p>
              <button className="action-button">Return Item</button>
            </div>
            <div className="action-item">
              <div className="action-icon">📏</div>
              <h3>Size Guide</h3>
              <p>Find your perfect fit</p>
              <button className="action-button">View Guide</button>
            </div>
            <div className="action-item">
              <div className="action-icon">💬</div>
              <h3>Contact Support</h3>
              <p>Get help from our team</p>
              <button className="action-button">Contact Us</button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          {/* Category Tabs */}
          <div className="category-tabs">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.label}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {filteredFaqs?.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className={`faq-toggle ${expandedFaq === index ? "expanded" : ""}`}>+</span>
                </button>
                {expandedFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs?.length === 0 && (
            <div className="no-results">
              <p>No results found for "{searchQuery}". Try a different search term or browse our categories above.</p>
            </div>
          )}
        </section>

        {/* Contact Support */}
        <section className="contact-support">
          <div className="contact-content">
            <h2>Still need help?</h2>
            <p>Our customer support team is here to help you with any questions or concerns.</p>
            <div className="contact-options">
              <div className="contact-option">
                <div className="option-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Available Mon-Fri, 9AM-6PM EST</p>
                <button className="contact-button">Start Chat</button>
              </div>
              <div className="contact-option">
                <div className="option-icon">📧</div>
                <h3>Email Support</h3>
                <p>We'll respond within 24 hours</p>
                <button className="contact-button">Send Email</button>
              </div>
              <div className="contact-option">
                <div className="option-icon">📞</div>
                <h3>Phone Support</h3>
                <p>+1 (555) 123-4567</p>
                <button className="contact-button">Call Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SupportPage

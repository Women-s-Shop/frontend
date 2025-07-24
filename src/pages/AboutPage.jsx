"use client"

import { useState, useEffect } from "react"
import "../styles/about.css"

const AboutPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="about-page">
        <div className="page-loading">
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About MA RÊVE</h1>
            <p className="hero-subtitle">Making dreams come true through beautiful, accessible fashion for everyone</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="section-content">
            <h2>Our Story</h2>
            <div className="story-grid">
              <div className="story-text">
                <p>
                  MA RÊVE was born from a simple belief: everyone deserves to feel beautiful and confident in what they
                  wear. Founded with the vision of creating accessible, inclusive fashion, we've dedicated ourselves to
                  designing pieces that celebrate individuality and empower women everywhere.
                </p>
                <p>
                  Our name, "MA RÊVE" (French for "My Dream"), reflects our commitment to helping you express your
                  unique style and achieve your fashion dreams. From elegant dresses to comfortable everyday wear, every
                  piece in our collection is thoughtfully designed with quality, comfort, and style in mind.
                </p>
              </div>
              <div className="story-image">
                <div className="image-placeholder">
                  <span>Our Story Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-content">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🌟</div>
                <h3>Quality First</h3>
                <p>
                  We use only the finest materials and craftsmanship to ensure every piece meets our high standards.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">💝</div>
                <h3>Inclusive Design</h3>
                <p>Fashion should be for everyone. We design with accessibility and inclusivity at the forefront.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <h3>Sustainability</h3>
                <p>We're committed to sustainable practices and ethical manufacturing for a better future.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h3>Customer Care</h3>
                <p>Your satisfaction is our priority. We're here to help you find your perfect style.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-content">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <span>👩‍💼</span>
                </div>
                <h3>Sarah Johnson</h3>
                <p className="member-role">Founder & Creative Director</p>
                <p className="member-bio">
                  With over 15 years in fashion design, Sarah brings her passion for inclusive design to every MA RÊVE
                  collection.
                </p>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <span>👩‍🎨</span>
                </div>
                <h3>Maria Rodriguez</h3>
                <p className="member-role">Head of Design</p>
                <p className="member-bio">
                  Maria's innovative approach to sustainable fashion helps us create beautiful pieces that are kind to
                  the planet.
                </p>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <span>👩‍💻</span>
                </div>
                <h3>Emily Chen</h3>
                <p className="member-role">Customer Experience Manager</p>
                <p className="member-bio">
                  Emily ensures every customer has an exceptional experience, from browsing to delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <p>
                At MA RÊVE, we believe fashion is a powerful form of self-expression. Our mission is to create
                beautiful, accessible clothing that empowers women to feel confident and express their unique style.
                We're committed to:
              </p>
              <ul className="mission-list">
                <li>Designing inclusive fashion for all body types and abilities</li>
                <li>Using sustainable and ethical manufacturing practices</li>
                <li>Providing exceptional customer service and support</li>
                <li>Creating a positive impact in our community and beyond</li>
                <li>Continuously innovating to meet our customers' evolving needs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage

import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Our Restaurant</h1>
          <p className="hero-subtitle">
            Crafting culinary excellence with passion and dedication
          </p>
        </div>
      </section>

      <div className="about-container">
        <section className="welcome-section">
          <div className="welcome-card">
            <h2>Welcome to Our Culinary Journey</h2>
            <p>
              Welcome to our restaurant! We are a team of passionate chefs
              dedicated to providing the best dining experience. Every dish
              tells a story of tradition, innovation, and love for exceptional
              cuisine.
            </p>
          </div>
        </section>

        <div className="content-grid">
          <div className="story-card">
            <div className="card-icon">📖</div>
            <h3>Our Story</h3>
            <p>
              Founded in 2010 with the vision of creating a unique culinary
              experience. We source our ingredients locally and prioritize
              sustainability in our practices, ensuring every meal is both
              delicious and environmentally conscious.
            </p>
          </div>

          {/* Our Team Card */}
          <div className="team-card">
            <div className="card-icon">👥</div>
            <h3>Our Team</h3>
            <p>
              Our team consists of talented chefs, friendly staff, and a
              management team that is committed to excellence. We work together
              to ensure that every customer leaves satisfied and eager to
              return.
            </p>
          </div>

          {/* Our Values Card */}
          <div className="values-card">
            <div className="card-icon">⭐</div>
            <h3>Our Values</h3>
            <p>
              Quality, freshness, and customer satisfaction are at the heart of
              everything we do. We believe in using only the finest ingredients
              and providing exceptional service to create memorable dining
              experiences.
            </p>
          </div>

          {/* Visit Us Card */}
          <div className="visit-card">
            <div className="card-icon">📍</div>
            <h3>Visit Us</h3>
            <div className="visit-details">
              <div className="hours-section">
                <h4>🕐 Opening Hours</h4>
                <p>
                  <strong>Mon - Fri:</strong> 11:00 AM - 10:00 PM
                </p>
                <p>
                  <strong>Sat - Sun:</strong> 12:00 PM - 11:00 PM
                </p>
              </div>
              <div className="location-section">
                <h4>📍 Location</h4>
                <p>Oran, Algeria</p>
              </div>
            </div>
          </div>
          <Link className="back-home" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

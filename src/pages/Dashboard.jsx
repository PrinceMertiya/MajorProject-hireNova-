import React from "react";
import waveBg from "../images/rectangle-wave.png";
import resumeImg from "../images/resumeholder.png"; 
import "./Dashboard.css"; 

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="hero-container">
        <img src={waveBg} alt="Wave Background" className="hero-wave-bg" />
      <header className="hero-header">
        <div className="logo">LOGO</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Resume</a>
          <a href="#">Support</a>
          <button className="login-btn">Login</button>
        </nav>
      </header>

      <section className="hero-section">
        {/* Wave background */}

        <div className="hero-content">
          <div className="hero-left">
            <h1>Scan Your Resume.</h1>
            <p><strong>Strengthen Your Future.</strong></p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={resumeImg} alt="Resume Holder" />
          </div>
        </div>
      </section>
    </div>
    </header>

      

      {/* Services Section */}
      <section className="services-section">
        <div className="service-card">
          <div className="service-card-icon"><span role="img" aria-label="Resume">📄</span></div>
          <div>
            <h3>Resume & ATTS Optimize</h3>
            <p>Craft job-ready, ATS-friendly resumes with real-time AI feedback and keyword enhancement.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-icon"><span role="img" aria-label="Cover Letter">📝</span></div>
          <div>
            <h3>Cover Letter</h3>
            <p>Generate personalized, editable cover letters tailored to the job you’re applying for.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-icon"><span role="img" aria-label="Skill Gap">📋</span></div>
          <div>
            <h3>Skill Gap</h3>
            <p>Identify missing skills or tools by comparing your resume with job descriptions instantly.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-icon"><span role="img" aria-label="Career Guidance">🌐</span></div>
          <div>
            <h3>Career Guidance</h3>
            <p>Get smart role suggestions and learning paths based on your profile and market trends.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-icon"><span role="img" aria-label="Interview">🏆</span></div>
          <div>
            <h3>Interview Preparation</h3>
            <p>Practice mock interviews with AI-generated questions and receive instant feedback.</p>
          </div>
        </div>
      </section>

      {/* Action Cards Section */}
      <section className="action-cards">
        <div className="action-card">
          <span className="action-card-icon">🕹️</span>
          <span>
            Scan your resume for ATS compatibility, keyword match, and formatting. Get instant AI feedback to improve and stand out.
          </span>
        </div>
        <div className="action-card">
          <span className="action-card-icon">✉️</span>
          <span>
            Generate a personalized cover letter from your resume and job description. Save time and apply with confidence.
          </span>
        </div>
        <div className="action-card">
          <span className="action-card-icon">🏆</span>
          <span>
            Practice with AI-powered mock interviews tailored to your role. Get instant feedback and boost your confidence.
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <div className="footer-column contact-column">
            <h4>Got a question or facing a problem? Let’s talk</h4>
            <div className="contact-buttons">
              <button>Contact Us</button>
              <button>Feedback</button>
            </div>
            <div className="contact-info">
              <div>Email: testanibhisaysnshok@gmail.com</div>
              <div>Phone: 9790078886</div>
            </div>
          </div>
          <div className="footer-column">
            <h5>Features</h5>
            <ul>
              <li>ATS</li>
              <li>Skill Gap</li>
              <li>Interview</li>
              <li>Guidance</li>
              <li>Resume</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Information</h5>
            <ul>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Mail</li>
              <li>Help</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">Copyright 2025</div>
      </footer>
    </div>
  );
}

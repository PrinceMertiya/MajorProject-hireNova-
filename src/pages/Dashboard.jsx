import React from "react";
import waveBg from "../images/rectangle-wave.png";
import resumeImg from "../images/resumeholder.png";
import DetailImg from "../images/Detail.png";
import resume from "../images/icons/resume.png";
import coverLetter from "../images/icons/coverletter.png";
import skillGap from "../images/icons/skillgap.png";
import careerGuidance from "../images/icons/carrer.png";
import interview from "../images/icons/interview.png";
import Ats from "../images/icons/speedometer.png";
import coverl from "../images/icons/coverl.png";

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
            <div className="hero-content">
              <div className="hero-left">
                <h1>Scan Your Resume.</h1>
                <p>
                  <strong>Strengthen Your Future.</strong>
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Learn More</button>
                </div>
              </div>
              <div className="hero-right">
                <img src={resumeImg} alt="Resume Holder" />
              </div>
              <div className="hero-detail">
                <img src={DetailImg} alt="Detailes" />
              </div>
            </div>
          </section>

        </div>


      </header>

      {/* Services Section */}
      <section className="services-section">
  <div className="service-card">
    <div className="service-card-icon">
      <div className="icon-wrapper">
        <img src={resume} alt="Resume icon" />
      </div>
    </div>
    <div>
      <h2>Resume & ATS Optimize</h2>
      <p className="texte">
        Craft job-ready, ATS-friendly resumes with real-time AI feedback and keyword enhancement.
      </p>
    </div>
  </div>
  <div className="service-card">
    <div className="service-card-icon">
      <div className="icon-wrapper">
        <img src={coverLetter} alt="Cover letter icon" />
      </div>
    </div>
    <div>
      <h2>Cover Letter</h2>
      <p className="texte">
        Generate personalized, editable cover letters tailored to the job you’re applying for.
      </p>
    </div>
  </div>
  <div className="service-card">
    <div className="service-card-icon">
      <div className="icon-wrapper">
        <img src={skillGap} alt="Skill gap icon" />
      </div>
    </div>
    <div>
      <h2>Skill Gap</h2>
      <p className="texte">
        Identify missing skills or tools by comparing your resume with job descriptions instantly.
      </p>
    </div>
  </div>
  <div className="service-card">
    <div className="service-card-icon">
      <div className="icon-wrapper">
        <img src={careerGuidance} alt="Career guidance icon" />
            </div>
          </div>
          <div>
            <h2>Career Guidance</h2>
            <p className="texte">
              Get smart role suggestions and learning paths based on your profile and market trends.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-icon">
            <div className="icon-wrapper">
              <img src={interview} alt="Interview preparation icon" />
            </div>
          </div>
          <div>
            <h2>Interview Preparation</h2>
            <p className="texte">
              Practice mock interviews with AI-generated questions and receive instant feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="action-cards">
      <button className="action-card">
        <span className="action-card-icon">
          <img src={Ats} alt="Ats Score" className = 'img'/>
        </span>
        <span>
          Scan your resume for ATS compatibility, keyword match, and formatting. Get instant AI feedback to improve and stand out.
        </span>
      </button>
      <button className="action-card">
        <span className="action-card-icon">
          <img src={coverl} alt="Cover letter" className = 'img'/>
        </span>
        <span>
          Generate a personalized cover letter from your resume and job description. Save time and apply with confidence.
        </span>
      </button>
      <button className="action-card">
        <span className="action-card-icon">
          <img src={interview} alt="Interview icon" className = 'img'/>
        </span>
        <span>
          Practice with AI-powered mock interviews tailored to your role. Get instant feedback and boost your confidence.
        </span>
      </button>
    </section>

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

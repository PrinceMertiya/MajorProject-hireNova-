import { FaArrowRight, FaEnvelope, FaUsers } from "react-icons/fa";
import Footer from '../components/footer.jsx';
import axios from "axios";
import uploadIcon from "../images/icons/upload-icon.png";
import Header from '../components/header.jsx';
import { useState } from "react";

const styles = {
  dashboardHeader: {
    backgroundColor: "#070606",
    padding: "20px 40px",
    position: "relative",
    zIndex: 10,
  },
  section: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "4rem 1rem",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
  },
  text: {
    fontSize: "1.5rem",
    maxWidth: "700px",
    margin: "0 auto 2rem",
    lineHeight: "1.6",
  },
  uploadImageBtn: {
    cursor: "pointer",
    display: "inline-block",
    borderRadius: "2rem",
    overflow: "hidden",
    width: "180px",
    height: "50px",
    boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
  },
  uploadImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  divider: {
    borderTop: "1px solid #333",
    margin: "3rem auto",
    maxWidth: "90%",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  card: {
    border: "1px solid #333",
    padding: "1.5rem",
    borderRadius: "1rem",
    width: "260px",
    minHeight: "160px",
    backgroundColor: "#0f0f0f",
    color: "#fff",
    textAlign: "left",
    position: "relative",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  arrow: {
    position: "absolute",
    right: "1rem",
    bottom: "1rem",
    fontSize: "1rem",
    color: "#aaa",
  },
  iframe: {
    width: "250px",
    height: "150px",
    border: "1px solid #444",
    borderRadius: "10px",
    marginTop: "1rem",
  },
  analysisBox: {
    marginTop: "1rem",
    background: "#222",
    color: "#fff",
    padding: "1rem",
    borderRadius: "10px",
    textAlign: "left",
  },
  analyseButton: {
    borderRadius: "2rem",
    background: "#4e3dfc",
    color: "#fff",
    padding: "0.75rem 2rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    marginTop: "1rem",
    display: "inline-block",
    transition: "opacity .25s ease",
  },
  disabledBtn: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

/* Job Description Input styles */
const jdStyles = {
  gradientBorder: {
    padding: "1.1px",
    borderRadius: "16px",
    background: "linear-gradient(90deg,  #8E94FD 55%,#D9D9D9 100%)",
    display: "inline-block",
    width: "100%",
    maxWidth: "520px",
    margin: "20px auto 10px",
    boxSizing: "border-box",
  },
  container: {
    background: "#111",
    borderRadius: "16px",
    padding: "18px 19px",
    minHeight: "70px",
    color: "#ccc",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
  },
  label: {
    fontFamily: "'Poppins', 'Inter', sans-serif",
    color: "#c8c8c8",
    fontSize: "1.08rem",
    marginBottom: "8px",
    letterSpacing: "0.01em",
    transition: "opacity 0.3s ease",
  },
  textarea: {
    width: "100%",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1.05rem",
    fontFamily: "'Poppins', 'Inter', sans-serif",
    resize: "vertical",
    outline: "none",
    overflowY: "auto",
    maxHeight: "140px",
    marginTop: "2px",
    scrollbarWidth: "thin",
  },
  error: {
    color: "#ff5c5c",
    marginTop: "8px",
    fontSize: "0.98rem",
  },
};

function JobDescriptionInput({ value, onChange, minLen = 40 }) {
  return (
    <div style={jdStyles.gradientBorder}>
      <div style={jdStyles.container}>
        {value.length === 0 && (
          <div style={jdStyles.label}>
            Job Description<span style={{ color: "#777" }}></span>
          </div>
        )}
        <textarea
          style={jdStyles.textarea}
          placeholder="Write here..."
          value={value}
          minLength={minLen}
          rows={3}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        {value.length > 0 && value.trim().length < minLen && (
          <div style={jdStyles.error}>Minimum {minLen} characters required.</div>
        )}
      </div>
    </div>
  );
}

const ResumeSection = () => {
  const [resume, setResume] = useState(null);
  const [preview, setPreview] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setPreview(URL.createObjectURL(file));
      setPreviewLoaded(false);
      setJobDesc("");
      setAnalysis("");
    }
  };

  const handleAnalyse = async () => {
    if (!resume) {
      alert("Please upload a resume first.");
      return;
    }
    if (!previewLoaded) {
      alert("Waiting for resume preview to load.");
      return;
    }
    if (!jobDesc.trim() || jobDesc.trim().length < 25) {
      alert("Please enter a job description with at least 25 characters.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDesc);

    try {
      setIsSubmitting(true);
      const res = await axios.post("http://localhost:5000/api/analyse", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAnalysis(res.data.analysis);
    } catch {
      setAnalysis("Error analyzing resume.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <header className="dashboard-header">
        <section style={styles.section}>
          <p style={styles.text}>
            Upload your resume to let our AI analyze, optimize, <br />
            and prepare it for recruiter success and ATS approval.
          </p>

          {!resume ? (
            <label style={styles.uploadImageBtn}>
              <img src={uploadIcon} alt="Upload Resume" style={styles.uploadImage} />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
          ) : (
            <>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                <div>
                  <p style={{ marginBottom: "6px" }}>Preview</p>
                  <iframe
                    src={preview}
                    style={styles.iframe}
                    title="Resume Preview"
                    onLoad={() => setPreviewLoaded(true)}
                  />
                  {!previewLoaded && (
                    <div style={{ fontSize: "12px", marginTop: "4px", color: "#aaa" }}>
                      Loading preview...
                    </div>
                  )}
                </div>

                {previewLoaded && (
                  <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <JobDescriptionInput value={jobDesc} onChange={setJobDesc} minLen={25} />
                    <button
                      onClick={handleAnalyse}
                      style={{
                        ...styles.analyseButton,
                        ...(isSubmitting || !previewLoaded || jobDesc.trim().length < 25
                          ? styles.disabledBtn
                          : {}),
                      }}
                      disabled={isSubmitting || !previewLoaded || jobDesc.trim().length < 25}
                    >
                      {isSubmitting ? "Analyzing..." : "Analyse"}
                    </button>
                  </div>
                )}
              </div>

              {analysis && (
                <div style={styles.analysisBox}>
                  <strong>Analysis Result:</strong>
                  <p>{analysis}</p>
                </div>
              )}
            </>
          )}

          <hr style={styles.divider} />

          <div style={styles.cardsContainer}>
            <div style={styles.card}>
              <FaEnvelope style={styles.icon} />
              <div style={styles.label}>Cover Letter Generator</div>
              <FaArrowRight style={styles.arrow} />
            </div>

            <div style={styles.card}>
              <FaUsers style={styles.icon} />
              <div style={styles.label}>Interview Preparation</div>
              <FaArrowRight style={styles.arrow} />
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </>
  );
};

export default ResumeSection;

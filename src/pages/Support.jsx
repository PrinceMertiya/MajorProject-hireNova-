import React from "react";

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalCard: {
    minWidth: 400,
    background:
      "radial-gradient(ellipse at center, #222 0%, #111 100%)",
    borderRadius: 18,
    boxShadow: "0 4px 48px 0 rgba(0, 0, 0, 0.45)",
    padding: "40px 32px 24px 32px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(68, 68, 68, 0.2)",
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    right: 24,
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 32,
    cursor: "pointer",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 28,
    marginTop: 5,
    textAlign: "center",
    letterSpacing: 1,
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    color: "#c9c9c9",
    fontSize: 15,
    marginBottom: 2,
  },
  input: {
    backgroundColor: "transparent",
    border: "1px solid #444",
    borderRadius: 7,
    padding: "10px 14px",
    fontSize: 16,
    color: "#fff",
    outline: "none",
    transition: "border 0.2s",
  },
  submit: {
    marginTop: 18,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#a78bfa",
    color: "#fff",
    padding: "10px 36px",
    borderRadius: 8,
    border: "none",
    fontWeight: 600,
    fontSize: 18,
    cursor: "pointer",
    transition: "background-color 0.2s",
    letterSpacing: 0.7,
    boxShadow: "0 2px 10px 0 rgba(140, 90, 240, 0.18)",
  },
  submitHover: {
    backgroundColor: "#7c3aed",
  },
};

const ContactUsModal = ({ onClose }) => {
  // To handle hover effect on the submit button
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        <button
          style={styles.closeBtn}
          onClick={onClose}
          aria-label="Close Contact Us modal"
        >
          &#10005;
        </button>
        <h2 style={styles.title}>Contact Us</h2>
        <form
          style={styles.form}
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            // Add your form submit logic here
            alert("Form submitted!");
          }}
        >
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name
            </label>
            <input
              style={styles.input}
              type="text"
              name="name"
              id="name"
              autoFocus
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>
              Phone
            </label>
            <input
              style={styles.input}
              type="tel"
              name="phone"
              id="phone"
            />
          </div>
          <button
            type="submit"
            style={{
              ...styles.submit,
              ...(isHovered ? styles.submitHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsModal;

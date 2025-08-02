import { HeartHandshake } from 'lucide-react';

const styles = {
  footer: {
  background: '#363636',
    color: '#fff',
    borderRadius: '40px 40px 0 0',
    margin: '30px auto 0 auto',       // Centers the footer horizontally
    padding: '0 32px',                // Equal left and right spacing (adjust as needed)
    position: 'relative',
    overflow: 'hidden',
    width: '97%',                     // Or use maxWidth for a capped width
    maxWidth: '1650px',
}
,
  wave: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '48px 48px 0 48px',
    minHeight: '320px',
  },
  left: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '16px',
  },
  talk: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
  },
  letsTalk: {
    fontSize: '1.25rem',
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  iconRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '1rem',
  },
  btnRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '1rem',
  },
  btn: {
    background: '#18181b',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 20px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    boxShadow: '0 2px 8px #0002',
    transition: 'background 0.2s',
  },
  btnSecondary: {
    background: '#363636',
    border: '1px solid #fff',
    color: '#fff',
  },
  contactInfo: {
    fontSize: '1rem',
    fontWeight: 500,
    marginTop: '1rem',
    marginBottom: '0.5rem',
  },
  email: {
    fontSize: '0.95rem',
    color: '#fff',
    marginBottom: '0.2rem',
  },
  phone: {
    fontSize: '0.95rem',
    color: '#fff',
    marginBottom: '0.2rem',
  },
  right: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '80px',
  },
  col: {
    minWidth: '120px',
  },
  colTitle: {
    fontWeight: 600,
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  colList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  colItem: {
    marginBottom: '0.7rem',
    color: '#fff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  copyright: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '32px 0 16px 0',
    letterSpacing: '1px',
    background: 'transparent',
  },
};

const features = ['ATS', 'Skill Gap', 'Interview', 'Guidance', 'Resume'];
const info = ['Contact Us', 'Feedback', 'Mail', 'Help', 'Support'];

const Footer = () => (
  <footer style={styles.footer}>
    {/* SVG wave background */}
    <svg style={styles.wave} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M0,256L80,240C160,224,320,192,480,160C640,128,800,96,960,128C1120,160,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        fill="#232326"
        opacity="0.95"
      />
    </svg>
    <div style={styles.content}>
      {/* Left Section */}
      <div style={styles.left}>
        <div style={styles.talk}>Got a question or facing a problem?</div>
        <div style={styles.letsTalk}>Let’s talk</div>
        <div style={styles.iconRow}>
          <HeartHandshake size={40} color="#fff" style={{ background: '#232326', borderRadius: '50%', padding: '6px' }} />
        </div>
        <div style={styles.btnRow}>
          <button style={styles.btn}>Contact Us</button>
          <button style={{ ...styles.btn, ...styles.btnSecondary }}>Feedback</button>
        </div>
        <div style={styles.contactInfo}>
          <div style={styles.email}>Gmail : solankhiboyashok@gmail.com</div>
          <div style={styles.phone}>Phone :- 9799078886</div>
        </div>
      </div>
      {/* Right Section */}
      <div style={styles.right}>
        <div style={styles.col}>
          <div style={styles.colTitle}>Features</div>
          <ul style={styles.colList}>
            {features.map((item) => (
              <li key={item} style={styles.colItem}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={styles.col}>
          <div style={styles.colTitle}>Information</div>
          <ul style={styles.colList}>
            {info.map((item) => (
              <li key={item} style={styles.colItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div style={styles.copyright}>Copyright 2025</div>
  </footer>
);

export default Footer;
export default function Home() {
  return (
    <div className="container">
      {/* Profile */}
      <div className="profile">
        <div className="profile-img-container">
          <img
            src="/assets/profile.jpg"
            alt="Profile Picture"
            className="profile-img"
          />
        </div>
        <h1 className="username">OurStory Digital</h1>
        <p className="bio">
          <strong>Premium Digital Invitation Studio</strong> ✨<br />
          Mengubah momen spesial Anda menjadi pengalaman digital yang abadi.<br />
          <span style={{ opacity: 0.85, fontSize: '0.95rem' }}>Pernikahan • Ulang Tahun • Aqiqah • Khitan</span><br />
          <br />
          <em>"Elegan, Berkelas, & Penuh Makna"</em>
        </p>
      </div>

      {/* Main Catalog Links */}
      <h3 style={{ color: '#2d3436', marginBottom: '15px', fontWeight: '600', fontSize: '1.1rem' }}>✨ Katalog Undangan</h3>
      <div className="links">
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-solid fa-heart" style={{ color: '#ff7675' }}></i>
          Undangan Pernikahan
        </a>
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-solid fa-baby" style={{ color: '#74b9ff' }}></i>
          Undangan Aqiqah
        </a>
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-solid fa-cake-candles" style={{ color: '#ffeaa7' }}></i>
          Undangan Birthday
        </a>
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-solid fa-envelope-open-text" style={{ color: '#55efc4' }}></i>
          Undangan Khitan
        </a>
      </div>

      {/* Social Links Divider */}
      <div style={{ margin: '30px 0 15px', borderTop: '1px solid rgba(0,0,0,0.1)', width: '80%', display: 'inline-block' }}></div>

      <h3 style={{ color: '#2d3436', marginBottom: '20px', fontWeight: '600', fontSize: '1.1rem' }}>📱 Social & Contact</h3>

      <p className="wa-instruction">
        Pesan? Klik icon WA 👇
      </p>

      {/* Socials (Horizontal Icons) */}
      <div className="socials">
        <a href="#" className="social-icon" target="_blank" aria-label="TikTok">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="#" className="social-icon" target="_blank" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="social-icon" target="_blank" aria-label="WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

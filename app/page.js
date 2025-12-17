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
        <h1 className="username">Alex Creative</h1>
        <p className="bio">
          Digital Artist & Designer 🎨<br />
          Creating visual experiences that matter.
        </p>
      </div>

      {/* Links */}
      <div className="links">
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-brands fa-tiktok"></i>
          TikTok
        </a>
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-brands fa-instagram"></i>
          Instagram
        </a>
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
          WhatsApp
        </a>
        <a href="#" className="link-btn" target="_blank">
          <i className="fa-solid fa-globe"></i>
          Website
        </a>
      </div>

      {/* Socials */}
      <div className="socials">
        <a href="#" className="social-icon">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner-container">
      <div className="content-wrapper">
        <img 
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8bb21ed-434e-4d55-b5d0-410fe988fb30/dgim7sw-c9d0916f-a0d4-4e70-bbd3-1508050e3699.png/v1/fill/w_670,h_1192/satoru_gojo_render_by_norm4nsz_dgim7sw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzg0MCIsInBhdGgiOiJcL2ZcL2U4YmIyMWVkLTQzNGUtNGQ1NS1iNWQwLTQxMGZlOTg4ZmIzMFwvZGdpbTdzdy1jOWQwOTE2Zi1hMGQ0LTRlNzAtYmJkMy0xNTA4MDUwZTM2OTkucG5nIiwid2lkdGgiOiI8PTIxNjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4YZRWr95sCJVqEy9G9mreNmerHzR5rcgcjIb6DILQIQ" 
          alt="Character" 
          className="character-image" 
        />
        <div className="contact-text-content">
          <a href="https://wa.me/6285643025633" target="_blank" rel="noopener noreferrer" className="contact-link">
            <h2 className="main-text">
              <span className="text-contact">CONTACT</span>
              <span className="text-me">ME</span>
            </h2>
          </a>
          <p className="tagline">Let's build something amazing. Or you can keep dreaming.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner; 
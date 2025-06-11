import './Banner.css';

const Banner = ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd)` }}>
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
        {ctaText && (
          <a href={ctaLink} className="banner-button">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

// Пропсы по умолчанию
Banner.defaultProps = {
  ctaText: '',
  ctaLink: '#'
};

export default Banner;
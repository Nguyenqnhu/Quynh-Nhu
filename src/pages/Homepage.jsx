import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import YouTube from "react-youtube";
import styles from "./HomePage.module.css";
import kongImage from "../assets/image/kong.jpg";
import squidgameImage from "../assets/image/squidgame.jpg";
import jurassicPark from "../assets/image/jurassic.webp";
import mai from "../assets/image/mai.jpg";
import nuhonbacty from "../assets/image/nuhonbacty.jpg";
import bonbaothu from "../assets/image/bonbaothu.jpg";
import banbanbebe from "../assets/image/friendrivalry.jpg";
import squidgame from "../assets/image/sqidgameee.jpg";
import minion from "../assets/image/minion.jpg";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Rampage",
      duration: "1h47min",
      rating: 5,
      genre: "Action/Adventure",
      description:
        "When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.",
      image: kongImage,
    },
    {
      title: "Squid Game",
      duration: "2h47min",
      rating: 4,
      genre: "Action/Horror",
      description:
        "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
      image: squidgameImage,
    },
    {
      title: "Bộ tứ báo thủ",
      duration: "2h5min",
      rating: 3.5,
      genre: "Comedy/Love",
      description:
        "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
      image: bonbaothu,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // YouTube Trailer Config
  const videoId = "coOKvrsmQiI"; // Chỉ chứa ID video
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // 1: tự động phát, 0: không
    },
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.heroSlide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.darkOverlay}></div>
            {index === currentSlide && (
              <div className={styles.heroContent}>
                <div className={styles.movieInfo}>
                  <div className={styles.duration}>
                    Duration: {slide.duration}
                  </div>
                  <div className={styles.rating}>
                    {"★".repeat(slide.rating)}
                    {"☆".repeat(5 - slide.rating)}
                  </div>
                  <div className={styles.genre}>{slide.genre}</div>
                </div>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className={styles.heroButtons}>
                  <button className={styles.viewTrailerBtn}>
                    View trailer
                  </button>
                  <button className={styles.addFilmBtn}>+ Add film</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      {/* Genre Navigation */}
      <nav className={styles.genreNav}>
        <a href="#action">Action</a>
        <a href="#horror">Horror</a>
        <a href="#thriller">Thriller</a>
        <a href="#family">Family</a>
        <a href="#adventure">Adventure</a>
        <a href="#fiction">Fiction</a>
        <a href="#cartoon">Cartoon</a>
        <a href="#comedy">Comedy</a>
      </nav>
      {/* Movie Grid */}
      <section className={styles.movieGrid}>
        <div className={styles.movieContainer}>
          <div className={styles.movieCard}>
            <img src={jurassicPark || "/placeholder.svg"} alt="Jurassic Park" />
            <h3>Jurassic Park</h3>
            <span>2020</span>
          </div>
          <div className={styles.movieCard}>
            <img src={mai || "/placeholder.svg"} alt="Mai" />
            <h3>Mai</h3>
            <span>2024</span>
          </div>
          <div className={styles.movieCard}>
            <img src={nuhonbacty || "/placeholder.svg"} alt="Nụ Hôn Bác Tỷ" />
            <h3>Nụ Hôn Bạc Tỷ</h3>
            <span>2025</span>
          </div>
          <div className={styles.movieCard}>
            <img src={banbanbebe || "/placeholder.svg"} alt="Bạn Bạn bè bè" />
            <h3>Bạn Bạn Bè Bè</h3>
            <span>2025</span>
          </div>
          <div className={styles.movieCard}>
            <img src={squidgame || "/placeholder.svg"} alt="Squidgame" />
            <h3>Squidgame</h3>
            <span>2021</span>
          </div>
          <div className={styles.movieCard}>
            <img src={minion || "/placeholder.svg"} alt="Minion" />
            <h3>Minion</h3>
            <span>2015</span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className={styles.searchSection}>
        <h2>Movie</h2>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search movie you want to watch" />
        </div>
        <div className={styles.sortBy}>
          <span>Sort by:</span>3
        </div>
      </section>

      {/* Youtube Trailer */}
      <div className={styles.trailerSection}>
        <h2>Trailer</h2>
        <YouTube videoId={videoId} opts={opts} />
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Xí Nề</div>
          <div className={styles.footerLinks}>
            <a href="#corporate">Corporate</a>
            <a href="#sitemap">Sitemap</a>
            <a href="#subscribe">Subscribe</a>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2023 Xí Nề Cinema. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

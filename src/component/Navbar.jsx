import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import file CSS

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}> Xí Nề</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/movies">Danh sách phim</Link>
        </li>
        <li>
          <Link to="/booking">Đặt vé</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
        <li>
          <Link to="/lich">Lịch chiếu</Link>
        </li>
      </ul>
      <div className={styles.authButtons}>
        <a href="/login">
          <button className={styles.loginBtn}>Đăng nhập</button>
        </a>
        <a href="/register">
          <button className={styles.registerBtn}>Đăng kí</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

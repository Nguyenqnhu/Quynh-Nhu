import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log("Đăng nhập với:", formData);

    // Hiển thị alert
    setShowAlert(true);

    // Reset form sau khi đăng nhập
    setFormData({ username: "", password: "" });

    // Tự động ẩn alert sau 3 giây
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      {showAlert && (
        <div className={styles.alert}>
          <span className={styles.closebtn} onClick={() => setShowAlert(false)}>
            &times;
          </span>
          <strong>Login successfully!</strong> Welcome!
        </div>
      )}
      <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

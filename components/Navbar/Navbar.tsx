import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
type Props = {};

const Navbar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="/" className={styles.wrapperImg}>
            <img src="ferrari-logo-750x1100.png" />
            <img
              className={styles.textLogo}
              src="ferrari-text-logo-1600x400 (1).png"
            />
          </a>
          <div className={styles.list}>
            <div className={styles.item}>
              <a href="/design">Design</a>
            </div>
            <div className={styles.item}>
              <a href="/highlights">Highlights</a>
            </div>
            <div className={styles.item}>
              <a href="/performance">Performance</a>
            </div>
            <div className={styles.item}>
              <a href="/configure">Configure</a>
            </div>
          </div>
          <div className="button">CONTACT</div>
          <div>
            {currentTheme === "dark" ? (
              <button onClick={() => setTheme("light")}>☀️</button>
            ) : (
              <button onClick={() => setTheme("dark")}>🌙</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

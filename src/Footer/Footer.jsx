import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer_block}>
      <div className={styles.footer_container}>
        <div className={styles.footer_nav}>
          <div className={styles.footer_wrapper}>
            <div className={styles.footer_blocks}>
              <div className={styles.footer_header_title}>
                <h2 className={styles.footer_header}>Мы в соцсетях</h2>
              </div>
              <ul className={styles.footer_list}>
                <li className={styles.footer_item}>
                  <a
                    href="https://wa.me/+79289179869"
                    className={styles.footer_item_href}
                  >
                    Whatsapp
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a
                    href="https://t.me/+79289179869"
                    className={styles.footer_item_href}
                  >
                    Telegram
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a
                    href="https://www.instagram.com/mus1i.ms/?next=%2F"
                    className={styles.footer_item_href}
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_blocks}>
              <div className={styles.footer_header_title}>
                <h2 className={styles.footer_header}>Покупателям</h2>
              </div>
              <ul className={styles.footer_list}>
                <li className={styles.footer_item}>Доставка и оплата</li>
                <li className={styles.footer_item}>Возврат</li>
                <li className={styles.footer_item}>Оптовым покупателя</li>
              </ul>
            </div>
            <div className={styles.footer_blocks}>
              <div className={styles.footer_header_title}>
                <h2 className={styles.footer_header}>Адрес магазина</h2>
              </div>
              <ul className={styles.footer_list}>
                <li className={styles.footer_item}>
                  ст.Троицкая,ул.Шоссейная 167
                </li>
                <li className={styles.footer_item}>
                  <Link to="/geo" className={styles.footer_item_href}>
                    геолокация
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

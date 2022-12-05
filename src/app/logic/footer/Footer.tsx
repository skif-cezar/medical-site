import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/footer/Footer.module.scss";

/**
 * Footer section
 */
export const Footer: React.FC = () => {
  const FOOTER_STYLES = clsx(styles.footer);
  const CONTAINER_STYLES = clsx(styles.footer__container);
  const PHONE_STYLES = clsx(styles.footer__phone);
  const ADRESS_STYLES = clsx(styles.footer__adress);
  const COMPANY_STYLES = clsx(styles.footer__company);

  return (
    <footer className={FOOTER_STYLES}>
      <div className={CONTAINER_STYLES}>
        <address className={PHONE_STYLES}>
          <a href="tel:+79818574624">+7 (981) 857-46-24</a>
        </address>
        <address className={ADRESS_STYLES}>г. Санкт-петербург, ул. Большая Конюшенная, 19</address>
        <div className={COMPANY_STYLES}>ИП Королёва А.А.</div>
      </div>
    </footer>
  );
};

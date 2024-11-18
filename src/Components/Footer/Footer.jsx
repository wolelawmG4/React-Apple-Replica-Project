import React, { useState } from "react";
import flag from "../../commonResource/images/icons/16.png";
import "./Footer.css";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade‑in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              {" "}
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms</a> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3 onClick={() => toggleSection("shop")} className="toggle-header">
              Shop and Learn <span>{isOpen.shop ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.shop ? "open" : ""}`}>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">HomePod</a>
              </li>
              <li>
                <a href="#">iPod touch</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3
              onClick={() => toggleSection("services")}
              className="toggle-header"
            >
              Services <span>{isOpen.services ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.services ? "open" : ""}`}>
              <li>
                <a href="#">Apple Music</a>
              </li>
              <li>
                <a href="#">Apple News+</a>
              </li>
              <li>
                <a href="#">Apple TV+</a>
              </li>
              <li>
                <a href="#">Apple Arcade</a>
              </li>
              <li>
                <a href="#">Apple Card</a>
              </li>
              <li>
                <a href="#">iCloud</a>
              </li>
            </ul>

            <h3
              onClick={() => toggleSection("account")}
              className="toggle-header"
            >
              Account <span>{isOpen.account ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.account ? "open" : ""}`}>
              <li>
                <a href="#">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3
              onClick={() => toggleSection("store")}
              className="toggle-header"
            >
              Apple Store <span>{isOpen.store ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.store ? "open" : ""}`}>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
              <li>
                <a href="#">Refurbished and Clearance</a>
              </li>
              <li>
                <a href="#">Financing</a>
              </li>
              <li>
                <a href="#">Apple Trade In</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shopping Help</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3
              onClick={() => toggleSection("business")}
              className="toggle-header"
            >
              For Business <span>{isOpen.business ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.business ? "open" : ""}`}>
              <li>
                <a href="#">Apple and Business</a>
              </li>
              <li>
                <a href="#">Shop for Business</a>
              </li>
            </ul>

            <h3
              onClick={() => toggleSection("education")}
              className="toggle-header"
            >
              For Education <span>{isOpen.education ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.education ? "open" : ""}`}>
              <li>
                <a href="#">Apple and Education</a>
              </li>
              <li>
                <a href="#">Shop for College</a>
              </li>
            </ul>

            <h3
              onClick={() => toggleSection("healthcare")}
              className="toggle-header"
            >
              For Healthcare <span>{isOpen.healthcare ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.healthcare ? "open" : ""}`}>
              <li>
                <a href="#">Healthcare Solutions</a>
              </li>
            </ul>

            <h3
              onClick={() => toggleSection("government")}
              className="toggle-header"
            >
              For Government <span>{isOpen.government ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.government ? "open" : ""}`}>
              <li>
                <a href="#">Apple and Government</a>
              </li>
              <li>
                <a href="#">Shop for Government</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3
              onClick={() => toggleSection("values")}
              className="toggle-header"
            >
              Apple Values <span>{isOpen.values ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.values ? "open" : ""}`}>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
            </ul>

            <h3
              onClick={() => toggleSection("about")}
              className="toggle-header"
            >
              About Apple <span>{isOpen.about ? "X" : "+"}</span>
            </h3>
            <ul className={`links-list ${isOpen.about ? "open" : ""}`}>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you.
        </div>
        <div className="copyright-wrapper">
          <div className="copyright">
            <p>&copy; 2024 Apple Inc. All rights reserved.</p>
          </div>
          <div className="footer-links-terms">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-country">
          <div className="flag-wrapper">
            <img src={flag} alt="flag" />
          </div>
          <div className="footer-country-name">
            <a href="#">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

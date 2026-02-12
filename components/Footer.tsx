import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Column 1: Company Info */}
                    <div className={styles.column}>
                        <h3>Plywood Stores</h3>
                        <p>
                            Your trusted supplier for premium plywood and interior materials. We deal in top brands like Century, Greenply, Merino, and more.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div className={styles.column}>
                        <h4>Categories</h4>
                        <ul className={styles.links}>
                            <li><Link href="/plywood">Plywood</Link></li>
                            <li><Link href="/laminates">Laminates</Link></li>
                            <li><Link href="/mdf">MDF / HDHMR</Link></li>
                            <li><Link href="/hardware">Hardware</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className={styles.column}>
                        <h4>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span>📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <span>📧</span>
                                <span>info@plywoodstores.com</span>
                            </li>
                            <li>
                                <span>📍</span>
                                <span>123, Furniture Market, <br />New Delhi, India - 110015</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map Embed (Placeholder) */}
                <div className={styles.mapPlaceholder}>
                    <span>Google Map Embed Placeholder</span>
                </div>

                {/* Bottom Strip */}
                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} Plywood Stores. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

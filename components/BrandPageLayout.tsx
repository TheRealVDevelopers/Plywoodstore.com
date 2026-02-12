import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND_DATA } from '@/data/brands';
import InquiryCTA from '@/components/InquiryCTA';
import VideoModal from '@/components/VideoModal';
import styles from './BrandPageLayout.module.css';

interface BrandPageLayoutProps {
    brandId: string;
}

export default function BrandPageLayout({ brandId }: BrandPageLayoutProps) {
    const brand = BRAND_DATA[brandId];

    if (!brand) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Brand Not Found</h1>
                <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <>
            {/* Section 1: Brand Hero */}
            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${brand.heroImage})` }}
            >
                <div className={styles.overlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    {brand.logo ? (
                        <Image
                            src={brand.logo}
                            alt={`${brand.name} Logo`}
                            width={200}
                            height={100}
                            className={styles.brandLogo}
                        />
                    ) : (
                        // Fallback text logo if image missing
                        null
                    )}
                    <h1 className={styles.brandName}>{brand.name}</h1>
                    <p className={styles.tagline}>{brand.tagline}</p>
                </div>
            </section>

            {/* Section 2: About the Brand */}
            <section className={styles.aboutSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>About {brand.name}</h2>
                    <p className={styles.description}>{brand.description}</p>
                </div>
            </section>

            {/* Section 3: Product Types Offered */}
            <section className="section-padding bg-light-grey">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Product Range</h2>
                    <div className={styles.productsGrid}>
                        {brand.productTypes.map((product, index) => (
                            <div key={index} className={styles.productCard}>
                                <div className="relative h-[200px] w-full bg-gray-200">
                                    {product.image && (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    )}
                                </div>
                                <div className={styles.productContent}>
                                    <h3 className={styles.productTitle}>{product.title}</h3>
                                    <p className={styles.productDesc}>{product.description}</p>
                                    {product.application && (
                                        <span className={styles.applicationTag}>
                                            Uses: {product.application}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Applications Section */}
            <section className="section-padding">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Common Applications</h2>
                    <div className={styles.appGrid}>
                        {brand.applications.map((app, index) => (
                            <div key={index} className={styles.appItem}>
                                <div className={styles.appIcon}>{app.icon}</div>
                                <span className={styles.appName}>{app.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Brand Videos */}
            {brand.videos && brand.videos.length > 0 && (
                <section className="section-padding bg-dark-blue">
                    <div className="container">
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Product Highlights</h2>
                        <div className="max-w-4xl mx-auto">
                            <VideoModal videos={brand.videos.map(v => v.videoId)} />
                        </div>
                    </div>
                </section>
            )}

            {/* Section 6: Inquiry CTA */}
            <InquiryCTA brandName={brand.name} />
        </>
    );
}

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Plywood Stores | Get a Quote',
    description: 'Contact us for premium plywood, laminates, and hardware. Reach us at +91 98765 43210 or visit our store in New Delhi.',
};

export default function ContactPage() {
    return (
        <>
            <section className="bg-light-grey py-16">
                <div className="container text-center">
                    <h1 className="text-4xl font-bold text-dark-blue mb-4">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about our products or need a quote? Reach out to us using the form below or visit our store.
                    </p>
                </div>
            </section>

            <section className="section-padding container">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-dark-blue mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                                        placeholder="+91..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                                    placeholder="I'm interested in..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full btn btn-primary py-3 font-bold text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-dark-blue mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-primary-blue flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-blue">Visit Our Store</h4>
                                        <p className="text-gray-600">
                                            123, Furniture Market, <br />
                                            Kirti Nagar, New Delhi, <br />
                                            India - 110015
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-primary-blue flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-blue">Call Us</h4>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 11 2345 6789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-primary-blue flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-blue">Email Us</h4>
                                        <p className="text-gray-600">info@plywoodstores.com</p>
                                        <p className="text-gray-600">sales@plywoodstores.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-primary-blue flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-blue">Opening Hours</h4>
                                        <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder - In production use an iframe from Google Maps */}
                        <div className="h-[300px] bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                            <span className="text-gray-500 font-medium">Google Map Embed</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

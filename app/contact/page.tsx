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
            <section className="bg-[#F7F4EF] py-16">
                <div className="container text-center">
                    <h1 className="text-4xl font-bold text-[#0D0D0D] mb-4 font-heading">Contact Us</h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto">
                        Have questions about our products or need a quote? Reach out to us using the form below or visit our store.
                    </p>
                </div>
            </section>

            <section className="section-padding container">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-card border border-[#E8E4DE]">
                        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6 font-heading">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:ring-2 focus:ring-[#C45C3F] focus:border-transparent outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:ring-2 focus:ring-[#C45C3F] focus:border-transparent outline-none transition"
                                        placeholder="+91..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:ring-2 focus:ring-[#C45C3F] focus:border-transparent outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:ring-2 focus:ring-[#C45C3F] focus:border-transparent outline-none transition"
                                    placeholder="I'm interested in..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full btn btn-cta py-3 font-bold text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6 font-heading">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#F7F4EF] rounded-full flex items-center justify-center text-[#C45C3F] flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D0D0D]">Visit Our Store</h4>
                                        <p className="text-[#6B6B6B]">
                                            123, Furniture Market, <br />
                                            Kirti Nagar, New Delhi, <br />
                                            India - 110015
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#F7F4EF] rounded-full flex items-center justify-center text-[#C45C3F] flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D0D0D]">Call Us</h4>
                                        <p className="text-[#6B6B6B]">+91 98765 43210</p>
                                        <p className="text-[#6B6B6B]">+91 11 2345 6789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#F7F4EF] rounded-full flex items-center justify-center text-[#C45C3F] flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D0D0D]">Email Us</h4>
                                        <p className="text-[#6B6B6B]">info@plywoodstores.com</p>
                                        <p className="text-[#6B6B6B]">sales@plywoodstores.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#F7F4EF] rounded-full flex items-center justify-center text-[#C45C3F] flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D0D0D]">Opening Hours</h4>
                                        <p className="text-[#6B6B6B]">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                        <p className="text-[#6B6B6B]">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder - In production use an iframe from Google Maps */}
                        <div className="h-[300px] bg-[#E8E4DE] rounded-xl flex items-center justify-center border border-[#E8E4DE]">
                            <span className="text-gray-500 font-medium">Google Map Embed</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

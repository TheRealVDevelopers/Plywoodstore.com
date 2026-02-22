import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Big Heading */}
      <section className="bg-[#F8FAFC] py-20 -mt-[60px] pt-[80px]">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#081F44] mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-[#3B4A6B] max-w-2xl mx-auto">
            Have questions about our products or need a quote? Reach out using the form below or visit our store.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-[#E5E7EB]">
                <h2 className="text-3xl font-bold text-[#081F44] mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-[#081F44] mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#A4161A] focus:border-[#A4161A] outline-none transition text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-[#081F44] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-5 py-4 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#A4161A] focus:border-[#A4161A] outline-none transition text-lg"
                        placeholder="+91..."
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-[#081F44] mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-5 py-4 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#A4161A] focus:border-[#A4161A] outline-none transition text-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-[#081F44] mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-4 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#A4161A] focus:border-[#A4161A] outline-none transition text-lg"
                      placeholder="I'm interested in..."
                    />
                  </div>
                  <button type="submit" className="w-full px-10 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#081F44] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-xl border-2 border-[#E5E7EB]">
                  <div className="w-14 h-14 bg-[#A4161A] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081F44] text-lg mb-1">Visit Our Store</h4>
                    <p className="text-[#3B4A6B] text-base">
                      49/6, 3rd Cross, Rajiv Gandhi Nagar,<br />HSR Layout, Hosur Rd, Bommanahalli,<br />Bengaluru, Karnataka 560068
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-xl border-2 border-[#E5E7EB]">
                  <div className="w-14 h-14 bg-[#A4161A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081F44] text-lg mb-1">Call</h4>
                    <p className="text-[#3B4A6B] text-base">+91 98321 69125</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-xl border-2 border-[#E5E7EB]">
                  <div className="w-14 h-14 bg-[#A4161A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081F44] text-lg mb-1">Opening Hours</h4>
                    <p className="text-[#3B4A6B] text-base">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-[#3B4A6B] text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919832169125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#20BD5A] transition-all"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map - Large */}
      <section className="pb-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#081F44] mb-8">Find Us</h2>
          <div className="h-[450px] w-full rounded-2xl overflow-hidden border-2 border-[#E5E7EB] bg-[#E5E7EB]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.024!2d77.6409!3d12.9082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f0c5e1c6e7%3A0x2a6c3a4e5b8d9f0a!2s49%2F6%2C%203rd%20Cross%2C%20Rajiv%20Gandhi%20Nagar%2C%20HSR%20Layout%2C%20Bommanahalli%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plywood Stores Location"
            />
          </div>
        </div>
      </section>

      {/* Bold CTA Block */}
      <section className="py-20 bg-[#081F44] text-white text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">Get expert advice and best market rates. Call us or visit our store in HSR Layout, Bengaluru.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+919832169125" className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-[#A4161A] text-white font-bold text-lg rounded-lg hover:bg-[#C41E3A] transition-all">
              <Phone className="w-6 h-6" />
              Call Now: +91 98321 69125
            </a>
            <Link to="/plywood" className="inline-flex items-center justify-center gap-2 px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#081F44] transition-all">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

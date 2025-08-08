import { Card, CardContent } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bean There</h3>
            <p className="text-cream/80 leading-relaxed">
              Your neighborhood cafe where exceptional coffee meets warm hospitality. 
              Come experience the perfect blend of comfort and flavor.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-sm font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-cream/80 hover:text-warm-orange transition-colors cursor-pointer">Our Menu</a></li>
              <li><a href="#about" className="text-cream/80 hover:text-warm-orange transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#contact" className="text-cream/80 hover:text-warm-orange transition-colors cursor-pointer">Contact</a></li>
              <li><a href="#catering" className="text-cream/80 hover:text-warm-orange transition-colors cursor-pointer">Catering</a></li>
              <li><a href="#events" className="text-cream/80 hover:text-warm-orange transition-colors cursor-pointer">Private Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Visit Us</h4>
            <div className="space-y-3 text-cream/80">
              <div>
                <p className="font-medium text-cream">Address</p>
                <p>123 Coffee Street<br />Downtown District<br />City, State 12345</p>
              </div>
              <div>
                <p className="font-medium text-cream">Hours</p>
                <p>Mon-Fri: 6:30 AM - 8:00 PM<br />Sat-Sun: 7:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-cream">Contact</p>
                <p>(555) 123-BEAN<br />hello@beanthere.cafe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2024 Bean There Cafe & Roastery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-cream/60 hover:text-warm-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-cream/60 hover:text-warm-orange text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
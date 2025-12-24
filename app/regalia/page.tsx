import { ShoppingBag, Shirt, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function RegaliaPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Shirt className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Club Regalia</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Show your pride in Sun Parlour Boat Club with official club clothing and accessories.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="heading-lg">SPBC Boat Club Clothing and Accessories</h2>
              <p className="text-body max-w-2xl mx-auto">
                Represent Sun Parlour Boat Club in style with our selection of quality apparel and accessories 
                featuring the club logo and colors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Available Items
                  </h3>
                </div>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Polo shirts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>T-shirts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Sweatshirts and hoodies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Hats and caps</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Jackets and windbreakers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Accessories and more</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Shirt className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Quality & Style
                  </h3>
                </div>
                <p className="text-body">
                  All regalia items feature the official Sun Parlour Boat Club logo and are available in various 
                  sizes and colors. Perfect for club events, cruises, or everyday wear.
                </p>
                <p className="text-body">
                  Show your club pride and help promote SPBC wherever you go!
                </p>
              </div>
            </div>

            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-nautical-navy-900 text-center">
                  How to Order
                </h3>
                <p className="text-body text-center max-w-2xl mx-auto">
                  To order club regalia or inquire about available items, sizes, and pricing, 
                  please contact one of our club officers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <p className="font-semibold text-nautical-navy-900">Contact Options:</p>
                    <div className="space-y-2 text-body">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-nautical-ocean-500" />
                        <span>Email a club officer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-nautical-ocean-500" />
                        <span>Call a club officer</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-nautical-navy-900">Order Information:</p>
                    <ul className="space-y-2 text-body text-sm">
                      <li>• Specify item type and size</li>
                      <li>• Choose your preferred color</li>
                      <li>• Inquire about pricing</li>
                      <li>• Arrange pickup or delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                Questions About Regalia?
              </h3>
              <p className="text-body max-w-2xl mx-auto">
                Our club officers are happy to help you find the perfect regalia items. 
                Contact information for all officers is available on our Directors page.
              </p>
              <div className="pt-4">
                <Link href="/directors" className="btn-primary">
                  View Contact Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nautical-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center space-y-6">
              <div className="flex items-center justify-center">
                <Shirt className="w-16 h-16 text-nautical-gold-600" />
              </div>
              <h2 className="heading-md">Wear Your Club Pride</h2>
              <p className="text-body max-w-2xl mx-auto">
                Club regalia makes great gifts for fellow members and helps build camaraderie at events. 
                Order yours today and show your SPBC spirit!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

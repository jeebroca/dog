import { Shield, Check } from 'lucide-react';

export default function PricingInfo() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform ensures fair and transparent pricing for all breeding services
          </p>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Pricing Works
              </h3>
              <ul className="space-y-4">
                {[
                  'Owners set their own breeding service prices',
                  'All prices are verified against market rates',
                  'Transparent fee structure with no hidden costs',
                  'Secure payment processing through our platform',
                  'Money-back guarantee for unsuccessful breeding attempts'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Price Protection
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  All breeding services on our platform are backed by our comprehensive price protection:
                </p>
                <ul className="space-y-3">
                  {[
                    'Price matching for verified breeders',
                    'Detailed health screening included',
                    'Genetic testing verification',
                    'Professional breeding consultation',
                    'Post-breeding support services'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
                    Learn More About Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
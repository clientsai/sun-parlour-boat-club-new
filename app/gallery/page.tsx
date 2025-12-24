import Link from 'next/link';
import { Camera, Upload, AlertCircle, ExternalLink } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-nautical-navy-900 to-nautical-navy-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nautical-gold-400/20 backdrop-blur-sm mb-4">
              <Camera className="w-8 h-8 text-nautical-gold-400" />
            </div>
            <h1 className="heading-xl text-white">Photo Gallery</h1>
            <p className="text-xl text-nautical-navy-100 leading-relaxed">
              Explore memories from our events, cruises, and social gatherings. 
              An important historical record of our club's activities and community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card p-8 bg-nautical-ocean-50 border-nautical-ocean-200">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-nautical-ocean-600 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-nautical-navy-900">
                    Important Notice
                  </h2>
                  <p className="text-body">
                    User registration to the Photo Gallery has been suspended indefinitely due to ongoing 
                    spamming issues (50 to 100 false registrations per day).
                  </p>
                  <p className="text-body">
                    <strong>New Club Members</strong> wishing to register and upload photos should contact 
                    the Web Master to create an account for them.
                  </p>
                  <p className="text-body">
                    <strong>Existing user accounts</strong> are still accessible and can continue to upload photos.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="heading-lg">Access Photo Gallery</h2>
              <p className="text-body max-w-2xl mx-auto">
                View our collection of photos from club events, cruises, and activities. 
                This is an important historical record for our club.
              </p>
              <div className="pt-4">
                <a
                  href="http://x.sunparlourboatclub.com/cpg1.3.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Camera className="w-5 h-5" />
                  <span>View Photo Gallery</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Upload className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Upload Your Photos
                  </h3>
                </div>
                <p className="text-body">
                  Club members are encouraged to upload their photos from events and activities. 
                  This helps preserve our club's history and allows everyone to relive great memories.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="http://sunparlourboatclub.com/images/ImagesForGallery.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    Resizing Your Photos For The Web →
                  </a>
                  <br />
                  <a
                    href="http://sunparlourboatclub.com/Photoinfo/Upload_Instructions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    Upload Instructions →
                  </a>
                </div>
              </div>

              <div className="card p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Camera className="w-8 h-8 text-nautical-ocean-600" />
                  <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                    Need an Account?
                  </h3>
                </div>
                <p className="text-body">
                  New members who wish to upload photos need to contact the Web Master to have an account created.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-nautical-navy-900">Web Master:</span>
                    <span className="text-nautical-navy-700">P/C Doug Potier</span>
                  </div>
                  <a
                    href="mailto:djpotier@gmail.com"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    djpotier@gmail.com →
                  </a>
                  <br />
                  <a
                    href="tel:+15195645550"
                    className="inline-flex items-center text-nautical-ocean-600 hover:text-nautical-ocean-700 font-medium transition-colors duration-200"
                  >
                    (519) 564-5550 →
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-nautical-sand-50">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-nautical-navy-900">
                  Photo Guidelines
                </h3>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Please resize photos before uploading to reduce file size</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Add descriptive captions to help identify events and people</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Organize photos by event or date when possible</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-nautical-ocean-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Be respectful of privacy when posting photos of other members</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-serif text-nautical-navy-900 mb-6">
                Help us preserve our club's history by sharing your photos!
              </p>
              <Link href="/directors" className="btn-secondary">
                Contact Club Officers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

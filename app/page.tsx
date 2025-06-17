import Image from "next/image"
import Link from "next/link"
import { Instagram, Calendar, Mail, Phone } from "lucide-react"
import BookingForm from "@/components/booking-form"
import MusicPlayer from "@/components/music-player"
import ReviewSection from "@/components/review-section"
import Gallery from "@/components/gallery"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dj-bwelli-hero.jpg"
            alt="DJ BWElli performing"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-pink-900/70 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 animate-pulse">
            DJ <span className="text-pink-400">BWElli</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Bringing the energy to every event with electrifying beats and unforgettable performances
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#booking"
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="#music"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Listen
            </Link>
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section id="music" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Latest <span className="text-pink-400">Mixes</span>
          </h2>
          <MusicPlayer />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Photo <span className="text-pink-400">Gallery</span>
          </h2>
          <Gallery />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Fan <span className="text-pink-400">Reviews</span>
          </h2>
          <ReviewSection />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Book <span className="text-pink-400">DJ BWElli</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Get in <span className="text-pink-400">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Contact Info</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+43 677 62974830</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">booking.bwelli@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white font-medium">Check calendar for open dates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Follow DJ BWElli</h3>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.instagram.com/elli.neuhuber/?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl hover:scale-105 transition-transform"
                >
                  <Instagram className="h-8 w-8 text-white mb-2" />
                  <span className="text-white font-medium text-sm">Instagram</span>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl hover:scale-105 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white mb-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span className="text-white font-medium text-sm">TikTok</span>
                </a>

                <a
                  href="https://open.spotify.com/intl-de/artist/2Lcp83M7NhY6ycHS7mdyg4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl hover:scale-105 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white mb-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <span className="text-white font-medium text-sm">Spotify</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} DJ BWElli. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "/images/performance-1.png",
    alt: "DJ BWElli performing at a club",
    category: "performances",
  },
  {
    id: 2,
    src: "/images/performance-2.png",
    alt: "DJ BWElli at a festival stage",
    category: "performances",
  },
  {
    id: 3,
    src: "/images/event-1.png",
    alt: "DJ BWElli at a birthday party",
    category: "events",
  },
  {
    id: 4,
    src: "/images/event-2.jpg",
    alt: "DJ BWElli's equipment on a corporate event'",
    category: "events",
  },
  {
    id: 5,
    src: "/images/privat-1.png",
    alt: "DJ BWElli on the day after the party",
    category: "privat",
  },
  {
    id: 6,
    src: "/images/privat-2.png",
    alt: "DJ BWElli if she is partying herself",
    category: "privat",
  },
]

// Gallery categories
const categories = [
  { id: "performances", name: "Performances" },
  { id: "events", name: "Events" },
  { id: "privat", name: "Privat" },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("performances")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`
              rounded-full px-6
              ${
                activeCategory === category.id
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "border-purple-500/50 text-white hover:bg-purple-900/30"
              }
            `}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              onClick={() => setSelectedImage(null)}
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-white/10 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>

            <img
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p>{filteredImages[selectedImage].alt}</p>
            </div>

            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between">
              <Button
                onClick={() => setSelectedImage((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>

              <Button
                onClick={() => setSelectedImage((prev) => (prev! + 1) % filteredImages.length)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

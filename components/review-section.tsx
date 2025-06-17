"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

// Sample review data
const initialReviews = [
  {
    id: 1,
    name: "Simon Z.",
    avatar: "/images/simon-zink.jpeg",
    rating: 5,
    date: "2024-11-11",
    comment: "DJ BWElli war absolut großartig auf meiner Karnevalsparty, selbst die Polizei hat mitgetanzt!",
  },
  {
    id: 2,
    name: "AG WU Wien",
    avatar: "/images/ag-wu-wien.png",
    rating: 5,
    date: "2025-03-28",
    comment: "Ab jetzt buchen wir nur noch BWElli für unseren Spritzerstand, alle anderen DJ's können einpacken.",
  },
  {
    id: 3,
    name: "Christopher aus Vorarlberg",
    avatar: "/images/christopher-vorarlberg.png",
    rating: 4,
    date: "2025-04-01",
    comment: "Seit ich BWElli kenne ist mir selbst die Musik im Berghain zu schlecht",
  },
]

export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews)
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 5,
  })
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      avatar: "/placeholder.svg?height=100&width=100",
      rating: newReview.rating,
      date: new Date().toISOString().split("T")[0],
      comment: newReview.comment,
    }

    setReviews([review, ...reviews])
    setNewReview({ name: "", comment: "", rating: 5 })
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setShowForm(false)
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!showForm && !submitted && (
        <div className="text-center mb-10">
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2 px-6 rounded-full text-lg font-medium"
          >
            Leave a Review
          </Button>
        </div>
      )}

      {showForm && !submitted && (
        <Card className="mb-10 bg-black/30 border-purple-500/30 backdrop-blur-md">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="bg-white/10 border-purple-500/50 text-white"
                />
              </div>

              <div>
                <Label className="text-white">Your Rating</Label>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="comment" className="text-white">
                  Your Review
                </Label>
                <Textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share your experience with DJ BWElli..."
                  required
                  className="min-h-[100px] bg-white/10 border-purple-500/50 text-white"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Submit Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="border-purple-500/50 text-white hover:bg-purple-900/30"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {submitted && (
        <Card className="mb-10 bg-black/30 border-green-500/30 backdrop-blur-md">
          <CardContent className="pt-6 text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">Your review has been submitted successfully.</p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-black/30 border-purple-500/30 backdrop-blur-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-pink-500">
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  <AvatarFallback className="bg-purple-800 text-white">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

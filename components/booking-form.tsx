"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import emailjs from "@emailjs/browser"

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      event_type: formData.get("event-type"),
      event_date: date ? format(date, "PPP") : "Not selected",
      location: formData.get("location"),
      guests: formData.get("guests"),
      details: formData.get("details"),
      to_email: "booking.djbwelli@gmail.com",
    }

    try {
      await emailjs.send(
        "service_xfk3ree", // Replace with your EmailJS service ID
        "template_amm6b0o", // Replace with your EmailJS template ID
        templateParams,
        "qiupeTnfPZzYwzY26", // Replace with your EmailJS public key
      )
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error("Failed to send email:", error)
      alert("Failed to send booking request. Please try again.")
    }
  }

  return (
    <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-md">
      {submitted ? (
        <div className="text-center py-8">
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
          <h3 className="text-2xl font-bold text-white mb-2">Booking Request Sent!</h3>
          <p className="text-gray-300">We'll get back to you within 24 hours to confirm your booking.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                required
                className="bg-white/10 border-purple-500/50 text-white placeholder:text-gray-400"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white/10 border-purple-500/50 text-white placeholder:text-gray-400"
                name="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(+43)696 42069"
                required
                className="bg-white/10 border-purple-500/50 text-white placeholder:text-gray-400"
                name="phone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="event-type" className="text-white">
                Event Type
              </Label>
              <Select name="event-type">
                <SelectTrigger className="bg-white/10 border-purple-500/50 text-white">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="club">Club Night</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="event-date" className="text-white">
                Event Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white/10 border-purple-500/50 text-white hover:bg-white/20"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span className="text-gray-400">Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-white">
                Event Location
              </Label>
              <Input
                id="location"
                placeholder="City, State or Venue Name"
                required
                className="bg-white/10 border-purple-500/50 text-white placeholder:text-gray-400"
                name="location"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-white">
                Number of Guests
              </Label>
              <Select name="guests">
                <SelectTrigger className="bg-white/10 border-purple-500/50 text-white">
                  <SelectValue placeholder="Select guest count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Less than 50</SelectItem>
                  <SelectItem value="medium">50-100</SelectItem>
                  <SelectItem value="large">100-250</SelectItem>
                  <SelectItem value="xl">250-500</SelectItem>
                  <SelectItem value="xxl">500+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details" className="text-white">
              Event Details
            </Label>
            <Textarea
              id="details"
              placeholder="Tell us more about your event, music preferences, and any special requests..."
              className="min-h-[120px] bg-white/10 border-purple-500/50 text-white placeholder:text-gray-400"
              name="details"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg font-bold"
          >
            Submit Booking Request
          </Button>
        </form>
      )}
    </div>
  )
}

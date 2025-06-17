"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample events data
const events = [
  {
    id: 1,
    title: "Club Neon Night",
    date: "June 15, 2025",
    time: "10:00 PM - 3:00 AM",
    location: "Neon Lounge, Downtown",
    image: "/placeholder.svg?height=200&width=400",
    ticketLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Summer Beach Party",
    date: "June 22, 2025",
    time: "4:00 PM - 11:00 PM",
    location: "Sunset Beach Resort",
    image: "/placeholder.svg?height=200&width=400",
    ticketLink: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Corporate Gala",
    date: "June 28, 2025",
    time: "7:00 PM - 12:00 AM",
    location: "Grand Hotel Ballroom",
    image: "/placeholder.svg?height=200&width=400",
    ticketLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Festival Appearance",
    date: "July 4, 2025",
    time: "8:00 PM - 9:30 PM",
    location: "City Park Main Stage",
    image: "/placeholder.svg?height=200&width=400",
    ticketLink: "#",
    featured: true,
  },
]

export default function EventCalendar() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Featured Event */}
      {events.filter((event) => event.featured)[0] && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-4">Featured Event</h3>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={events.filter((event) => event.featured)[0].image || "/placeholder.svg"}
              alt={events.filter((event) => event.featured)[0].title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <Badge className="mb-2 self-start bg-pink-500 hover:bg-pink-600">Featured</Badge>
              <h4 className="text-2xl font-bold text-white mb-2">
                {events.filter((event) => event.featured)[0].title}
              </h4>
              <div className="flex flex-wrap gap-4 text-white/80 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{events.filter((event) => event.featured)[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{events.filter((event) => event.featured)[0].time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{events.filter((event) => event.featured)[0].location}</span>
                </div>
              </div>
              <Button className="self-start bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Get Tickets
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <h3 className="text-xl font-semibold text-white mb-4">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events
          .filter((event) => !event.featured)
          .map((event) => (
            <Card key={event.id} className="overflow-hidden bg-black/30 border-purple-500/30 backdrop-blur-md">
              <div className="aspect-video">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                <div className="space-y-2 text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-pink-400" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-pink-400" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-pink-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-pink-500/50 text-white hover:bg-pink-500/20">
                  Event Details
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}

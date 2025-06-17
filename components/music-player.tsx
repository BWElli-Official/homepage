"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

// Sample tracks data
const tracks = [
  {
    id: 1,
    title: "Fotzenfreitag",
    duration: "3:42",
    image: "/images/fotzenfreitag-cover.png",
    genre: "German HipHop",
    audioSrc: "/audio/fotzenfreitag.mp3",
  },
]

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setProgress((audio.currentTime / audio.duration) * 100)
    }

    const updateDuration = () => {
      setDuration(audio.duration)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume / 100
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = (value[0] / 100) * duration
    audio.currentTime = newTime
    setProgress(value[0])
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = "/audio/fotzenfreitag.mp3" // or whatever your downloadable file is
    link.download = "DJ_BWElli_-_Fotzenfreitag.mp3" // The filename for download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <audio ref={audioRef} src={tracks[currentTrack].audioSrc} preload="metadata" />

      <div className="grid md:grid-cols-[300px_1fr] gap-8 bg-black/40 rounded-2xl p-6 backdrop-blur-md">
        <div className="aspect-square rounded-xl overflow-hidden">
          <img
            src={tracks[currentTrack].image || "/placeholder.svg"}
            alt={tracks[currentTrack].title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{tracks[currentTrack].title}</h3>
            <p className="text-pink-400 mb-4">
              {tracks[currentTrack].genre} • {tracks[currentTrack].duration}
            </p>

            <div className="space-y-6 mt-4">
              {/* Progress bar */}
              <div className="space-y-2">
                <Slider
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={handleProgressChange}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full h-10 w-10"
                  disabled
                >
                  {/* <SkipBack className="h-5 w-5" /> */}
                </Button>

                <Button
                  onClick={togglePlay}
                  size="icon"
                  className="bg-pink-500 hover:bg-pink-600 text-white rounded-full h-14 w-14 flex items-center justify-center"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full h-10 w-10"
                  disabled
                >
                  {/* <SkipForward className="h-5 w-5" /> */}
                </Button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-gray-400" />
                <Slider
                  value={[volume]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0])}
                  className="cursor-pointer max-w-[100px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleDownload}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              Download Mix
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

interface CaptureViewProps {
  onCaptureComplete: () => void
}

export default function CaptureView({ onCaptureComplete }: CaptureViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isSpacePressed, setIsSpacePressed] = useState(false)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (error) {
        toast.error('Camera access is required for sign language detection')
      }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsSpacePressed(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    startCamera()

    return () => {
      const stream = videoRef.current?.srcObject as MediaStream
      stream?.getTracks().forEach(track => track.stop())
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    if (isSpacePressed) {
      onCaptureComplete()
    }
  }, [isSpacePressed, onCaptureComplete])

  return (
    <div className="relative text-center border-2 border-gray-500 p-2 rounded-lg">
      <h2 className="text-xl mt-2 text-gray-300 font-semibold mb-2">
          Capturing....
        </h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-auto max-w-lg mx-auto"
      />
      <p className="mt-4 text-lg font-semibold">
        Press the <span className="text-primary">Space</span> button to complete capture.
      </p>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

interface CaptureViewProps {
  onCaptureComplete: () => void
}

export default function CaptureView({ onCaptureComplete }: CaptureViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [countdown, setCountdown] = useState(5)

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

    startCamera()

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onCaptureComplete()
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(timer)
      const stream = videoRef.current?.srcObject as MediaStream
      stream?.getTracks().forEach(track => track.stop())
    }
  }, [onCaptureComplete])

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
          style={{ maxWidth: '640px', maxHeight: '480px' }}
        />
      </motion.div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-75 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
        {countdown}
      </div>
    </div>
  )
}


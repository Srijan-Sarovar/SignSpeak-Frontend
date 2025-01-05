import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface ResultDisplayProps {
  onReset: () => void
}

export default function ResultDisplay({ onReset }: ResultDisplayProps) {
  const detectedText = 'Thank You'

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance('Thank You')
    window.speechSynthesis.speak(utterance)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-4">"{detectedText}"</h2>
      <p className="text-xl mb-8">Your sign language has been translated.</p>
      <button
        onClick={onReset}
        className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
      >
        Recapture
      </button>
    </motion.div>
  )
}

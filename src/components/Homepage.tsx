import React from 'react'
import { motion } from 'framer-motion'
import { HandIcon } from 'lucide-react'

interface HomePageProps {
  onStartCapture: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onStartCapture }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <HandIcon className="w-24 h-24 mx-auto text-primary" />
        <h1 className="text-4xl font-bold mt-4 text-gray-900">SignSpeak</h1>
        <p className="text-xl mt-2 text-gray-700">
          Sign Language to Text & Audio Translator
        </p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStartCapture}
        className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
      >
        Start Capturing
      </motion.button>
    </div>
  )
}

export default HomePage

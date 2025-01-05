import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CaptureView from './components/CaptureView'
import ResultDisplay from './components/ResultDisplay'
import HomePage from './components/Homepage'

function App() {
  const [isCapturing, setIsCapturing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-black font-primary">
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {!isCapturing && !showResult && (
        <HomePage onStartCapture={() => setIsCapturing(true)} />
      )}
      {isCapturing && !showResult && (
        <CaptureView
          onCaptureComplete={() => {
            setIsCapturing(false)
            setShowResult(true)
          }}
        />
      )}
      {showResult && (
        <ResultDisplay
          onReset={() => {
            setShowResult(false)
            setIsCapturing(false)
          }}
        />
      )}
    </div>
  )
}

export default App

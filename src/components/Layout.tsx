import './globals.css'

export const metadata = {
  title: 'SignSpeak - Sign Language Translator',
  description: 'Translate sign language to text and audio in real-time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'font-primary'}>
        <div role="application" aria-label="SignSpeak Application">
          {children}
        </div>
      </body>
    </html>
  )
}


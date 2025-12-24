import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Helbin Rapheal - Software Developer & AI Engineer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              margin: 0,
              marginBottom: 20,
            }}
          >
            Helbin Rapheal
          </h1>
          <p
            style={{
              fontSize: 36,
              margin: 0,
              opacity: 0.9,
            }}
          >
            Software Developer & AI Engineer
          </p>
          <p
            style={{
              fontSize: 28,
              margin: 0,
              marginTop: 40,
              opacity: 0.8,
            }}
          >
            React • Next.js • TypeScript • AWS
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

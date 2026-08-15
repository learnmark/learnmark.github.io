import { ImageResponse } from 'next/og'

import { siteName } from './seo'

export const dynamic = 'force-static'
export const alt = 'Learnmark'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#f8fafc',
          color: '#0f172a',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: 72,
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 32,
            boxShadow: '0 32px 90px rgba(15, 23, 42, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 56,
            width: '100%',
          }}
        >
          <div style={{ color: '#900000', display: 'flex', fontSize: 36, fontWeight: 800, letterSpacing: 1 }}>
            {siteName}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h1 style={{ fontSize: 76, fontWeight: 800, lineHeight: 0.96, margin: 0, maxWidth: 920 }}>
              {siteName}
            </h1>
            <div style={{ background: '#900000', display: 'flex', height: 8, width: 180 }} />
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            {['01', '02', '03', '04'].map((step) => (
              <span
                key={step}
                style={{
                  alignItems: 'center',
                  border: '1px solid #cbd5e1',
                  borderRadius: 999,
                  color: '#334155',
                  display: 'flex',
                  fontSize: 22,
                  fontWeight: 700,
                  height: 54,
                  justifyContent: 'center',
                  width: 54,
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
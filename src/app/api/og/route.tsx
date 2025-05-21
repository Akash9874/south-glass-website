import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';
export const revalidate = 86400; // Revalidate images once per day

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Dynamic parameters
    const title = searchParams.get('title') || 'South Glass';
    const description = searchParams.get('description') || 'Premium Glass Solutions';
    const imgType = searchParams.get('type') || 'default';
    
    // Load font
    const inter = await fetch(
      new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(to bottom right, rgba(26, 35, 126, 0.7), rgba(0, 0, 0, 0.9))',
            color: 'white',
            position: 'relative',
            padding: '50px',
            fontFamily: '"Inter"',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.3) 2px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
          
          {/* Company Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 'bold',
                background: 'linear-gradient(to right, white, #3BA6C4)',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: -1,
              }}
            >
              SOUTH GLASS
            </div>
          </div>
          
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                lineHeight: 1.1,
                backgroundImage: 'linear-gradient(90deg, #FFFFFF, #CBD5E1)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '28px',
                margin: '0 0 40px 0',
                color: '#94A3B8',
                lineHeight: 1.4,
                maxWidth: '700px',
              }}
            >
              {description}
            </p>
          </div>
          
          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              display: 'flex',
              alignItems: 'center',
              color: '#94A3B8',
              fontSize: '24px',
            }}
          >
            <p>ETHICS · EXPERTISE · EXECUTION</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: inter,
            style: 'normal',
            weight: 400,
          },
        ],
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=31536000',
          'CDN-Cache-Control': 'public, max-age=86400, s-maxage=86400',
          'Vercel-CDN-Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 
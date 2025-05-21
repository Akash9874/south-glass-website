export async function GET() {
  return new Response('google-site-verification=YOUR_VERIFICATION_CODE', {
    headers: {
      'content-type': 'text/plain',
    },
  });
} 
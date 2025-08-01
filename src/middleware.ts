// Middleware runs on server side 

import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the homepage `/` to load normally
  if (pathname === '/') {
    return NextResponse.next()
  }

  // Redirect all other routes to `/`
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (your images folder)
     * - icons/ (your icons folder)
     * - public/ (shouldn't be needed as public files are served from root)
     * - Any file with an extension (css, js, png, jpg, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|icons|.*\\.[a-zA-Z0-9]+$).*)',
  ],
}
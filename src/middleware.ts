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
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}

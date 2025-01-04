import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  beforeAxuth(req, evt) {
    const url = req.nextUrl;

    // Protect /admin routes: Allow only users with admin role
    if (url.pathname.startsWith("/admin")) {
      const userRole = req.headers.get("x-clerk-role"); // Replace this with actual role logic
      if (userRole !== "admin") {
        return new Response("Access Denied", { status: 403 });
      }
    }

    // Allow everything else
    return;
  },
});

export const config = {
  matcher: [
    // Protect specific routes like /admin/*
    "/admin/:path*",

    // Protect all API routes
    "/api/:path*",

    // Avoid applying middleware to static files or Next.js internals
    "/((?!_next|favicon.ico|public).*)",
  ],
};
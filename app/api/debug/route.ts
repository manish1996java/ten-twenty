export async function GET() {
    return Response.json({
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET, // just true/false for security
        NODE_ENV: process.env.NODE_ENV,
    });
}
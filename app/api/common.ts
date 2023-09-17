export async function GET(request: Request) {
  const response = await fetch("http://ifconfig.me", {
    next: {
      revalidate: 60
    }
  });
  return new Response("OK", { status: 200 });
}
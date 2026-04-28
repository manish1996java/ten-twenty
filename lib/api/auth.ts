export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
}
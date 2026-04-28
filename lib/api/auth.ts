export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
}
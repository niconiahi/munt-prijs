export async function loader() {
  return new Response("12", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

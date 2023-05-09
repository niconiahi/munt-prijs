import type { LoaderArgs } from "@remix-run/cloudflare";

export async function loader({ params }: LoaderArgs) {
  return new Response("12", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

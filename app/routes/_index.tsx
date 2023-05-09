import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const priceResponse = await fetch(`${url.origin}/price`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });

  const priceSchema = z.number().default(0);
  const price = priceSchema.parse(priceResponse);

  return json({
    name: "Munt prijs",
    price,
  });
}

export default function Index() {
  const { name, price } = useLoaderData<typeof loader>();

  return (
    <section className="flex flex-col">
      <h1 className="text-2xl  bottom-3">The name of this app is: {name}</h1>
      <h1 className="text-2xl  bottom-3">The price is: {price}</h1>
    </section>
  );
}

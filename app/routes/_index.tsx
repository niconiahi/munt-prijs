import type { V2_MetaFunction } from "@remix-run/cloudflare"
import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }]
}

export async function loader() {
  const price = await fetch("price", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })

  console.log("loader ~ price:", price)

  return json({
    name: "Munt prijs",
  })
}

export default function Index() {
  const { name } = useLoaderData<typeof loader>()

  return (
    <h1 className="text-2xl text-red-300 bottom-3">
      The name of this app is: {name}
    </h1>
  )
}

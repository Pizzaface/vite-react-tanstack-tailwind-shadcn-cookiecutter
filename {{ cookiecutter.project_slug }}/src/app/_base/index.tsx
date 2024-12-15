import { createFileRoute, Link } from "@tanstack/react-router"

import { SiGithub } from "@icons-pack/react-simple-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Route = createFileRoute("/_base/")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex w-full flex-col items-center text-center">

      <div className="w-full border-b bg-card py-20">

      </div>

      <div className="container my-12">

      </div>
    </div>
  )
}

import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

import { SiGithub } from "@icons-pack/react-simple-icons"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

export const Route = createFileRoute("/_base")({
  component: BaseLayout,
})

function BaseLayout() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-10 flex h-14 w-full border-b bg-card/80 backdrop-blur-sm">
        <div className="container flex items-center py-2">
          <NavigationMenu className="-ml-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link className={navigationMenuTriggerStyle()} to="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <ScrollArea
        className="flex h-full w-full flex-col pt-14 [&>[data-orientation=vertical]]:!top-14 [&>[data-orientation=vertical]]:!h-auto"
        type="scroll"
      >
        <main className="flex flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  )
}

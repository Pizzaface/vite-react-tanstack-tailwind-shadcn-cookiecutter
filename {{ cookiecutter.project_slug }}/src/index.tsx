import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center text-center justify-center min-h-screen bg-background text-foreground p-4 text-lg font-sans flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Home Page</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is the home page. 
              </p>
              <p>
                You can start building your app from here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { Link } from "../Link"

export default function Landing() {
  return (
    <div className=" flex flex-col min-h-[100dvh] bg-gradient-to-b from-green-900 via-green-700 to-green-700 ">
      <main className="animate-fadeIn flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/logo-aprova-ufc.png"
                alt="AprovaUFC"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                width="550"
                height="550"
              />
              <div className=" flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="typing-effect text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none pointer-events-none">
                    Unlock the Power of Modern Web Development
                  </h1>
                  <p className="max-w-[600px]  md:text-xl pointer-events-none">
                    Streamline your web development workflow with our cutting-edge platform. Unleash your team's
                    creativity and focus on delivering exceptional user experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 ease-in-out delay-150 duration-300 h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Inscrever-se
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-gradient-to-t from-green-900 via-green-800 to-green-700 pointer-events-none">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-2 ">
                <RocketIcon className="h-8 w-8 text-primary " />
                <h3 className="text-xl font-bold">Rapid Development</h3>
                <p className="text-muted-foreground">
                  Streamline your development workflow with our powerful tools and infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <BoltIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Blazing Fast</h3>
                <p className="text-muted-foreground">
                  Deliver lightning-fast web experiences with our global edge network.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <ShieldIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Secure by Design</h3>
                <p className="text-muted-foreground">Protect your applications with our robust security features.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BoltIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}





function RocketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
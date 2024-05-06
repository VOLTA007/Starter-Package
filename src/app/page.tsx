import { NavBar } from '@/components/Navbar'
import { NextUIProvider } from '@nextui-org/react'

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <main>
                <NavBar />
                {children}
            </main>
        </NextUIProvider>
    )
}

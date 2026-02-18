import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="photoculler-theme">
      <Layout>
        <Hero />
        <Features />
        <Pricing />
      </Layout>
    </ThemeProvider>
  )
}

export default App

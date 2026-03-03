import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout"
import { Hero } from "@/components/hero"
import { VideoDemo } from "@/components/video-demo"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { WhySwitch } from "@/components/why-switch"
import { FAQ } from "@/components/faq"
import { Pricing } from "@/components/pricing"
import { Comparison } from "@/components/comparison"



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="photoculler-theme">
      <Layout>
        <Hero />
        <VideoDemo />
        <Features />
        <HowItWorks />
        <Testimonials />
        <WhySwitch />
        <Pricing />
        <Comparison />
        <FAQ />
      </Layout>
    </ThemeProvider>
  )
}

export default App

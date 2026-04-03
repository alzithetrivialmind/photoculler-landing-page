import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout"
import { Hero } from "@/components/hero"
import { VideoDemo } from "@/components/video-demo"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { WhySwitch } from "@/components/why-switch"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Pricing } from "@/components/pricing"
import { Comparison } from "@/components/comparison"
import { ReleasesPage } from "@/pages/releases"
import { PrivacyPage } from "@/pages/privacy"
import { TermsPage } from "@/pages/terms"
import { SEO } from "@/components/seo"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// This component ensures the window scrolls to the correct section 
// when navigating to /#hash routes, because React mounts async.
function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname, hash])

  return null
}

function LandingPage() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <VideoDemo />
      <Features />
      <HowItWorks />
      <Testimonials />
      <WhySwitch />
      <Pricing />
      <Comparison />
      <FAQ />
      <CTA />
    </Layout>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="snapculler-theme">
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/releases" element={<ReleasesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default App

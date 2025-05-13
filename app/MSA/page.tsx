import Header from "../components/Header"
import Footer from "../components/Footer"
import MSAContent from "./components/MSAContent"

export default function MSAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto py-16 px-6">
        <MSAContent />
      </main>
      <Footer />
    </div>
  )
}

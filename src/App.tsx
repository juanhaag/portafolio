import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-industrial-900 text-gray-100">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Tech Stack Section */}
        <TechStack />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

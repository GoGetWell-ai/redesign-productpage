import Views from './Views'

// Home Page Redesign Components (Task 1)
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-700 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Transform Your Business</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Powerful SaaS solution that streamlines your workflow and boosts productivity
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Start Free Trial
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-500 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Process data in real-time with our optimized engine</p>
            </div>
            {/* Add more feature cards */}
          </div>
        </div>
      </section>

      {/* Add more sections following the same pattern */}
    </div>
  )
}

// Update the Views component with redesigned Home Page
const UpdatedViews = {
  ...Views,
  Home: HomePage
}

export default UpdatedViews

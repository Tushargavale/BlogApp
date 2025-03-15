import React from 'react'
// py-12 px-6 h-full flex-1
const Home = () => {
  return (
         <div className="w-full h-full ">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">Discover the latest articles, tutorials, and insights.</p>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Featured Post 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 1</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/post/1" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

          {/* Featured Post 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 2</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/post/2" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

          {/* Featured Post 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 3</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/post/3" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Posts</h2>
        <div className="space-y-6 px-4">
          {/* Recent Post 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row">
            <img
              src="https://via.placeholder.com/150"
              alt="Recent Post 1"
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 4</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/post/4" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

          {/* Recent Post 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row">
            <img
              src="https://via.placeholder.com/150"
              alt="Recent Post 2"
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 5</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/post/5" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

          {/* Recent Post 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row">
            <img
              src="https://via.placeholder.com/150"
              alt="Recent Post 3"
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 6</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/post/6" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
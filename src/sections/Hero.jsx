function Hero() {
    return (
      <div className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Software Development Services
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Empowering Business Operations at Scale with AI Brilliance
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Many still see AI through an outdated lens, while AI itself has evolved dramatically. Beyond chatbots and pattern recognition, it now adapts, learns, and delivers unimaginable value. AI is no longer just what you know—it's what you can't even imagine. So, let's think big!
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-lg">
              Talk to AI Consultants
            </button>
          </div>
  
          {/* Right Column - Image and Color Palette */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/assest/heroImage.jpg" // Replace with the actual path to your image
                alt="AI Concept" 
                className="w-full rounded-lg shadow-lg" 
              />
            </div>
            
            <p className="col-span-1 md:col-span-2 text-sm text-gray-500 italic text-center mt-4">
              "But with AI shaping the horizon, the sky was never the same shade of blue again."
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
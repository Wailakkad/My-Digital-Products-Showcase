import React from 'react';

const ProductsShowcase = [
  {
    id: 1,
    title: "AI Art Prompts",
    product: "100 Fantasy Character Prompts",
    description: "Create stunning digital art with our AI art prompts. Perfect for artists, designers, and creators.",
    imageUrl: "https://i.pinimg.com/736x/cc/44/db/cc44db191a857efd030231efa46fb379.jpg",
    url: "https://mindsparkprompts.gumroad.com/l/AIArtistryPrompts"
  },
  {
    id: 2,
    title: "Logo Design Prompts",
    product: "50 Minimalist Logo Prompts",
    description: "Design professional logos with ease using our AI logo prompts. Ideal for businesses and designers.",
    imageUrl: "https://i.pinimg.com/736x/a9/ac/56/a9ac563014ea6e630d78e0f26bac5342.jpg",
    url: "https://mindsparkprompts.gumroad.com/l/AIArtistryPrompts"
  },
  {
    id: 3,
    title: "Fantasy Art Prompts",
    product: "200 Magical Creature Prompts",
    description: "Bring your fantasy worlds to life with our AI prompts. Perfect for RPGs, book covers, and more.",
    imageUrl: "https://i.pinimg.com/736x/65/b3/90/65b39092a258b64f3d0e48b967656647.jpg",
    url: "https://mindsparkprompts.gumroad.com/l/AIArtistryPrompts"
  },
];

const Products = () => {
  return (
    <div className="relative min-h-screen bg-[#10002b] overflow-hidden">
      {/* Circular decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#e0aaff] opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#e0aaff] opacity-60 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Content container */}
      <div className="container relative mx-auto pt-16 pb-16 px-4 z-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2">
          Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">AI Prompts</span>
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Unlock your creative potential with our expertly crafted prompt collections
        </p>

        {/* Products */}
        <div className="space-y-24 md:space-y-32">
          {ProductsShowcase.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 group">
                <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform group-hover:shadow-xl group-hover:shadow-purple-300/20">
                  <img
                    src={product.imageUrl}
                    alt={product.product}
                    className="w-full transition-all duration-500 ease-in-out transform group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="px-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-4 transition-all duration-300 hover:shadow-md hover:shadow-purple-300/20 hover:-translate-y-1">
                    {product.title}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                    {product.product}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a 
                      href={product.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 hover:from-purple-600 hover:to-pink-600 focus:ring-2 focus:ring-purple-300 focus:outline-none"
                    >
                      View details
                    </a>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-purple-700 text-xs transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100">
                      Instant Download
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-purple-700 text-xs transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100">
                      High-Quality
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-purple-700 text-xs transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100">
                      AI Optimized
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center p-8 bg-[#5a189a] rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to supercharge your creativity?
          </h3>
          <button className="px-8 py-4 rounded-full bg-black text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1 hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:outline-none">
            View all collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

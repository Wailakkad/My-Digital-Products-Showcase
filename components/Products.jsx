import React from 'react';

const ProductsShowcase = [
    {
        id: 1,
        tittle: "AI Art Prompts",
        product: "100 Fantasy Character Prompts",
        description: "Create stunning digital art with our AI art prompts. Perfect for artists, designers, and creators.",
        imageUrl: "https://i.pinimg.com/736x/cc/44/db/cc44db191a857efd030231efa46fb379.jpg"
    },
    {
        id: 2,
        tittle: "Logo Design Prompts",
        product: "50 Minimalist Logo Prompts",
        description: "Design professional logos with ease using our AI logo prompts. Ideal for businesses and designers.",
        imageUrl: "https://i.pinimg.com/736x/a9/ac/56/a9ac563014ea6e630d78e0f26bac5342.jpg"
    },
    {
        id: 3,
        tittle: "Fantasy Art Prompts",
        product: "200 Magical Creature Prompts",
        description: "Bring your fantasy worlds to life with our AI prompts. Perfect for RPGs, book covers, and more.",
        imageUrl: "https://i.pinimg.com/736x/65/b3/90/65b39092a258b64f3d0e48b967656647.jpg"
    },
];

const Products = () => {
  return (
    <div className="bg-[#0a0118] min-h-screen">
      {/* Header */}
      <div className="container mx-auto pt-16 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
          Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">AI Prompts</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Unlock your creative potential with our expertly crafted prompt collections
        </p>
        
        {/* Products */}
        <div className="space-y-24 md:space-y-32">
          {ProductsShowcase.map((product, index) => (
            <div key={product.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden group">
                  <img 
                    src={product.imageUrl} 
                    alt={product.product} 
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="px-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-purple-900 bg-opacity-30 text-purple-300 text-sm font-medium mb-4">
                    {product.tittle}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {product.product}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition duration-300">
                      View details
                    </button>
                    <button className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition duration-300">
                      Add to cart
                    </button>
                  </div>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs">
                      Instant Download
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs">
                      High-Quality
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs">
                      AI Optimized
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to supercharge your creativity?
          </h3>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition duration-300">
            View all collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
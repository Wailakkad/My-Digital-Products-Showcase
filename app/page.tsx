import { Spotlight } from "../components/ui/spotlight-new"; // Adjust the import path as needed
import Products from "@/components/Products";
export default function Home() {
  return (
    <div className="relative">
     {/* Home Section */}
     <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#090115]">
  {/* Add the Spotlight component */}
  <Spotlight 
  />
  
  {/* Main Content */}
  <div className="container mx-auto px-4 z-50 text-center">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
      We make your <br />
      <span className="text-white">creative work </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">amazing</span>
    </h1>
    
    <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
      Premium AI prompts for designers, artists, and content creators. Unlock your creative potential with our expertly crafted prompts.
    </p>
    
    {/* Featured Products Categories */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
      <div className="p-3 rounded-lg bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition cursor-pointer">
        <span className="text-purple-300 font-medium">Design Prompts</span>
      </div>
      <div className="p-3 rounded-lg bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition cursor-pointer">
        <span className="text-purple-300 font-medium">Art Generation</span>
      </div>
      <div className="p-3 rounded-lg bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition cursor-pointer">
        <span className="text-purple-300 font-medium">Email Templates</span>
      </div>
      <div className="p-3 rounded-lg bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition cursor-pointer">
        <span className="text-purple-300 font-medium">Content Creation</span>
      </div>
    </div>
    
    {/* Call to Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
      <button className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition duration-300 flex items-center justify-center">
        Browse prompts 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </button>
      
      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition duration-300">
        Get started
      </button>
    </div>
    
    {/* Social Proof */}
    <div className="mt-16 text-gray-400">
      <p className="font-medium mb-4">Trusted by creative professionals worldwide</p>
      <div className="flex justify-center gap-8 opacity-70">
        <span>10K+ Users</span>
        <span>•</span>
        <span>4.9★ Rating</span>
        <span>•</span>
        <span>200+ Prompts</span>
      </div>
    </div>
  </div>
  
  {/* Optional: Background elements or patterns */}
  <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#140526] to-transparent z-10"></div>
      </section>
      {/*  */}
      {/* Products Section */}
      <section>
         <Products/>
      </section>
    </div>
  );
}
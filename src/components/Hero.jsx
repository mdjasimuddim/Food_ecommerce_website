import {BsArrowRight} from "react-icons/bs"
const Hero = () => {
  return (
    <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1] text-gray-[#333]">
                <img src="/fruit-2.webp" className = "w-full h-full object-cover rounded-lg" alt="hero img" />
                <div className="absolute max-w-[470px] ml-8 sm:ml-16 top-[50%] sm:space-y-4 -translate-y-[50%]">
                    <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Dried Fruits Best Quality</h2>
                    <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
                    <div className="font-medium text-red-500 text-2xl sm:text-4xl sm:pb-8 pb-4">$18.36</div>
                    <div className="bg-accentDark hover:bg-accent flex text-white rounded-full gap-4 px-4 w-fit items-center text-[14px] py-2 sm:px-6 sm:py-3 cursor-pointer">
                        Shop Now 
                        <BsArrowRight />
                    </div>
                </div>
            </div>
            <div className = "relative">
                <img src = "/fruits-2.jpg"  className = "w-full h-full object-cover rounded-lg" alt = "hero image "/>
                <div className="absolute max-w-[470px] ml-4 sm:ml-16 top-[50%] sm:space-y-4 -translate-y-[50%]">
                    <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Snacks</h2>
                    <p className="text-gray-500 text-xl pt-2">Starting At</p>
                    <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4">$25</div>
                    <div className="bg-accentDark hover:bg-accent flex text-white rounded-full gap-4 px-4 w-fit items-center text-[14px] py-2 sm:px-6 sm:py-3 cursor-pointer">
                        Shop Now 
                        <BsArrowRight />
                    </div>
                </div>
            </div>
            <div className = "relative">
                <img src = "/fruits-1.jpg"  className = "w-full h-full object-cover rounded-lg" alt = "hero image "/>
                <div className="absolute max-w-[470px] ml-4 sm:ml-16 top-[50%] sm:space-y-4 -translate-y-[50%]">
                    <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Fruits</h2>
                    <p className="text-gray-500 text-xl pt-2">Starting At</p>
                    <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4">$20</div>
                    <div className="bg-accentDark hover:bg-accent flex text-white rounded-full gap-4 px-4 w-fit items-center text-[14px] py-2 sm:px-6 sm:py-3 cursor-pointer">
                        Shop Now 
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Hero
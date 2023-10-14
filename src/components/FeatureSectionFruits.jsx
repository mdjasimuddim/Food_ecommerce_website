import ProductCard from "./ProductCard"

const data = [
    {
        id:0, img:"/dried_mango.jpg", name: "Dried Mango", price:"$500"
    },
    {
        id:1, img:"/organic juice 2.jpg", name: "Organic Juice", price:"$100"
    },
    {
        id:2, img:"/Chips.jpg", name: "Potato Chips", price:"$200"
    },
    {
        id:3, img:"/cranberries.jpg", name: "Jewel Cranberries", price:"$400"
    },

]
const FeatureSectionFruits = () => {
  return (
    <div className='container pt-16'>
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className='font-medium text-2xl'>Fruits & Vegetables</h3>
                <p className='text-gray-600 mt-2'>Buy farm fresh fruits and vegetables online at the best price</p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className='feature_btn'>Fruits</button>
                <button className="text-gray-600 hover:text-accent">
                    Vegetables
                </button>
                <button className="text-gray-600 hover:text-accent">
                    Fruit & Bakery
                </button>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2 overflow-hidden">
            <div>
                <img src="/chips 1.jpg" className = "w-full h-full object-cover " alt="banner" />
            </div>
            {data.map((e)=>(<ProductCard key = {e.id} img ={e.img} name = {e.name} price = {e.price} />))}
        </div>
    </div>
  )
}

export default FeatureSectionFruits
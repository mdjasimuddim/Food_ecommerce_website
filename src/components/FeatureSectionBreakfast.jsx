import ProductCard from "./ProductCard"

const data = [
    {
        id:0, img:"/tomato.jpg", name: "Fresh Tomato", price:"$400"
    },
    {
        id:1, img:"/chruncy chips.jpg", name: "Chrunchy Crisps", price:"$300"
    },
    {
        id:2, img:"/cranberries 1.jpg", name: "Jewel Cranberries", price:"$200"
    },
    {
        id:3, img:"/almond.jpg", name: "Almond organic", price:"$400"
    },

]
const FeatureSectionBreakfast = () => {
    return (
        <div className='container pt-16'>
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className='font-medium text-2xl'>Breakfast & Dairy</h3>
                    <p className='text-gray-600 mt-2'>Buy best quality breakfast from big-basket stop near you.</p>
                </div>
                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className='feature_btn'>Eggs & Dairy</button>
                    <button className="text-gray-600 hover:text-accent">
                        Pizza
                    </button>
                    <button className="text-gray-600 hover:text-accent">
                        Snacks
                    </button>
                </div>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img src="/chips 2.jpg" className = "w-full h-full object-cover " alt="banner" />
                </div>
                {data.map((e)=>(<ProductCard key = {e.id} img ={e.img} name = {e.name} price = {e.price} />))}
            </div>
        </div>
      )
}

export default FeatureSectionBreakfast
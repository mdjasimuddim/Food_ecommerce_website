import CategoryCard from "./CategoryCard"

const data = [
    {
        id : 1,
        name :"Melon & Orange",
        count: "12 Product",
        img:"/data1.jpg"
    },
    {
        id : 2,
        name :"Grapes & Cake",
        count: "14 Product",
        img:"/data2.webp"
    },
    {
        id : 3,
        name :"PineApple & Mango",
        count: "10 Product",
        img:"/data3.jpg"
    },
    {
        id : 4,
        name :"Strawberry & Orange",
        count: "15 Product",
        img:"/data4.jpg"
    },
    {
        id : 5,
        name :"Potato & Burger",
        count: "2 Product",
        img:"/data5.jpg"
    },
    {
        id : 6,
        name :"Chicken & Nodulose",
        count: "7 Product",
        img:"/data6.jpg"
    },
    {
        id : 7,
        name :"Fish & Chicken",
        count: "12 Product",
        img:"/data7.jpg"
    },
    {
        id : 8,
        name :"Potato & Soup",
        count: "8 Product",
        img:"/data5.jpg"
    }
]
const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((e) => <CategoryCard key = {e.id} img = {e.img} name = {e.name} count = {e.count} />)}
        </div>
    </div>
  )
}

export default Category
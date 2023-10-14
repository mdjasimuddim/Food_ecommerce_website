import BlogCard from "./BlogCard"

const data = [
    {
        img:"/soup 1.webp",
        title : "Healthy Food Healthy Life",
        date : "Oct 27,2023",
        comment : 8
    },
    {
        img:"/soup 2.jpg",
        title : "Healthy Food Healthy Life",
        date : "Oct 25,2023",
        comment : 12
    },
    {
        img:"/soup 3.webp",
        title : "Healthy Food Healthy Life",
        date : "Oct 24,2023",
        comment : 2
    },

]
const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">Present post in a best way to highlight interesting moments of your blog.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((e)=> (
                <BlogCard key={e.date} img = {e.img} title = {e.title} date = {e.date} comment = {e.comment} />
            ))}
        </div>
    </div>
  )
}

export default BlogSection
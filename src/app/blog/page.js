import LoadBlogsData from "@/utils/LoadBlogsData";
import Link from "next/link";

// const blogs = [
//   {
//     id: 1,
//     title: "title 1",
//     year: "2023",
//   },
//   {
//     id: 2,
//     title: "title 2",
//     year: "2023",
//   },
//   {
//     id: 3,
//     title: "title 3",
//     year: "2023",
//   },
//   {
//     id: 4,
//     title: "title 4",
//     year: "2023",
//   },
// ];

const BlogPage = async () => {
const blogs = await LoadBlogsData()

  return (
    <div className=" mx-20">
      {blogs.map(({ id, title, body }) => (
        <div className=" border border-blue-500 block p-2 m-4" key={id}>
          <h2 className=" text-2xl font-semibold"> {title} </h2>
          <p>{body}</p>

         <button className="text-white mt-5 bg-blue-500 m-2 p-2 rounded "> <Link href={`/blog/${id}`}> Details</Link></button>
         
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

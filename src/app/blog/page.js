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
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();

  return (
    <div className=" mx-20">
      {blogs.map(({ id, title, body }) => (
        <div className=" border border-blue-500 block p-2 m-4" key={id}>
          <h2 className=" text-2xl font-semibold"> {title} </h2>
          <p>{body}</p>

         <button className="text-red-600"> <Link href={`/blog/${id}`}> Details</Link></button>
         
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

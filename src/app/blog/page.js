import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "title 1",
    year: "2023",
  },
  {
    id: 2,
    title: "title 2",
    year: "2023",
  },
  {
    id: 3,
    title: "title 3",
    year: "2023",
  },
  {
    id: 4,
    title: "title 4",
    year: "2023",
  },
];

const BlogPage = () => {
  return (
    <div className=" mx-20">
      {blogs.map(({ id, title, year }) => (
        <Link className=" border border-blue-500 block p-2 m-4"
        href ={{pathname: `/blog/${year}/${id}`, query: {title: title}}}
        
        key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;

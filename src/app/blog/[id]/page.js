import LoadBlogsData from "@/utils/LoadBlogsData";
import LoadSingleBlogData from "@/utils/LoadSingleBlogData";

export const generateMetadata = async ({ params }) => {
  const { title } = await LoadSingleBlogData(params.id);
  return {
    title: title,
  };
};
export const generateStaticParams = async () => {
  const blogs = await LoadBlogsData();
  return blogs.map(({ id }) =>( {
    id: id.toString()
  }));
}

const SingleBlog = async ({ params }) => {
  const { id, title, body } = await LoadSingleBlogData(params.id);

  return (
    <div className=" border border-blue-500 block p-2 m-4">
      <h2 className=" text-2xl font-semibold">
        {" "}
        {id}
        {title}{" "}
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default SingleBlog;

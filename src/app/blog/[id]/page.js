import LoadSingleBlogData from "@/utils/LoadSingleBlogData";


const SingleBlog = async ({ params }) => {
  const {id, title, body } = await LoadSingleBlogData({ id: params.id });

  return (
    <div className=" border border-blue-500 block p-2 m-4">
      <h2 className=" text-2xl font-semibold"> {id}{title} </h2>
      <p>{body}</p>
    </div>
  );
};

export default SingleBlog;

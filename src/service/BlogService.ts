import useApi from "@/components/hooks/useApi";

const url = "https://api-blog-adv.onrender.com/";

const GetPosts = async () => {
  const { getApi } = useApi();

  const res = await getApi(`${url}posts/`, {
    cache: "no-store",
  });
  return await res.json();
};

const GetByIDPosts = async (id: string) => {
  const { getApi } = useApi();

  const res = await getApi(`${url}posts/${id}`, {
    cache: "no-store",
  });
  return await res.json();
};
export const BlogService = {
  GetPosts,
  GetByIDPosts,
};

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};

export const getPostBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!response.ok) throw new Error('Unable to fetch post.')
  return response.json()
};


type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id }}: Props) {
  return {
    title: id
  }

}

function Post({ params: { id }}: Props) {
  return (
    <div>
      <h1>Post page {id}</h1>
    </div>
  );
}

export default Post;

import Header from '@/components/layout/Header';
import { GetStaticProps } from 'next';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.userId}
            title={post.title}
            content={post.body}
            userId={post.userId}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

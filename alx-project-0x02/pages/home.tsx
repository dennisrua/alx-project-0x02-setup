import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import { useState } from 'react';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleModalSubmit = (data: Post) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>
      </div>

      {/* Render Posts */}
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {/* Modal for creating posts */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Home;

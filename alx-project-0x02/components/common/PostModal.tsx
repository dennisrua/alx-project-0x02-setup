import React, { useState } from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ title, content }); // Send data to parent
    setTitle('');
    setContent('');
    onClose(); // Close modal to go back to home
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-gray-900 text-xl font-semibold mb-4">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-700 block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-gray-600 w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="text-gray-900 block text-sm font-medium">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-gray-600 w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              onClick={onClose}
            >
              Close
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;

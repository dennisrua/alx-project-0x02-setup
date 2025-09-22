import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-6 bg-white rounded-xl hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-gray-900 text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

import Card from '@/components/common/Card';

const Home = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Card Title" content="This is the content of the card." />
      <Card title="Another Card" content="More content goes here." />
      <Card title="Third Card" content="Even more content." />
    </div>
  );
};

export default Home;

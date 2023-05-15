import Preloader from '@views/Insights/partials/Preloader';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { client } from 'src/lib/sanity';
import HeroSection from './components/HeroSection/HeroSection';

// dynamic import
const FilterBar = dynamic(() => import('./components/FilterBar'));
const LandingSection = dynamic(() => import('./components/LandingSection'));

const Insights = () => {
  const [posts, setPosts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const posts = await client.fetch(
      `*[_type == "posts" && !(_id in path('drafts.**'))]`
    );
    setPosts(posts);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-secondary text-white">
      <HeroSection />
      <FilterBar />
      <LandingSection posts={posts} />

      {isLoading ? <Preloader theme="dark" /> : null}
    </div>
  );
};

export default Insights;

import Preloader from '@views/Insights/partials/Preloader';
import GetInTouchWhite from '@views/WhoWeAre/components/GetInTouchWhite.tsx/GetInTouchWhite';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { client } from 'src/lib/sanity';

// dynamic import 
const HeroSection = dynamic(() => import('./components/HeroSection/HeroSection'));
const LandingSection = dynamic(() => import('./components/LandingSection/LandingSection'));

const InsightsSinglePage = ({ id }: { id: any }) => {
  const [post, setPost] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const post = await client.fetch(
        `*[_type == "posts" && slug.current == '${id}'][0]`
      );
      setPost(post);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, [id]);

  if (isLoading)
    return (
      <div className="flex w-full h-[100vh]">
        <Preloader theme="light" />
      </div>
    );

  return (
    <div className="text-redblack">
      <HeroSection data={post} />
      <LandingSection data={post} />
      <GetInTouchWhite />
    </div>
  );
};

export default InsightsSinglePage;

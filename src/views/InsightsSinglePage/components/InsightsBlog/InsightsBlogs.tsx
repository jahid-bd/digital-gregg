import SectionHeader from '@views/InsightsSinglePage/partials/SectionHeader';
import { useEffect, useState } from 'react';
import { client, urlFor } from 'src/lib/sanity';
import InsightsBlogItem from '../InsightsBlogItem';

const InsightsBlogs = ({ id }: { id: string }) => {
  const [posts, setPosts] = useState<any>([]);

  const getPosts = async () => {
    const posts = await client.fetch(
      `*[_type == "posts" && !(_id in path('drafts.**'))]`
    );
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <SectionHeader>Insight Blog</SectionHeader>
      <p className="lg:text-[20px] md:text-[18px] text-[16px] leading-[30px]">
        These are websites used to find a product or service and place an order.
        The range can be extensive. These are some of the most popular places
        for online commerce.
      </p>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[34px] mt-[40px]">
        {posts
          ?.filter((post: any) => post?._id !== id)
          .slice(0, 3)
          ?.map((item: any) => (
            <InsightsBlogItem
              key={item?._id}
              label={item?.category[0]}
              title={item?.title}
              imgSrc={`${urlFor(item?.thumbnail)}`}
              link={item?.slug?.current}
            />
          ))}
      </div>
    </div>
  );
};

export default InsightsBlogs;

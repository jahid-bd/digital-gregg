import InsightsSinglePage from '@views/InsightsSinglePage/InsightsSinglePage';
import { useRouter } from 'next/router';

const InsightsSingle = () => {
  const router = useRouter();
  const { id } = router.query;

  return <InsightsSinglePage id={id} />;
};

export default InsightsSingle;

import useSWR from 'swr';
import { fetcher } from '../utils/api';

const PageViews = ({ id }) => {
  //PageViews Client Rendering
  let pageViews = 0;
  const { data, error } = useSWR(`posts-meta-data/${id}`, fetcher);
  if (data) {
    pageViews = data.count;
  } else if (error) {
    pageViews = 0;
  }
  return <div className="post__views">{pageViews} views</div>;
};

export default PageViews;

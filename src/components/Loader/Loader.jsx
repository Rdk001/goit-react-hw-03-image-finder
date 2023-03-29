import { InfinitySpin } from 'react-loader-spinner';
import { Div } from '../ImageGallery/ImageGallery.styled';

const Loader = () => {
  return (
    <Div>
      <InfinitySpin width="200" color="#4fa94d" />
    </Div>
  );
};
export { Loader };

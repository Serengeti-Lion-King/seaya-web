// MainPage.tsx

import ToolBar from '@components/ToolBar/ToolBar';
import SearchBar from '@components/SearchBar/SearchBar';
import mainPoster from '@assets/mainPoster.png';

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      <img src={mainPoster} alt="example" />
      <ToolBar />
    </div>
  );
};

export default MainPage;

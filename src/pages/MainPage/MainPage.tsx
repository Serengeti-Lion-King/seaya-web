// MainPage.tsx

import ToolBar from '@components/ToolBar/ToolBar';
import SearchBar from '@components/SearchBar/SearchBar';
import MainBar from '@components/MainBar/MainBar';
import mainPoster from '@assets/mainPoster.png';

const MainPage = () => {
  return (
    <div>
      <MainBar />
      <SearchBar />
      <img src={mainPoster} alt="example" />
      <ToolBar />
    </div>
  );
};

export default MainPage;

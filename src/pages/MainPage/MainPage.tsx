// MainPage.tsx

import ToolBar from '@components/ToolBar';
import SearchBar from '@components/SearchBar';
import mainPoster from '@assets/mainPoster.png';

function MainPage() {
  return (
    <div>
      <SearchBar />
      <img src={mainPoster} alt="example" />
      <ToolBar />
    </div>
  );
}

export default MainPage;

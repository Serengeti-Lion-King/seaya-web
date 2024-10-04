import { useNavigate } from 'react-router-dom';

// 다양한 경로로 이동할 수 있는 커스텀 훅
const useCustomNavigation = () => {
  const navigate = useNavigate();

  // 인자로 받은 경로로 이동
  const navigateTo = (path: string) => {
    navigate(path);
  };

  // 이전 페이지로 이동
  const navigateBack = () => {
    navigate(-1);
  };

  return {
    navigateTo,
    navigateBack,
  };
};

export default useCustomNavigation;

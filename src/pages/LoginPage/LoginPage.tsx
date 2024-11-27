import NavigationBar from '@components/NavigationBar/NavigationBar';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

// 로그인 폼 제출 핸들러
const handleLoginSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  // 여기서 로그인 처리 로직을 구현 (예: API 요청)
  console.log('로그인 시도 중...');
};

const LoginPage = () => {
  return (
    <div>
      <NavigationBar navText="로그인" />
      <div className="login-page">
        {/* form 태그로 감싸서 로그인 데이터를 제출 */}
        <form onSubmit={handleLoginSubmit}>
          <Input
            labelText="아이디"
            inputText="아이디를 입력해주세요."
            inputId="ID"
          />
          <Input
            className="input-item"
            labelText="비밀번호"
            inputText="비밀번호를 입력해주세요."
            inputId="password"
          />
          {/* type="submit" 으로 폼 제출 */}
          <Button className="login-btn-02" text="로그인" />
        </form>
        <Input
          labelText="아이디"
          inputText="아이디를 입력해주세요."
          inputId="ID"
          className="input-item"
        />
        <Input
          className="input-item"
          labelText="비밀번호"
          inputText="비밀번호를 입력해주세요."
          inputId="password"
        />
        <Button className="login-btn-02" text="로그인" />
        <div className="links-container">
          <Link to="/find-id-page" className="link">
            아이디 찾기
          </Link>
          <span className="divider">|</span>
          <Link to="/reset-password" className="link">
            비밀번호 재설정
          </Link>
          <span className="divider">|</span>
          <Link to="/sign-up-page" className="link">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

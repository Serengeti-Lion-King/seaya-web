import NavigationBar from '@components/NavigationBar/NavigationBar';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div>
      <NavigationBar navText="로그인" />
      <div className="login-page">
        <Input labelText="아이디" inputText="아이디를 입력해주세요." />
        <Input
          className="input-item"
          labelText="비밀번호"
          inputText="비밀번호를 입력해주세요."
        />
        <Button text="로그인" />
        <div className="links-container">
          <Link to="/find-id-page" className="link">
            아이디 찾기
          </Link>
          <span className="divider">|</span>
          <Link to="/reset-password" className="link">
            비밀번호 재설정
          </Link>
          <span className="divider">|</span>
          <Link to="/signup" className="link">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

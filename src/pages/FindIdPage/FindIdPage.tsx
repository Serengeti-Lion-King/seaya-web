// FindIdPage.tsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavigationBar from '@components/NavigationBar/NavigationBar';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import CheckIcon from '@assets/checkIcon.svg?react';
import './FindIdPage.scss';

const FindIdPage = () => {
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmitClick = () => {
    setIsComplete(true);
  };

  const handleVerificationClick = () => {
    setShowVerificationInput(true);
    if (showVerificationInput) {
      handleSubmitClick();
    }
  };

  return (
    <div className="wrap">
      <NavigationBar navText="아이디 찾기" />
      {!isComplete ? (
        <div className="container container-01">
          <div className="content">
            <p>휴대폰 번호를 통해</p>
            <p>가입하신 아이디를 확인하실 수 있습니다.</p>
          </div>
          <div className="box">
            <Input
              labelText="휴대폰 번호"
              inputText='"-"를 제외하고 입력하세요.'
              className="input-phone"
              inputId="phone-number"
            />
            {showVerificationInput && (
              <Input
                labelText="인증번호"
                inputText="인증번호를 입력하세요."
                className="input-certification"
                inputId="verification-code"
              />
            )}
          </div>

          <Button
            onClick={handleVerificationClick}
            className="submit-btn"
            text={showVerificationInput ? '확인' : '인증번호 받기'}
          />
        </div>
      ) : (
        <div className="container container-02">
          <CheckIcon />
          <p>아이디 찾기 완료</p>
          <p>고객님의 SEAYA 아이디는 abcd입니다.</p>
          <div className="btn-select">
            <Link to="/login-page">
              <Button className="login-btn-01" text="아이디 로그인" />
            </Link>
            <Link to="/reset-password">
              <Button className="reset-password-btn" text="비밀번호 재설정" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindIdPage;

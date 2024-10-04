import NavigationBar from '@components/NavigationBar/NavigationBar';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import React, { useState } from 'react';
import './FindIdPage.scss';

const FindIdPage = () => {
  const [showVerificationInput, setShowVerificationInput] = useState(false);

  const handleVerificationClick = () => {
    setShowVerificationInput(true);
  };

  return (
    <div className="find-id-container">
      <NavigationBar navText="아이디 찾기" />
      <div className="find-id-page">
        <p>휴대폰 번호를 통해</p>
        <p>가입하신 아이디를 확인하실 수 있습니다.</p>

        <Input
          labelText="휴대폰 번호"
          inputText='"-"를 제외하고 입력하세요.'
          className="input-phone"
        />
        {showVerificationInput && (
          <Input
            labelText="인증번호"
            inputText="인증번호를 입력하세요."
            className="input-certification"
          />
        )}

        {!showVerificationInput ? (
          <Button
            onClick={handleVerificationClick}
            className="verification-button"
            text="인증번호 받기"
          />
        ) : (
          <Button className="submit-button" text="확인" />
        )}
      </div>
    </div>
  );
};

export default FindIdPage;

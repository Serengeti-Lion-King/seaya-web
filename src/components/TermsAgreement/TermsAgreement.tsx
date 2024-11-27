import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import Check from '@assets/check.svg?react';
import './TermsAgreement.scss';

const TermsAgreement = () => {
  const navigate = useNavigate();

  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [privacyChecked, setPrivacyChecked] = useState<boolean>(false);
  const [ageChecked, setAgeChecked] = useState<boolean>(false);

  const handleAllChecked = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setTermsChecked(newCheckedState);
    setPrivacyChecked(newCheckedState);
    setAgeChecked(newCheckedState);
  };

  const handleIndividualChecked = (
    type: 'terms' | 'privacy' | 'age',
    isChecked: boolean
  ) => {
    if (type === 'terms') setTermsChecked(isChecked);
    if (type === 'privacy') setPrivacyChecked(isChecked);
    if (type === 'age') setAgeChecked(isChecked);

    setAllChecked(isChecked && termsChecked && privacyChecked && ageChecked);
  };

  const handleSignUp = () => {
    if (termsChecked && privacyChecked && ageChecked) {
      // 조건 만족 시 완료 페이지로 이동
      navigate('/signup-complete');
    } else {
      alert('모든 필수 항목에 동의해주세요.');
    }
  };

  return (
    <div className="terms-agreement">
      <h2>약관 동의</h2>
      <div>
        <p className="text-01">
          <Check
            onClick={handleAllChecked}
            className={`check-icon ${allChecked ? 'checked' : ''}`}
          />
          전체 동의합니다.
        </p>
      </div>
      <div>
        <p className="text">
          <Check
            onClick={() => handleIndividualChecked('terms', !termsChecked)}
            className={`check-icon ${termsChecked ? 'checked' : ''}`}
          />
          이용약관에 동의합니다. (필수) <a href="/">내용보기</a>
        </p>
      </div>
      <div>
        <p className="text">
          <Check
            onClick={() => handleIndividualChecked('privacy', !privacyChecked)}
            className={`check-icon ${privacyChecked ? 'checked' : ''}`}
          />
          개인정보 수집 및 이용에 동의합니다. (필수) <a href="/">내용보기</a>
        </p>
      </div>
      <div>
        <p className="text">
          <Check
            onClick={() => handleIndividualChecked('age', !ageChecked)}
            className={`check-icon ${ageChecked ? 'checked' : ''}`}
          />
          만 14세 이상입니다. (필수)
        </p>
      </div>
      <Button
        text="회원가입하기"
        className="sign-up-02"
        onClick={handleSignUp}
      />
    </div>
  );
};

export default TermsAgreement;

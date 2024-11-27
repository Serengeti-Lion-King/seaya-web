import NavigationBar from '@components/NavigationBar/NavigationBar';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import TermsAgreement from '@components/TermsAgreement/TermsAgreement';

const SignUpPage = () => {
  return (
    <div>
      <NavigationBar navText="회원가입" />
      <p>
        씨야를 이용하기 위해 <br />
        회원정보를 입력해주세요.
      </p>
      <Input
        labelText="아이디"
        inputText="6~20자리 영문 필수, 숫자 조합"
        className="input-big"
        inputId=""
      />
      <Input
        labelText="비밀번호"
        inputText="9~12자리 영문,숫자,특수문자 조합"
        className="input-big"
        inputId=""
      />
      <Input
        labelText="비밀번호 확인"
        inputText="9~12자리 영문,숫자,특수문자 조합"
        className="input-big"
        inputId=""
      />
      <Input
        labelText="이름"
        inputText="이름을 입력해주세요."
        className="input-big"
        inputId=""
      />
      <div className="input-container">
        <Input
          labelText="휴대폰 번호 인증"
          inputText="‘-’를 제외하고 입력해주세요."
          className="input-small"
          inputId=""
        />
        <Button text="인증 받기" className="sign-up" />
      </div>
      <div className="input-container">
        <Input
          labelText="인증 번호 확인"
          inputText="인증번호를 입력해주세요."
          className="input-small"
          inputId=""
        />
        <Button text="확인" className="sign-up" />
      </div>
      <div>
        <TermsAgreement />
      </div>
    </div>
  );
};

export default SignUpPage;

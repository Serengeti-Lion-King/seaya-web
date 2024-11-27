import Button from '@components/Button/Button';

const SignUpCompletePage = () => {
  return (
    <div className="sign-up-complete">
      <div className="icon">
        {/* 완료 아이콘을 넣거나 SVG를 활용 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="check-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 12 15 16 10" />
        </svg>
      </div>
      <h1>회원가입이 완료되었습니다.</h1>
      <p>홍길동님의 SEAYA 가입을 축하드립니다.</p>
      <Button
        text="로그인"
        className="login-button"
        onClick={() => (window.location.href = '/login')}
      />
    </div>
  );
};

export default SignUpCompletePage;

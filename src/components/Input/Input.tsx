import './Input.scss';

const Input = () => {
  return (
    <div className="input-item id">
      <label className="text-label">아이디</label>
      <input
        type="text"
        placeholder="아이디를 입력해주세요."
        className="input-id"
      />
    </div>
  );
};

export default Input;

import React from "react";
import "./InputSection.css";

export default function InputSection({ field, setField, time, setTime, setLoadingShow, setResultShow }) {
  const handleField = (e) => {
    setResultShow(false);
    setField(e.target.value);
  };

  const handleTime = (e) => {
    setResultShow(false);
    setTime(e.target.value);
  };

  const showResult = () => {
    if (field === "") {
      alert("어떤 분야의 전문가가 되고 싶으신가요?");
    } else if (time === "") {
      alert("시간도 입력해주세요!");
    } else if (parseInt(time) <= 0) {
      alert("1시간씩이라도 훈련해보는게 어떨까요?");
    } else if (parseInt(time) > 24) {
      alert("24 이하의 숫자를 입력해주세요!");
    } else {
      setLoadingShow(true);
      setResultShow(true);
      setTimeout(() => {
        setLoadingShow(false);
      }, 2000);
    }
  };

  return (
    <section className="input-section">
      <p>
        나는{" "}
        <input
          onChange={handleField}
          type="text"
          value={field}
          placeholder="예) 프로그래밍"
        />{" "}
        전문가가 될 것이다.
        <br />
        그래서 앞으로 매일 하루에{" "}
        <input
          onChange={handleTime}
          type="number"
          min="1"
          max="24"
          value={time}
          placeholder="예) 5"
        />{" "}
        시간씩 훈련할 것이다.
      </p>
      <button
        onClick={showResult}
        className="input"
        type="button"
      >
        나는 며칠 동안 훈련을 해야 1만 시간이 될까?
      </button>
    </section>
  );
}

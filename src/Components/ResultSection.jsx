import React from "react";
import "./ResultSection.css";

export default function ResultSection({ field, time, setModalShow }) {
  function openModal() {
    setModalShow(true);
  }
  function copyLink() {
    alert("URL이 복사되었습니다!");
  }

  return (
    <section className="result-section">
      <p>
        당신은 <span className="input-value">{field}</span> 전문가가 되기 위해서
        <br />
        대략 <span className="input-value">{Math.ceil(10000 / time)}</span>일 이상 훈련하셔야 합니다! :)
      </p>
      <div className="btn-group">
        <button
          onClick={openModal}
          className="go"
          type="button"
        >
          훈련하러 가기 GO!GO!
        </button>
        <button
          onClick={copyLink}
          className="share"
          type="button"
        >
          공유하기
        </button>
      </div>
    </section>
  );
}

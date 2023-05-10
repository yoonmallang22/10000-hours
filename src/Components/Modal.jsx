import React from "react";
import licat from "../img/licat.png";
import "./Modal.css";

export default function Modal({ setModalShow }) {
  function closeModal(e) {
    if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("go")) {
      setModalShow(false);
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={closeModal}
    >
      <article>
        <strong>화이팅!!♥♥♥</strong>
        <p>당신의 꿈을 응원합니다!</p>
        <img
          src={licat}
          alt="라이캣"
        />
        <button
          className="go"
          onClick={closeModal}
        >
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </article>
    </div>
  );
}

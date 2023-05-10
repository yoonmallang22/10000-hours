import React from "react";
import loading from "../img/loading.png";
import "./Loading.css";

export default function Loading() {
  return (
    <article className="loading">
      <img
        src={loading}
        alt="로딩중"
      />
    </article>
  );
}

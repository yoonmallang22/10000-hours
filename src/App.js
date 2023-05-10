import "./reset.css";
import "./App.css";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Loading from "./Components/Loading";
import ResultSection from "./Components/ResultSection";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [field, setField] = useState("");
  const [time, setTime] = useState("");
  const [loadingShow, setLoadingShow] = useState(false);
  const [resultShow, setResultShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Header />
      <InputSection
        field={field}
        setField={setField}
        time={time}
        setTime={setTime}
        setLoadingShow={setLoadingShow}
        setResultShow={setResultShow}
      />
      {loadingShow && <Loading />}
      {resultShow && !loadingShow && (
        <ResultSection
          field={field}
          time={time}
          setModalShow={setModalShow}
        />
      )}
      <Footer />
      {modalShow && <Modal setModalShow={setModalShow} />}
    </>
  );
}
export default App;

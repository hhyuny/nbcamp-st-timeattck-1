import { useState, useRef } from "react";

const InputBar = ({ createNation, updateNation, nationInfo }) => {
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  const focusNationRef = useRef();

  const emptyInput = () => {
    setNation("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const onChangeNation = (e) => {
    setNation(e.target.value);
  };
  const onChangeGold = (e) => {
    setGold(e.target.value);
  };
  const onChangeSilver = (e) => {
    setSilver(e.target.value);
  };
  const onChangeBronze = (e) => {
    setBronze(e.target.value);
  };

  const addNewNation = (e) => {
    e.preventDefault();

    if (nation === "") {
      alert("국가를 입력하세요.");
      return;
    }

    const duplicatedNation = nationInfo.some((country) => country.nation === nation);
    if (duplicatedNation) {
      alert("이미 존재하는 국가입니다.");
      emptyInput();
      focusNationRef.current.focus();

      return;
    }

    createNation(nation, gold, silver, bronze);

    emptyInput();
    focusNationRef.current.focus();
  };

  const onUpdateNation = () => {
    const abc = nationInfo.some((country) => country.nation === nation);
    if (!abc) {
      alert("등록된 국가가 아닙니다.");
      emptyInput();
      focusNationRef.current.focus();
      return;
    }
    updateNation(nation, gold, silver, bronze);
    emptyInput();
    focusNationRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={addNewNation}>
        <input value={nation} type="text" placeholder="국가명" onChange={onChangeNation} ref={focusNationRef} />
        <input value={gold} type="number" placeholder="금메달" onChange={onChangeGold} />
        <input value={silver} type="number" placeholder="은메달" onChange={onChangeSilver} />
        <input value={bronze} type="number" placeholder="동메달" onChange={onChangeBronze} />
        <button type="submit">추가</button>
        <button type="button" onClick={onUpdateNation}>
          수정
        </button>
      </form>
    </div>
  );
};

export default InputBar;

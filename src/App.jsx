import { useState, useRef } from "react";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import NationList from "./components/NationList";

function App() {
  const [nationInfo, setNationInfo] = useState([]);
  const idRef = useRef(0);
  console.log(nationInfo);

  const createNation = (nation, gold, silver, bronze) => {
    const newNation = {
      id: idRef.current++,
      nation,
      gold,
      silver,
      bronze,
    };

    setNationInfo([...nationInfo, newNation]);
  };

  const removeNation = (id) => {
    setNationInfo(nationInfo.filter((nation) => nation.id !== id));
  };

  const updateNation = (nation, gold, silver, bronze) => {
    setNationInfo(
      nationInfo.map((country) => {
        if (country.nation === nation) {
          return {
            ...country,
            gold,
            silver,
            bronze,
          };
        }
        return country;
      })
    );
  };

  return (
    <>
      <Header />
      <InputBar createNation={createNation} updateNation={updateNation} nationInfo={nationInfo} />
      <NationList nationInfo={nationInfo} removeNation={removeNation} />
    </>
  );
}

export default App;

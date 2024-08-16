import NationItem from "./NationItem";

const NationList = ({ nationInfo, removeNation }) => {
  const descendingOrderOfGold = nationInfo.sort((a, b) => b.gold - a.gold);
  return (
    <div>
      {descendingOrderOfGold.map((nation) => {
        return <NationItem key={nation.id} {...nation} removeNation={removeNation} />;
      })}
    </div>
  );
};

export default NationList;

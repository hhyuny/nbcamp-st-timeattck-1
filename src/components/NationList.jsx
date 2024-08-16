import NationItem from "./NationItem";

const NationList = ({ nationInfo, removeNation }) => {
  return (
    <div>
      {nationInfo.map((nation) => {
        return <NationItem key={nation.id} {...nation} removeNation={removeNation} />;
      })}
    </div>
  );
};

export default NationList;

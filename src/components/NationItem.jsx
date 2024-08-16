const NationItem = ({ id, nation, gold, silver, bronze, removeNation }) => {
  const onRemoveNation = () => {
    removeNation(id);
  };

  return (
    <div>
      <h1>{nation}</h1>
      <div>
        id: {id}, 금 {gold}, 은 {silver}, 동 {bronze}
        <button type="button" onClick={onRemoveNation}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default NationItem;

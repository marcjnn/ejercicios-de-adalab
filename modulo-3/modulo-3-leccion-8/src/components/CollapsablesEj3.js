import palettes from "../data/palettes.json";

const CollapsablesEj3 = () => {
  const data = palettes.map((palette) => {
    return <li key={palette.id}>{palette.name}</li>;
  });

  return (
    <div>
      <ul>{data}</ul>
    </div>
  );
};

export default CollapsablesEj3;

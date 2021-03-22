const EscobasEj4 = () => {
  const users = [
    { name: "Nymphadora Tonks", time: 9 },
    { name: "Cedric Diggory", time: 28 },
    { name: "Cho Chang", time: 35 },
    { name: "Luna Lovegood", time: 45 },
    { name: "Gregory Goyle", time: 56 },
  ];

  const [fst, snd, trd] = users;

  console.log(
    `1: ${fst.name} ${fst.time}, 2: ${snd.name} ${snd.time}, 3: ${trd.name} ${trd.time}`
  );

  return <div>hola</div>;
};
export default EscobasEj4;

const datas = [
  {
    id: 4471,
    uid: "a3598788-07e5-4b54-8931-314008c23012",
    blend_name: "American Coffee",
    origin: "Kayanza, Burundi",
    variety: "Kona",
    notes: "tart, slick, bergamot, orange creamsicle, jasmine",
    intensifier: "delicate",
  },
  {
    id: 4471,
    uid: "a3598788-07e5-4b54-8931-314008c23012",
    blend_name: "Wakanda Coffee",
    origin: "Kayanza, Burundi",
    variety: "Kona",
    notes: "tart, slick, bergamot, orange creamsicle, jasmine",
    intensifier: "delicate",
  },
];

const table = datas.map((item, i) => {
  console.log("Hi");
  return (
    <tr key={i}>
      <td className="border px-8 py-4">{item.id}</td>
      <td className="border px-8 py-4">{item.intensifier}</td>
      <td className="border px-8 py-4">{item.blend_name}</td>
    </tr>
  );
});

export default {table};

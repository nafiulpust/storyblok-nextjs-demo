export const Feature = (params: any) => {
  console.log(params);
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <h2 className="text-2xl font-bold mb-4">{params.blok.headline}</h2>
      <p className="text-gray-600">{params.blok.content}</p>
    </div>
  );
};

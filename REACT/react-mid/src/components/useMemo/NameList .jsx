import React, { useMemo, useState } from "react";

const NameList = ({ names }) => {
  const [search, setSearch] = useState("");

  console.log(names);
  // useMemo goes here
  const result = useMemo(() => {
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [names, search]);
  return (
    <div className=" bg-[#090b17] h-screen text-white flex justify-center items-center flex-col">
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {result.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default NameList;

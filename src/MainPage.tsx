import { useState } from "react";
import { useParams } from "react-router-dom";

import { TextEditor } from "./TextEditor";

export const MainPage = () => {
  const [dataObj, setDataObj] = useState<{ [key: string]: string }>({
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
  });

  const { id } = useParams();

  const handleSave = (contents: string) => {
    setDataObj({ ...dataObj, [id!]: contents });
  };

  console.log(dataObj);

  return (
    <div>
      {/* меняется только при изменении ключа */}
      {/* если после картинок нет пробела, то она выделяется - это поведение по умолчанию */}
      <TextEditor key={Math.random()} data={dataObj[id!]} onSave={handleSave} />
    </div>
  );
};

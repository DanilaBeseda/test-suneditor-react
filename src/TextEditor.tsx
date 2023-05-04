import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

interface TextEditorProps {
  data: string;
  onSave: (contents: string) => void;
}

export const TextEditor = ({ data = "", onSave }: TextEditorProps) => {
  let list = buttonList.complex;
  let disable = false;

  if (data.includes("change")) {
    console.log("true");

    list = buttonList.formatting;
  }

  if (data.includes("disable")) {
    disable = true;
  }

  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor
        setContents={data}
        onSave={onSave}
        //! объект в объекте
        setOptions={{
          buttonList: list,
        }}
        autoFocus={false}
        disable={disable}
      />
    </div>
  );
};

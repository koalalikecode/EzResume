import ReactQuill from "react-quill";
// import { useParams } from "react-router";
// import { useAppDispatch } from "redux/hooks";
// import { resumeInputUpdated } from "redux/resumesSlice";
import "react-quill/dist/quill.snow.css";
import "./styles/react-quill.css";
import { updateResumeInput } from "@/atoms/actions";

function ResumeTextEditor({
  value,
  path,
  state,
  setState,
}: {
  value: string;
  path: string;
  state: any;
  setState: any;
}) {
  const toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"], // remove formatting button
  ];
  return (
    <ReactQuill
      theme="snow"
      modules={{
        toolbar: toolbarOptions,
      }}
      value={value}
      tabIndex={2}
      className="w-full"
      onChange={(content) => {
        setState(updateResumeInput(state, content, path));
      }}
    />
  );
}

export default ResumeTextEditor;

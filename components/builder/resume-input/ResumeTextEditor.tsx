import ReactQuill from "react-quill";
import { useParams } from "react-router";
import { useAppDispatch } from "redux/hooks";
import { resumeInputUpdated } from "redux/resumesSlice";
import "react-quill/dist/quill.snow.css";
import "./styles/react-quill.css";

function ResumeTextEditor({ value, path }) {
  const dispatch = useAppDispatch();
  const { resumeId } = useParams();
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
        dispatch(
          resumeInputUpdated({
            value: content,
            path: resumeId + path,
          })
        );
      }}
    />
  );
}

export default ResumeTextEditor;

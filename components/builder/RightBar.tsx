import AvaButton from "components/shared/AvaButton";
import HomeIcon from "icon/HomeIcon";
import { useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import ResumePreview from "./preview/ResumePreview";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useReactToPrint } from "react-to-print";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { resumeInputUpdated } from "redux/resumesSlice";

function RightBar() {
  const componentRef = useRef(null);
  const { resumeId } = useParams();
  const resumeName: string = useAppSelector(
    (state) => state.resumes[resumeId].data.resumeName
  );
  const dispatch = useAppDispatch();
  const handlePrint = useReactToPrint({
    pageStyle: `@media print {
      @page {
        size: 700px 905.88px;
        margin: 80px 48px 80px 64px;
      }
    }`,
    content: () => componentRef.current,
  });
  return (
    <section className="flex-grow flex flex-col">
      <div className="px-6 py-3 border-b border-b-second-dark flex items-center justify-between">
        <div className="flex items-center gap-1">
          <NavLink to="/dashboard">
            <HomeIcon />
          </NavLink>
          <span className="text-primary-violet font-bold">/</span>
          <input
            type="text"
            className="border-none outline-none bg-transparent"
            value={resumeName}
            onChange={(e) =>
              dispatch(
                resumeInputUpdated({
                  path: resumeId + ".data.resumeName",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="flex items-center gap-6">
          <button
            className="bg-primary-violet rounded-sm px-3 py-1 font-semibold"
            onClick={handlePrint}
          >
            Download PDF
          </button>
          <AvaButton />
        </div>
      </div>
      <TransformWrapper centerOnInit={true} maxScale={3}>
        <TransformComponent wrapperStyle={{ flexGrow: "1", width: "100%" }}>
          <ResumePreview ref={componentRef} />
        </TransformComponent>
      </TransformWrapper>
    </section>
  );
}

export default RightBar;

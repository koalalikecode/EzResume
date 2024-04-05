interface IResumeInput {
  title: string;
  htmlFor: string;
  onChange?: (e) => void;
}

function ResumeInput({ title, htmlFor, onChange }: IResumeInput) {
  return (
    <div className="flex flex-col gap-2 flex-grow">
      <label htmlFor={htmlFor}>{title}</label>
      <input
        type="text"
        id={htmlFor}
        className="py-3 px-3 rounded-[4px] bg-transparent border-[#ccc] border outline-none hover:border-primary-pink focus:border-[1.5px] focus:border-primary-pink caret-primary-pink"
        onChange={onChange}
      />
    </div>
  );
}

export default ResumeInput;

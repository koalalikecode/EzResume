import AvaButton from "@/components/shared/AvaButton";

function CornerHeader() {
  return (
    <div className="flex gap-4 items-center px-10">
      {isLogin ? (
        <>
          <p className=" pb-1 border-b border-dashed">
            Welcome back,{" "}
            <span className="text-primary-cyan">{name || userName}</span>
          </p>
          <AvaButton />
        </>
      ) : (
        <p className=" pb-1 border-b border-dashed">
          Welcome to <span className="text-primary-cyan">EzResume</span>
        </p>
      )}
    </div>
  );
}

export default CornerHeader;

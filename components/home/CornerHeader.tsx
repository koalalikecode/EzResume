import AvaButton from "components/shared/AvaButton";
import { useAppSelector } from "redux/hooks";

function CornerHeader() {
  const email = useAppSelector((state) => state.userInfo.email);
  const userName = useAppSelector((state) => state.userInfo.userName);
  const name = useAppSelector((state) => state.userInfo.name);
  const isLogin: boolean = email.length > 0 || userName.length > 0;
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

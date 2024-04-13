export default function Loading() {
  return (
    <div>
      <div className="relative group">
        <div className="w-full aspect-[1/1.41] skeleton"></div>
      </div>
      <div className="flex justify-between items-center mt-2 pr-2">
        <div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
}

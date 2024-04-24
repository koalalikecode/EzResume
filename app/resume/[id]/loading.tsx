function ResumeInputSkeleton() {
  return (
    <section className="w-[600px] h-screen border-r border-r-secondary px-10 py-6 flex flex-col gap-10 overflow-y-auto">
      <div className="skeleton h-10 w-64"></div>
      <div className="skeleton h-10 w-full"></div>
      <div className="skeleton h-10 w-full"></div>
      <div className="skeleton h-10 w-full"></div>
      <div className="skeleton h-20 w-full"></div>
    </section>
  );
}

export default ResumeInputSkeleton;

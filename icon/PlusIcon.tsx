function PlusIcon({
  className,
  fill = "#F8F8F2",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 7H7H1ZM13 7H7H13ZM7 7V1V7ZM7 7V13V7Z" fill={fill} />
      <path
        d="M1 7H7M7 7H13M7 7V1M7 7V13"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PlusIcon;

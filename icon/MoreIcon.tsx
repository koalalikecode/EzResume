function MoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5.6129C9.10556 5.6129 10 6.45685 10 7.5C10 8.54314 9.10556 9.3871 8 9.3871C6.89444 9.3871 6 8.54314 6 7.5C6 6.45685 6.89444 5.6129 8 5.6129ZM6 2.8871C6 3.93024 6.89444 4.77419 8 4.77419C9.10556 4.77419 10 3.93024 10 2.8871C10 1.84395 9.10556 1 8 1C6.89444 1 6 1.84395 6 2.8871ZM6 12.1129C6 13.156 6.89444 14 8 14C9.10556 14 10 13.156 10 12.1129C10 11.0698 9.10556 10.2258 8 10.2258C6.89444 10.2258 6 11.0698 6 12.1129Z"
        fill="#F8F8F2"
      />
    </svg>
  );
}

export default MoreIcon;

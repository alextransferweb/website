interface IProp {
    color?: string;
}

const ChevronIcon = ({ color = "currentColor" }: IProp) => {
  return (
    <svg viewBox="0 0 24 24" stroke={color} fill="none">
      <path
        d="M19 9l-7 7-7-7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;

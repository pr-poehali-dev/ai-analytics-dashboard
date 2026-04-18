export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Flower/star icon */}
      <circle cx="20" cy="20" r="6" fill="white" />
      <circle cx="20" cy="8" r="4" fill="white" opacity="0.7" />
      <circle cx="20" cy="32" r="4" fill="white" opacity="0.7" />
      <circle cx="8" cy="20" r="4" fill="white" opacity="0.7" />
      <circle cx="32" cy="20" r="4" fill="white" opacity="0.7" />
      <circle cx="11.5" cy="11.5" r="3" fill="white" opacity="0.4" />
      <circle cx="28.5" cy="11.5" r="3" fill="white" opacity="0.4" />
      <circle cx="11.5" cy="28.5" r="3" fill="white" opacity="0.4" />
      <circle cx="28.5" cy="28.5" r="3" fill="white" opacity="0.4" />

      {/* Text: Педагог */}
      <text
        x="46"
        y="26"
        fill="white"
        fontFamily="monospace"
        fontSize="15"
        fontWeight="600"
        letterSpacing="1"
      >
        ПЕДАГОГ
      </text>
    </svg>
  );
};

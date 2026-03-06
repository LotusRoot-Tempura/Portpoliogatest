import React from "react";
import svgPaths from "../imports/svg-z2hj630pgt";

function Group() {
  return (
    <div
      className="absolute bottom-[16.667%] left-[12.5%] right-[12.501%] top-[16.667%]"
      data-name="Group"
    >
      <div className="absolute bottom-[-6.25%] left-[-5.556%] right-[-5.556%] top-[-6.25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 18"
        >
          <g id="Group">
            <path
              d="M4.5 1L1 4L4.5 7.5"
              id="Vector"
              stroke="var(--stroke-0, #FAFAFA)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.pbfa0700}
              id="Vector_2"
              stroke="var(--stroke-0, #FAFAFA)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineReturn() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="icon-park-outline:return"
    >
      <Group />
    </div>
  );
}

interface FlipButtonProps {
  onClick: () => void;
}

export function FlipButton({ onClick }: FlipButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 bottom-[80px] right-[40px] transition-all hover:scale-105"
      aria-label="명함 뒤집기"
    >
      <div
        className="inline-flex px-4 py-1 items-center gap-2 rounded-[100px] bg-[rgba(0,0,0,0.48)] hover:bg-[rgba(0,0,0,0.6)] transition-colors"
        data-name="Phone Container"
      >
        <IconParkOutlineReturn />
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-left text-neutral-50 text-nowrap tracking-[-0.8px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre font-[Pretendard] text-[20px]">
            명함 뒤집기
          </p>
        </div>
      </div>
    </button>
  );
}
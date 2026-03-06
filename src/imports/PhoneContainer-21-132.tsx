import svgPaths from "./svg-z2hj630pgt";

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

export default function PhoneContainer() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.48)] relative rounded-[100px] size-full"
      data-name="Phone Container"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-1 relative size-full">
          <IconParkOutlineReturn />
          <div className="css-gcz523 font-['Pretendard:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-left text-neutral-50 text-nowrap tracking-[-0.96px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              명함 뒤집기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
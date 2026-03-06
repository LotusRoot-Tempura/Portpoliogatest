import clsx from "clsx";
type IconarrowrightProps = {
  additionalClassNames?: string[];
};

function Iconarrowright({ additionalClassNames = [] }: IconarrowrightProps) {
  return (
    <div className={clsx("h-[50px] w-12", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 50"
      >
        <g id="icon/arrow-right">
          <rect
            fill="var(--fill-0, black)"
            fillOpacity="0.56"
            height="50"
            rx="24"
            width="48"
          />
          <path
            d="M18 37.5L30 25L18 12.5"
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function IconArrowRight() {
  return (
    <div className="relative size-6" data-name="icon/arrow-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon/arrow-right">
          <path
            d="M8 20L16 12L8 4"
            id="Vector"
            stroke="var(--stroke-0, #1D1E1F)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1000001907() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-3 relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <IconArrowRight />
            </div>
          </div>
          <div className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-center text-nowrap tracking-[-0.8px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              IT 사이드 프로젝트 프로그램 [포텐데이] 312기 X 클로바스튜디오 참여
            </p>
          </div>
          <div className="css-srq0ww font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#939499] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              1 / 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContentContainer() {
  return (
    <div className="relative size-full" data-name="Content Container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center px-5 py-0 relative size-full">
          <Frame1000001907 />
          <div
            className="aspect-[868/441] basis-0 bg-[#939499] grow min-h-px min-w-px shrink-0"
            data-name="image"
          />
          <Iconarrowright
            additionalClassNames={["absolute", "left-[844px]", "top-[218px]"]}
          />
          <div className="absolute flex h-[50px] items-center justify-center left-[-24px] top-[218px] w-12">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <Iconarrowright additionalClassNames={["relative"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import clsx from "clsx";
import imgCompanyImage from "figma:asset/886420ce823b58823dd684624af8ac211419518b.png";
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="css-srq0ww relative shrink-0">
      <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
  text2: string;
};

function BackgroundImage1({ text, text1, text2 }: BackgroundImage1Props) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[16px] text-left text-nowrap tracking-[-0.64px]">
        <BackgroundImageAndText text={text} />
        <BackgroundImageAndText text={text1} />
        <BackgroundImageAndText text={text2} />
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string[];
};

function BackgroundImage({ additionalClassNames = [] }: BackgroundImageProps) {
  return (
    <div className={clsx("h-[100px] relative w-12", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-1 h-[100px] items-center justify-start p-0 relative w-12">
        <IconarrowleftBackgroundImage />
      </div>
    </div>
  );
}

function IconarrowleftBackgroundImage() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 100"
      >
        <g id="icon/arrow-left">
          <path
            d="M30 75L18 50L30 25"
            id="Vector"
            stroke="var(--stroke-0, #58595C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function CompanyImage() {
  return (
    <div
      className="[background-size:100%_100%] aspect-[360/200] bg-[0%_0%] bg-no-repeat relative shrink-0 w-full"
      data-name="Company Image"
      style={{ backgroundImage: `url('${imgCompanyImage}')` }}
    >
      <div className="relative size-full">
        <div className="aspect-[360/200] size-full" />
      </div>
    </div>
  );
}

function JobDetails() {
  return (
    <div className="relative shrink-0" data-name="Job Details">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
        <BackgroundImage1 text="대외활동" text1="|" text2="(주)진지한컴퍼니" />
        <BackgroundImage1 text="2023.12" text1="~" text2="2023.12" />
      </div>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Company Info"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-4 py-0 relative size-full">
          <div
            className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-left tracking-[-0.8px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[normal]">
              IT 사이드 프로젝트 프로그램 [포텐데이] 312기 X 클로바스튜디오 참여
            </p>
          </div>
          <JobDetails />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[#ffffff] h-96 relative rounded-lg shrink-0 w-[424px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 h-96 items-start justify-start pb-5 pt-0 px-0 relative w-[424px]">
          <CompanyImage />
          <CompanyInfo />
        </div>
      </div>
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0" data-name="Content">
      <div className="box-border content-stretch flex flex-row gap-[174px] items-center justify-start p-0 relative">
        <BackgroundImage additionalClassNames={["shrink-0"]} />
        <Container />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <BackgroundImage />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="item"
    >
      <div
        className="[grid-area:1_/_1] bg-blue-400 h-2 ml-0 mt-0 rounded-lg w-5"
        data-name="Active Dot"
      />
    </div>
  );
}

function Active() {
  return (
    <div className="relative rounded-[999px] shrink-0" data-name="active">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <Item />
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="item"
    >
      <div
        className="[grid-area:1_/_1] ml-0 mt-0 rounded-lg size-2"
        data-name="Inactive Dot"
      />
    </div>
  );
}

function Inactive() {
  return (
    <div
      className="bg-[#bebfc2] relative rounded-[999px] shrink-0"
      data-name="inactive"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
        <Item1 />
      </div>
    </div>
  );
}

function CarouselDot() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="carousel__dot"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-0 py-2 relative w-full">
          <Active />
          {[...Array(3).keys()].map((_, i) => (
            <Inactive key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContentContainer() {
  return (
    <div className="relative size-full" data-name="Content Container">
      <div className="[flex-flow:wrap] box-border content-center flex gap-5 items-center justify-between p-0 relative size-full">
        <Content />
        <CarouselDot />
      </div>
    </div>
  );
}
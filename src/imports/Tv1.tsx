import svgPaths from "./svg-1k8crv7y2n";
import clsx from "clsx";
import imgMyNotionFacePortrait1 from "figma:asset/d61d7078388f899ed6f9766cd07adc234a786dc0.png";

function BackgroundImage31({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage15Props = {
  additionalClassNames?: string[];
};

function BackgroundImage15({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("size-6", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string[];
};

function BackgroundImageAndText3({
  text,
  additionalClassNames = [],
}: BackgroundImageAndText3Props) {
  return (
    <div
      style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
      className={clsx("relative shrink-0", additionalClassNames)}
    >
      <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div
      style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
      className="css-41tze2 font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#76767a] text-[24px] text-left text-nowrap tracking-[-0.96px]"
    >
      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-0 relative">
          <div
            className="css-d7i07 font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[40px] text-center text-neutral-50 text-nowrap tracking-[-3.2px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GreetingContainer() {
  return (
    <div
      className="absolute top-[325px]"
      data-name="Greeting Container"
      style={{ left: "calc(41.6667% + 8.66668px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative">
        <BackgroundImageAndText text="안녕하세요" />
        <div
          className="h-2 shrink-0 w-full"
          data-name="Greeting Divider"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 196 8\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(10.05 0 0 0.4102 98 4)\\\'><stop stop-color=\\\'rgba(250,250,250,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(250,250,250,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
          }}
        />
      </div>
    </div>
  );
}

function IntroductionContainer() {
  return (
    <div
      className="absolute top-[325px]"
      data-name="Introduction Container"
      style={{ left: "calc(16.6667% + 101.667px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative">
        <BackgroundImageAndText text="______________ 에서 근무하는 이준렬 입니다" />
        <div
          className="h-2 shrink-0 w-full"
          data-name="Introduction Divider"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 649 8\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(33.278 0 0 0.4102 324.5 4)\\\'><stop stop-color=\\\'rgba(250,250,250,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(250,250,250,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
          }}
        />
      </div>
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="relative shrink-0" data-name="Header Text Container">
      <div className="box-border content-stretch flex flex-col font-normal gap-2 items-end justify-start leading-[0] p-0 relative">
        <div
          className="css-c1qa06 font-['Black_Han_Sans:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[#939499] text-[48px] text-right tracking-[-1.92px]"
          style={{ width: "min-content" }}
        >
          <p className="adjustLetterSpacing block leading-[normal]">
            WRITE YOUR COMPANY
          </p>
        </div>
        <div
          className="css-h62ehy font-['Noto_Sans:Regular',_sans-serif] min-w-full relative shrink-0 text-[#76767a] text-[20px] text-left tracking-[-0.8px]"
          style={{
            width: "min-content",
            fontVariationSettings: "'CTGR' 0, 'wdth' 100",
          }}
        >
          <p className="adjustLetterSpacing block leading-[normal]">
            항상 새로운 것을 탐구하고, 적용하고, 노력하길 멈추지 않는 2년차
            기획자
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header Container">
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <div
          className="[background-size:125%_125%] bg-[50%_50%] bg-no-repeat opacity-50 shrink-0 size-[120px]"
          data-name="my-notion-face-portrait 1"
          style={{ backgroundImage: `url('${imgMyNotionFacePortrait1}')` }}
        />
        <HeaderTextContainer />
      </div>
    </div>
  );
}

function Frame48098183() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-full">
      <div
        className="absolute css-8k7qiv font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[1.4] left-0 text-[24px] text-gray-900 text-left text-nowrap top-0 tracking-[-0.96px] whitespace-pre"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block mb-0">서비스 기획자</p>
        <p className="adjustLetterSpacing block mb-0">Product Manager</p>
        <p className="adjustLetterSpacing block mb-0">Product Owner</p>
        <p className="adjustLetterSpacing block">웹/앱 기획자</p>
      </div>
    </div>
  );
}

function NameTextContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Name Text Container">
      <div className="box-border content-stretch flex flex-row font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold gap-12 items-center justify-start leading-[0] p-0 relative text-[32px] text-gray-900 text-left text-nowrap tracking-[-2.56px] w-full">
        <BackgroundImageAndText3
          text="이"
          additionalClassNames={["css-8joh8c"]}
        />
        <BackgroundImageAndText3
          text="준"
          additionalClassNames={["css-8joh8c"]}
        />
        <BackgroundImageAndText3
          text="렬"
          additionalClassNames={["css-8joh8c"]}
        />
      </div>
    </div>
  );
}

function NameContainer() {
  return (
    <div className="relative shrink-0 w-[187px]" data-name="Name Container">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-[187px]">
        <Frame48098183 />
        <NameTextContainer />
      </div>
    </div>
  );
}

function LineMdPhoneFilled() {
  return (
    <BackgroundImage15 additionalClassNames={["relative", "shrink-0"]}>
      <g id="line-md:phone-filled">
        <path
          d={svgPaths.p35106c00}
          fill="var(--fill-0, #60A5FA)"
          id="Vector"
          stroke="var(--stroke-0, #60A5FA)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </BackgroundImage15>
  );
}

function PhoneContainer() {
  return (
    <BackgroundImage31>
      <LineMdPhoneFilled />
      <BackgroundImageAndText1 text="010-5141-8070" />
    </BackgroundImage31>
  );
}

function IcBaselineEmail() {
  return (
    <BackgroundImage15 additionalClassNames={["relative", "shrink-0"]}>
      <g id="ic:baseline-email">
        <path
          d={svgPaths.p33218b70}
          fill="var(--fill-0, #60A5FA)"
          id="Vector"
        />
      </g>
    </BackgroundImage15>
  );
}

function EmailContainer() {
  return (
    <BackgroundImage31>
      <IcBaselineEmail />
      <BackgroundImageAndText1 text="real896pc@naver.com" />
    </BackgroundImage31>
  );
}

function MynauiToolSolid() {
  return (
    <BackgroundImage15
      additionalClassNames={["absolute", "left-0", "top-[4.5px]"]}
    >
      <g id="mynaui:tool-solid">
        <path
          d={svgPaths.p2e0efd10}
          fill="var(--fill-0, #60A5FA)"
          id="Vector"
        />
      </g>
    </BackgroundImage15>
  );
}

function SkillsIconContainer() {
  return (
    <div
      className="h-[28.5px] relative shrink-0 w-6"
      data-name="Skills Icon Container"
    >
      <MynauiToolSolid />
    </div>
  );
}

function SkillsTextContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Skills Text Container"
    >
      <div className="[flex-flow:wrap] box-border content-center flex font-['Noto_Sans:Display_Medium',_sans-serif] font-medium gap-2 items-center justify-start leading-[0] p-0 relative text-[#76767a] text-[24px] text-left text-nowrap tracking-[-0.96px] w-full">
        <BackgroundImageAndText3
          text="Figma"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="Notion"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="Google Analytics"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="Excel"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="HTML5"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="CSS3"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="JavaScript"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="Java"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="Python"
          additionalClassNames={["css-41tze2"]}
        />
        <BackgroundImageAndText3
          text="SQL"
          additionalClassNames={["css-41tze2"]}
        />
      </div>
    </div>
  );
}

function SkillsContainer() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Skills Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-[530px]">
        <SkillsIconContainer />
        <SkillsTextContainer />
      </div>
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Container">
      <div className="[flex-flow:wrap] box-border content-start flex gap-[60px] items-start justify-start p-0 relative w-full">
        <PhoneContainer />
        <EmailContainer />
        <SkillsContainer />
      </div>
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Info Container">
      <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative w-[530px]">
        <NameContainer />
        <ContactContainer />
      </div>
    </div>
  );
}

function ProfileContainer() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[623px] rounded-[20px] top-12 w-[996px]"
      data-name="Profile Container"
      style={{ left: "calc(8.33333% + 35.3333px)" }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[623px] items-start justify-between px-16 py-14 relative w-[996px]">
          <HeaderContainer />
          <InfoContainer />
        </div>
      </div>
    </div>
  );
}

export default function Tv1() {
  return (
    <div className="bg-[#373737] relative size-full" data-name="TV - 1">
      <GreetingContainer />
      <IntroductionContainer />
      <ProfileContainer />
    </div>
  );
}
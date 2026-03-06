import clsx from "clsx";
import imgLogo from "figma:asset/f8280acee6af5f5603817440abc72080c1846cbb.png";
type BackgroundImage16Props = {
  additionalClassNames?: string[];
};

function BackgroundImage16({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage16Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <BackgroundImage16 additionalClassNames={["css-sbrzpf"]}>
      <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre text-[14px] font-[Pretendard]">
        {text}
      </p>
    </BackgroundImage16>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
};

function BackgroundImage({ text, text1, text2 }: BackgroundImageProps) {
  return (
    <BackgroundImage16>
      <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[14px] text-left text-nowrap tracking-[-0.56px]">
        <BackgroundImageAndText text={text} />
        <BackgroundImageAndText text={text1} />
        <BackgroundImageAndText text={text2} />
      </div>
    </BackgroundImage16>
  );
}

function LogoContainer() {
  return (
    <BackgroundImage16
      additionalClassNames={["bg-[#ffffff]", "rounded", "size-[74px]"]}
    >
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-[74px]">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat shrink-0 size-[52px]"
          data-name="Logo"
          style={{ backgroundImage: `url('${imgLogo}')` }}
        />
      </div>
    </BackgroundImage16>
  );
}

function JobDetails() {
  return (
    <BackgroundImage16>
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
        <BackgroundImage
          text="대학교(학사)"
          text1="|"
          text2="사회언론정보학부 사회학전공"
        />
        <BackgroundImage text="2015.02" text1="~" text2="2020.02" />
      </div>
    </BackgroundImage16>
  );
}

function CompanyInfo() {
  return (
    <BackgroundImage16>
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative">
        <div className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-left text-nowrap tracking-[-0.8px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            동국대학교 서울캠퍼스
          </p>
        </div>
        <JobDetails />
      </div>
    </BackgroundImage16>
  );
}

export default function CardHeader() {
  return (
    <div className="relative rounded-lg size-full" data-name="Card Header">
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-[16px] relative size-full">
          <LogoContainer />
          <CompanyInfo />
        </div>
      </div>
    </div>
  );
}
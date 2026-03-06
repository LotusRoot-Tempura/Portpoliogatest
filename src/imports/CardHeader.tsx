import clsx from "clsx";
import imgLogo from "figma:asset/ea32a1caebc3a9b5228ab2cee52b98a24961f4ea.png";
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
      <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre font-[Pretendard] text-[14px] text-[15px]">
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
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded shrink-0 size-[52px]"
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
          text2="통계·데이터과학과"
        />
        <BackgroundImage text="2024.02" text1="~" text2="재학 중" />
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
            국립한국방송통신대학
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
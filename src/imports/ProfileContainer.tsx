import svgPaths from "./svg-37lfpvd7fm";
import imgCompanyLogo from "figma:asset/ae13da1feaff925af5b65467434f110553c87250.png";
import imgCompanyLogo1 from "figma:asset/b1f2428cb1381958c69964c3d0824fac77361c20.png";
import imgCompanyLogo2 from "figma:asset/900e94d7d7828ea7eb8e14ed227221980e77f1b0.png";

function CompanyinfoBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function JobdetailsBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage57({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage42({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] font-normal gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[14px] text-left text-nowrap tracking-[-0.56px]">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage27({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-lg shrink-0 w-full">
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function CardheaderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage27>
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-[16px] relative w-full">
        {children}
      </div>
    </BackgroundImage27>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-left text-nowrap tracking-[-0.8px]">
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
    <div className="css-sbrzpf relative shrink-0">
      <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type JobtitlecontainerBackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
};

function JobtitlecontainerBackgroundImage({
  text,
  text1,
  text2,
}: JobtitlecontainerBackgroundImageProps) {
  return (
    <BackgroundImage42>
      <BackgroundImageAndText text={text} />
      <BackgroundImageAndText text={text1} />
      <BackgroundImageAndText text={text2} />
    </BackgroundImage42>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({
  text,
}: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0">
      <BackgroundImage57>
        <div className="css-tb90wq font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#58616a] text-[15px] text-left text-nowrap tracking-[-0.15px]">
          <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
            {text}
          </p>
        </div>
      </BackgroundImage57>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="absolute border-[#000000] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <BackgroundImage57>
        <div className="css-6esko5 font-['Pretendard:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#131416] text-[15px] text-left text-nowrap tracking-[-0.15px]">
          <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
            Career
          </p>
        </div>
      </BackgroundImage57>
    </div>
  );
}

function TabsContainer() {
  return (
    <div className="relative shrink-0" data-name="Tabs Container">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Container />
        <ContainerBackgroundImageAndText text="Education" />
        <ContainerBackgroundImageAndText text="Experience" />
        <ContainerBackgroundImageAndText text="Activities" />
        <ContainerBackgroundImageAndText text="Certifications" />
        <ContainerBackgroundImageAndText text="Projects" />
      </div>
    </div>
  );
}

function JobDurationContainer() {
  return (
    <BackgroundImage42>
      <BackgroundImageAndText text="2024.03" />
      <BackgroundImageAndText text="~" />
      <BackgroundImageAndText text="재직 중" />
      <BackgroundImageAndText text="(1년 3개월)" />
    </BackgroundImage42>
  );
}

function JobDetails() {
  return (
    <JobdetailsBackgroundImage>
      <JobtitlecontainerBackgroundImage
        text="UX기획자"
        text1="|"
        text2="UX실"
      />
      <JobDurationContainer />
    </JobdetailsBackgroundImage>
  );
}

function CompanyInfo() {
  return (
    <CompanyinfoBackgroundImage>
      <BackgroundImageAndText1 text="(주)에스제이더블유인터내셔널" />
      <JobDetails />
    </CompanyinfoBackgroundImage>
  );
}

function CardHeader() {
  return (
    <CardheaderBackgroundImage>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="[background-size:111.11%_111.11%] aspect-[108/108] bg-[50%_13.31%] bg-no-repeat h-full relative rounded shrink-0"
          data-name="Company Logo"
          style={{ backgroundImage: `url('${imgCompanyLogo}')` }}
        >
          <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
        </div>
      </div>
      <CompanyInfo />
    </CardheaderBackgroundImage>
  );
}

function JobDurationContainer1() {
  return (
    <BackgroundImage42>
      <BackgroundImageAndText text="2020.06" />
      <BackgroundImageAndText text="~" />
      <BackgroundImageAndText text="2023.05" />
      <BackgroundImageAndText text="(3년)" />
    </BackgroundImage42>
  );
}

function JobDetails1() {
  return (
    <JobdetailsBackgroundImage>
      <JobtitlecontainerBackgroundImage
        text="인사교육 장교(중위)"
        text1="|"
        text2="제6탐색구조비행전대"
      />
      <JobDurationContainer1 />
    </JobdetailsBackgroundImage>
  );
}

function CompanyInfo1() {
  return (
    <CompanyinfoBackgroundImage>
      <BackgroundImageAndText1 text="대한민국 공군 제6탐색구조비행전대" />
      <JobDetails1 />
    </CompanyinfoBackgroundImage>
  );
}

function CardHeader1() {
  return (
    <CardheaderBackgroundImage>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="aspect-[680/680] bg-[50%_50%] bg-cover bg-no-repeat h-full relative rounded shrink-0"
          data-name="Company Logo"
          style={{ backgroundImage: `url('${imgCompanyLogo1}')` }}
        >
          <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
        </div>
      </div>
      <CompanyInfo1 />
    </CardheaderBackgroundImage>
  );
}

function JobDurationContainer2() {
  return (
    <BackgroundImage42>
      <BackgroundImageAndText text="2019.01" />
      <BackgroundImageAndText text="~" />
      <BackgroundImageAndText text="2019.11" />
      <BackgroundImageAndText text="(11개월)" />
    </BackgroundImage42>
  );
}

function JobDetails2() {
  return (
    <JobdetailsBackgroundImage>
      <JobtitlecontainerBackgroundImage
        text="인턴"
        text1="|"
        text2="커뮤니티/마케팅 팀"
      />
      <JobDurationContainer2 />
    </JobdetailsBackgroundImage>
  );
}

function CompanyInfo2() {
  return (
    <CompanyinfoBackgroundImage>
      <div className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-left text-nowrap tracking-[-0.8px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          빙글(Vingle)
        </p>
      </div>
      <JobDetails2 />
    </CompanyinfoBackgroundImage>
  );
}

function CardHeader2() {
  return (
    <BackgroundImage27>
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[16px] relative w-full">
        <div className="flex flex-row items-center self-stretch">
          <div
            className="aspect-[225/225] bg-[50%_50%] bg-cover bg-no-repeat h-full shrink-0"
            data-name="Company Logo"
            style={{ backgroundImage: `url('${imgCompanyLogo2}')` }}
          />
        </div>
        <CompanyInfo2 />
      </div>
    </BackgroundImage27>
  );
}

function CardContainer() {
  return (
    <div className="relative shrink-0 w-[424px]" data-name="Card Container">
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative w-[424px]">
        <CardHeader />
        <CardHeader1 />
        <CardHeader2 />
      </div>
    </div>
  );
}

function MynauiClickSolid() {
  return (
    <div className="relative shrink-0 size-14" data-name="mynaui:click-solid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 56"
      >
        <g id="mynaui:click-solid">
          <path
            d={svgPaths.p674c500}
            fill="var(--fill-0, #D4D4D6)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClickableInfoContent() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Clickable Info Content"
    >
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center p-0 relative size-full">
        <MynauiClickSolid />
        <div
          className="css-srq0ww font-['Pretendard:Medium',_sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#939499] text-[16px] text-center tracking-[-0.64px]"
          style={{ width: "min-content" }}
        >
          <p className="adjustLetterSpacing block mb-0">카드를 클릭하시면</p>
          <p className="adjustLetterSpacing block">
            자세한 설명을 확인하실 수 있어요
          </p>
        </div>
      </div>
    </div>
  );
}

function ClickableInfoContainer() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Clickable Info Container"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2 py-3 relative size-full">
          <ClickableInfoContent />
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Content Container"
    >
      <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative size-full">
        <CardContainer />
        <ClickableInfoContainer />
      </div>
    </div>
  );
}

function CareerContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Career Container"
    >
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative size-full">
        <TabsContainer />
        <ContentContainer />
      </div>
    </div>
  );
}

export default function ProfileContainer() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[20px] size-full"
      data-name="Profile Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip px-16 py-14 relative size-full">
          <CareerContainer />
        </div>
      </div>
    </div>
  );
}
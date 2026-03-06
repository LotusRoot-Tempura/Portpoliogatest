import imgLogo from "figma:asset/ae13da1feaff925af5b65467434f110553c87250.png";

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] font-normal gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[14px] text-left text-nowrap tracking-[-0.56px]">
        {children}
      </div>
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

function PositionInfo() {
  return (
    <BackgroundImage14>
      <BackgroundImageAndText text="UX기획자" />
      <BackgroundImageAndText text="|" />
      <BackgroundImageAndText text="UX실" />
    </BackgroundImage14>
  );
}

function DurationInfo() {
  return (
    <BackgroundImage14>
      <BackgroundImageAndText text="2024.03" />
      <BackgroundImageAndText text="~" />
      <BackgroundImageAndText text="재직 중" />
      <BackgroundImageAndText text="(1년 3개월)" />
    </BackgroundImage14>
  );
}

function Details() {
  return (
    <div className="relative shrink-0" data-name="Details">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
        <PositionInfo />
        <DurationInfo />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0" data-name="Info">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative">
        <div className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-left text-nowrap tracking-[-0.8px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            (주)에스제이더블유인터내셔널
          </p>
        </div>
        <Details />
      </div>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <div className="relative rounded-lg size-full" data-name="Profile Card">
      <div className="absolute border border-[#dbecff] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-[16px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <div
              className="[background-size:111.11%_111.11%] aspect-[108/108] bg-[50%_13.31%] bg-no-repeat h-full relative rounded shrink-0"
              data-name="Logo"
              style={{ backgroundImage: `url('${imgLogo}')` }}
            >
              <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
            </div>
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
}
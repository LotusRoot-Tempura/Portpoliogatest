import clsx from "clsx";
import imgCertificationBadge from "figma:asset/d88a5904dbf7b649369282c1770326af100b43e3.png";
type BackgroundImage16Props = {
  additionalClassNames?: string[];
};

function BackgroundImage16({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage16Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
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
type BackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string[];
};

function BackgroundImage({
  text,
  text1,
  text2,
  additionalClassNames = [],
}: BackgroundImageProps) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] font-normal gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[14px] text-left text-nowrap tracking-[-0.56px]",
        additionalClassNames,
      )}
    >
      <BackgroundImageAndText text={text} />
      <BackgroundImageAndText text={text1} />
      <BackgroundImageAndText text={text2} />
    </div>
  );
}

function CertificationHeader() {
  return (
    <BackgroundImage16 additionalClassNames={["bg-[#ff912c]"]}>
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-3 relative w-full">
          <div className="css-6bzbts font-['Pretendard:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-left text-neutral-50 text-nowrap tracking-[-0.8px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              데이터분석 준전문가(ADsP)
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage16>
  );
}

function PositionInfo() {
  return (
    <div className="relative shrink-0" data-name="Position Info">
      <BackgroundImage text="발급일자" text1="|" text2="2024.11" />
    </div>
  );
}

function PositionInfo1() {
  return (
    <BackgroundImage16>
      <BackgroundImage
        text="발급기관"
        text1="|"
        text2="한국데이터산업진흥원"
        additionalClassNames={["w-full"]}
      />
    </BackgroundImage16>
  );
}

function CertificationInfo() {
  return (
    <div className="relative shrink-0 w-[184px]" data-name="Certification Info">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-[184px]">
        <PositionInfo />
        <PositionInfo1 />
      </div>
    </div>
  );
}

function CertificationDetails() {
  return (
    <BackgroundImage16>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-4 py-5 relative w-full">
          <div className="css-3ncq2o font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#58595c] text-[16px] text-left tracking-[-0.64px] w-[259px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre-wrap">{`통계·데이터 모델링 기초, SQL 분석 역량을  평가하는 국가공인 자격`}</p>
          </div>
          <CertificationInfo />
        </div>
      </div>
    </BackgroundImage16>
  );
}

export default function CertificationContainer() {
  return (
    <div
      className="bg-[#ffffff] relative rounded size-full"
      data-name="Certification Container"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <CertificationHeader />
        <CertificationDetails />
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-[300px] size-28 top-3"
          data-name="Certification Badge"
          style={{ backgroundImage: `url('${imgCertificationBadge}')` }}
        />
      </div>
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}
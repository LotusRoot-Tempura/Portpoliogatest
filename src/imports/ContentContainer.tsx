import clsx from "clsx";
import imgCertificationBadge from "figma:asset/d88a5904dbf7b649369282c1770326af100b43e3.png";
type BackgroundImage58Props = {
  additionalClassNames?: string[];
};

function BackgroundImage58({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage58Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}

function CertificationcontainerBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 w-[424px]">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[424px]">
        {children}
      </div>
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function CertificationinfoBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[184px]">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-[184px]">
        {children}
      </div>
    </div>
  );
}

function CertificationdetailsBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage58>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-4 py-5 relative w-full">
          {children}
        </div>
      </div>
    </BackgroundImage58>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="css-3ncq2o font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#58595c] text-[16px] text-left tracking-[-0.64px] w-[259px]">
      <p className="adjustLetterSpacing block leading-[normal]">
        {text}
        <br />
        {text1}
      </p>
    </div>
  );
}
type PositioninfoBackgroundImage1Props = {
  additionalClassNames?: string[];
};

function PositioninfoBackgroundImage1({
  additionalClassNames = [],
}: PositioninfoBackgroundImage1Props) {
  return (
    <BackgroundImage58>
      <BackgroundImage
        text="발급기관"
        text1="|"
        text2="한국데이터산업진흥원"
        additionalClassNames={["w-full"]}
      />
    </BackgroundImage58>
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
type PositioninfoBackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
};

function PositioninfoBackgroundImage({
  text,
  text1,
  text2,
}: PositioninfoBackgroundImageProps) {
  return (
    <div className="relative shrink-0">
      <BackgroundImage text={text} text1={text1} text2={text2} />
    </div>
  );
}
type CertificationheaderBackgroundImageAndTextProps = {
  text: string;
};

function CertificationheaderBackgroundImageAndText({
  text,
}: CertificationheaderBackgroundImageAndTextProps) {
  return (
    <BackgroundImage58 additionalClassNames={["bg-[#ff912c]"]}>
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-3 relative w-full">
          <div className="css-6bzbts font-['Pretendard:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-left text-neutral-50 text-nowrap tracking-[-0.8px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              {text}
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage58>
  );
}

function CertificationInfo() {
  return (
    <CertificationinfoBackgroundImage>
      <PositioninfoBackgroundImage text="발급일자" text1="|" text2="2024.11" />
      <PositioninfoBackgroundImage1 />
    </CertificationinfoBackgroundImage>
  );
}

function CertificationDetails() {
  return (
    <CertificationdetailsBackgroundImage>
      <div className="css-3ncq2o font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#58595c] text-[16px] text-left tracking-[-0.64px] w-[259px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre-wrap">{`통계·데이터 모델링 기초, SQL 분석 역량을  평가하는 국가공인 자격`}</p>
      </div>
      <CertificationInfo />
    </CertificationdetailsBackgroundImage>
  );
}

function CertificationContainer() {
  return (
    <CertificationcontainerBackgroundImage>
      <CertificationheaderBackgroundImageAndText text="데이터분석 준전문가(ADsP)" />
      <CertificationDetails />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-[300px] size-28 top-3"
        data-name="Certification Badge"
        style={{ backgroundImage: `url('${imgCertificationBadge}')` }}
      />
    </CertificationcontainerBackgroundImage>
  );
}

function CertificationInfo1() {
  return (
    <CertificationinfoBackgroundImage>
      <PositioninfoBackgroundImage text="발급일자" text1="|" text2="2022.06" />
      <PositioninfoBackgroundImage1 />
    </CertificationinfoBackgroundImage>
  );
}

function CertificationDetails1() {
  return (
    <CertificationdetailsBackgroundImage>
      <BackgroundImage1
        text="관계형 모델 설계와 SQL 작성·튜닝 역량을"
        text1="검정하는 데이터베이스 개발 자격"
      />
      <CertificationInfo1 />
    </CertificationdetailsBackgroundImage>
  );
}

function CertificationContainer1() {
  return (
    <CertificationcontainerBackgroundImage>
      <CertificationheaderBackgroundImageAndText text="SQL개발자(SQLD)" />
      <CertificationDetails1 />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-[300px] size-28 top-3"
        data-name="Certification Badge"
        style={{ backgroundImage: `url('${imgCertificationBadge}')` }}
      />
    </CertificationcontainerBackgroundImage>
  );
}

function PositionInfo5() {
  return (
    <BackgroundImage58>
      <BackgroundImage
        text="발급기관"
        text1="|"
        text2="대한상공회의소"
        additionalClassNames={["w-full"]}
      />
    </BackgroundImage58>
  );
}

function CertificationInfo2() {
  return (
    <CertificationinfoBackgroundImage>
      <PositioninfoBackgroundImage text="발급일자" text1="|" text2="2021.12" />
      <PositionInfo5 />
    </CertificationinfoBackgroundImage>
  );
}

function CertificationDetails2() {
  return (
    <CertificationdetailsBackgroundImage>
      <BackgroundImage1
        text="셀·액세스 기반 고급 함수, 매크로, 데이터"
        text1="베이스 처리를 평가하는 사무 자동화 자격"
      />
      <CertificationInfo2 />
    </CertificationdetailsBackgroundImage>
  );
}

function CertificationContainer2() {
  return (
    <CertificationcontainerBackgroundImage>
      <CertificationheaderBackgroundImageAndText text="컴퓨터활용능력 1급" />
      <CertificationDetails2 />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-[300px] size-28 top-3"
        data-name="Certification Badge"
        style={{ backgroundImage: `url('${imgCertificationBadge}')` }}
      />
    </CertificationcontainerBackgroundImage>
  );
}

function PositionInfo7() {
  return (
    <BackgroundImage58>
      <BackgroundImage
        text="발급기관"
        text1="|"
        text2="한국생산성본부"
        additionalClassNames={["w-full"]}
      />
    </BackgroundImage58>
  );
}

function CertificationInfo3() {
  return (
    <CertificationinfoBackgroundImage>
      <PositioninfoBackgroundImage text="발급일자" text1="|" text2="2021.08" />
      <PositionInfo7 />
    </CertificationinfoBackgroundImage>
  );
}

function CertificationDetails3() {
  return (
    <CertificationdetailsBackgroundImage>
      <div className="css-3ncq2o font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#58595c] text-[16px] text-left tracking-[-0.64px] w-[259px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Adobe Photoshop을 활용한 그래픽 편집·이미지 합성 능력을 평가하는
          국가공인 자격
        </p>
      </div>
      <CertificationInfo3 />
    </CertificationdetailsBackgroundImage>
  );
}

function CertificationContainer3() {
  return (
    <CertificationcontainerBackgroundImage>
      <CertificationheaderBackgroundImageAndText text="그래픽기술자격(GTQ) 1급" />
      <CertificationDetails3 />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-[300px] size-28 top-3"
        data-name="Certification Badge"
        style={{ backgroundImage: `url('${imgCertificationBadge}')` }}
      />
    </CertificationcontainerBackgroundImage>
  );
}

export default function ContentContainer() {
  return (
    <div className="relative size-full" data-name="Content Container">
      <div className="[flex-flow:wrap] box-border content-start flex gap-5 items-start justify-start p-0 relative size-full">
        <CertificationContainer />
        <CertificationContainer1 />
        <CertificationContainer2 />
        <CertificationContainer3 />
      </div>
    </div>
  );
}
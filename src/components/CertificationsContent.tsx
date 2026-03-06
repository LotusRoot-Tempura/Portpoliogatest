import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import imgImage10 from "figma:asset/c6942f31ec2757acf1425d016712b09f4948a363.png";
import imgImage9 from "figma:asset/920df5865688141257f6577b3ce203e7cac79a48.png";
import imgImage12 from "figma:asset/85bbd0986ff49fc1d9db9b87f8d791f2458447dc.png";
import imgImage13 from "figma:asset/f6fc08792afa3278dab4ba1d10a90a3400edb64d.png";
import imgImage14 from "figma:asset/1e29479c424479e69407fee754e09200aa8ea385.png";
import imgImage11 from "figma:asset/1986150c09680001a53744c07c852501b197e3f1.png";

// Tab animation variants
const tabVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export function CertificationsContent() {
  // Certification components based on the imported Figma design
  type BackgroundImage43Props = {
    additionalClassNames?: string[];
  };

  function BackgroundImage43({
    children,
    additionalClassNames = [],
  }: React.PropsWithChildren<BackgroundImage43Props>) {
    return (
      <div className={clsx("relative shrink-0 w-[200px]", additionalClassNames)}>
        {children}
      </div>
    );
  }

  function ComponentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
    return (
      <div className="h-[147px] relative rounded shrink-0 w-[276px] group">
        <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
        <div className="box-border content-stretch flex flex-col h-[147px] items-center justify-center p-0 relative w-[276px]">
          {children}
        </div>
      </div>
    );
  }

  // Basic name display at bottom (always visible, but hidden on hover)
  function BasicDescriptionImage({ children }: React.PropsWithChildren<{}>) {
    return (
      <div
        className="absolute bg-[rgba(0,0,0,0.56)] left-0 bottom-0 w-[276px] flex flex-col justify-center items-start px-4 py-3 group-hover:opacity-0 transition-opacity duration-300"
        data-name="Basic Description"
      >
        <div className="css-ewqoos font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-[#FAFAFA] text-nowrap tracking-[-0.64px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre font-medium">
            {children}
          </p>
        </div>
      </div>
    );
  }

  // Detailed description overlay (visible on hover)
  function DescriptionBackgroundImage({ children }: React.PropsWithChildren<{}>) {
    return (
      <div className="absolute bg-[rgba(0,0,0,0.56)] h-[147px] left-0 top-0 w-[276px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 h-[147px] items-start justify-start p-[16px] relative w-[276px]">
            {children}
          </div>
        </div>
      </div>
    );
  }

  function LicenseBackgroundImage() {
    return (
      <BackgroundImage43 additionalClassNames={["h-[90.09px]"]}>
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
          data-name="image 13"
          style={{ backgroundImage: `url('${imgImage14}')` }}
        />
      </BackgroundImage43>
    );
  }

  type BackgroundImageProps = {
    text: string;
    text1: string;
  };

  function BackgroundImage({ text, text1 }: BackgroundImageProps) {
    return (
      <div className="basis-0 css-eelh3v font-['Pretendard:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-left text-neutral-50 tracking-[-0.52px] w-full">
        <p className="block leading-[normal] text-[13px] font-[Pretendard]">
          {text}
          <br />
          {text1}
        </p>
      </div>
    );
  }

  type BackgroundImageAndText1Props = {
    text: string;
  };

  function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
    return (
      <div className="css-ewqoos font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap tracking-[-0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre font-[Pretendard] font-bold">
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
      <div className="css-rzkt3w relative shrink-0">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre font-[Pretendard] text-[12px]">
          {text}
        </p>
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
        <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[12px] text-left text-nowrap text-zinc-100 tracking-[-0.48px]">
          <BackgroundImageAndText text={text} />
          <BackgroundImageAndText text={text1} />
          <BackgroundImageAndText text={text2} />
        </div>
      </div>
    );
  }

  function License() {
    return (
      <BackgroundImage43 additionalClassNames={["h-[102px]"]}>
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
          data-name="image 10"
          style={{ backgroundImage: `url('${imgImage10}')` }}
        />
      </BackgroundImage43>
    );
  }

  function Description() {
    return (
      <DescriptionBackgroundImage>
        <BackgroundImageAndText1 text="데이터분석 준전문가(ADsP)" />
        <div className="basis-0 css-eelh3v font-['Pretendard:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-left text-neutral-50 tracking-[-0.52px] w-full">
          <p className="block leading-[normal] font-[Pretendard] text-[13px]">
            통계·데이터 분석 및 기획의 이론지식 및 능력을 평가하는 국가공인 자격
          </p>
        </div>
        <PositioninfoBackgroundImage
          text="한국데이터산업진흥원"
          text1="|"
          text2="2024.11"
        />
      </DescriptionBackgroundImage>
    );
  }

  function Component2() {
    return (
      <ComponentBackgroundImage>
        <License />
        <BasicDescriptionImage>데이터분석 준전문가(ADsP)</BasicDescriptionImage>
        <Description />
      </ComponentBackgroundImage>
    );
  }

  function License1() {
    return (
      <BackgroundImage43 additionalClassNames={["h-[104.727px]"]}>
        <div
          className="[background-size:130.18%_134.03%] absolute bg-[50%_50%] bg-no-repeat inset-0"
          data-name="image 9"
          style={{ backgroundImage: `url('${imgImage9}')` }}
        />
      </BackgroundImage43>
    );
  }

  function Description1() {
    return (
      <DescriptionBackgroundImage>
        <BackgroundImageAndText1 text="SQL개발자(SQLD)" />
        <BackgroundImage
          text="관계형 모델 설계와 SQL 작성·튜닝 역량을"
          text1="검정하는 데이터베이스 개발 자격"
        />
        <PositioninfoBackgroundImage
          text="한국데이터산업진흥원"
          text1="|"
          text2="2022.06"
        />
      </DescriptionBackgroundImage>
    );
  }

  function Component3() {
    return (
      <ComponentBackgroundImage>
        <License1 />
        <BasicDescriptionImage>SQL개발자(SQLD)</BasicDescriptionImage>
        <Description1 />
      </ComponentBackgroundImage>
    );
  }

  function License2() {
    return (
      <BackgroundImage43 additionalClassNames={["h-[36.463px]"]}>
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
          data-name="image 12"
          style={{
            backgroundImage: `url('${imgImage12}'), url('${imgImage13}')`,
          }}
        />
      </BackgroundImage43>
    );
  }

  function Description2() {
    return (
      <DescriptionBackgroundImage>
        <div className="css-ewqoos font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap tracking-[-0.64px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre font-[Pretendard] font-bold">
            컴퓨터활용능력 1급
          </p>
        </div>
        <BackgroundImage
          text="엑셀·액세스 기반 고급 함수, 매크로, 데이터"
          text1="베이스 처리를 평가하는 사무 자동화 자격"
        />
        <PositioninfoBackgroundImage
          text="대한상공회의소"
          text1="|"
          text2="2021.12"
        />
      </DescriptionBackgroundImage>
    );
  }

  function Component4() {
    return (
      <ComponentBackgroundImage>
        <License2 />
        <BasicDescriptionImage>컴퓨터활용능력 1급</BasicDescriptionImage>
        <Description2 />
      </ComponentBackgroundImage>
    );
  }

  function License3() {
    return (
      <BackgroundImage43 additionalClassNames={["h-[93.24px]"]}>
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
          data-name="image 11"
          style={{ backgroundImage: `url('${imgImage11}')` }}
        />
      </BackgroundImage43>
    );
  }

  function Description3() {
    return (
      <DescriptionBackgroundImage>
        <div className="css-ewqoos font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap tracking-[-0.64px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            GTQ 그래픽기술자격 1급
          </p>
        </div>
        <BackgroundImage
          text="Adobe Photoshop을 활용한 그래픽 편집·이미지"
          text1="합성 능력을 평가하는 국가공인 자격"
        />
        <PositioninfoBackgroundImage
          text="한국생산성본부"
          text1="|"
          text2="2021.08"
        />
      </DescriptionBackgroundImage>
    );
  }

  function Component7() {
    return (
      <ComponentBackgroundImage>
        <License3 />
        <BasicDescriptionImage>GTQ 그래픽기술자격 1급</BasicDescriptionImage>
        <Description3 />
      </ComponentBackgroundImage>
    );
  }

  function Description4() {
    return (
      <DescriptionBackgroundImage>
        <BackgroundImageAndText1 text="ERP 인사 정보관리사 1급" />
        <BackgroundImage
          text="ERP 시스템의 인사 모듈(인사관리·급여관리 등)"
          text1="활용 능력을 검정하는 국가공인 자격"
        />
        <PositioninfoBackgroundImage
          text="한국데이터산업진흥원"
          text1="|"
          text2="2022.02"
        />
      </DescriptionBackgroundImage>
    );
  }

  function Component5() {
    return (
      <ComponentBackgroundImage>
        <LicenseBackgroundImage />
        <BasicDescriptionImage>ERP 인사 정보관리사 1급</BasicDescriptionImage>
        <Description4 />
      </ComponentBackgroundImage>
    );
  }

  function Description5() {
    return (
      <DescriptionBackgroundImage>
        <BackgroundImageAndText1 text="ERP 회계 정보관리사 1급" />
        <BackgroundImage
          text="ERP 시스템의 회계 모듈(회계기초·원가관리 등)"
          text1="활용 능력을 검정하는 국가공인 자격"
        />
        <PositioninfoBackgroundImage
          text="한국데이터산업진흥원"
          text1="|"
          text2="2022.04"
        />
      </DescriptionBackgroundImage>
    );
  }

  function Component6() {
    return (
      <ComponentBackgroundImage>
        <LicenseBackgroundImage />
        <BasicDescriptionImage>ERP 회계 정보관리사 1급</BasicDescriptionImage>
        <Description5 />
      </ComponentBackgroundImage>
    );
  }

  return (
    <motion.div
      variants={tabVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="relative size-full" data-name="Content Container">
        <div className="[flex-flow:wrap] box-border content-start flex gap-5 items-start justify-start p-0 relative size-full">
          <Component2 />
          <Component3 />
          <Component4 />
          <Component7 />
          <Component5 />
          <Component6 />
        </div>
      </div>
    </motion.div>
  );
}
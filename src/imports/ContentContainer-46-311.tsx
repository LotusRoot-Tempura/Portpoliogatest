import clsx from "clsx";
import imgImage10 from "figma:asset/c6942f31ec2757acf1425d016712b09f4948a363.png";
import imgImage9 from "figma:asset/920df5865688141257f6577b3ce203e7cac79a48.png";
import imgImage12 from "figma:asset/85bbd0986ff49fc1d9db9b87f8d791f2458447dc.png";
import imgImage13 from "figma:asset/f6fc08792afa3278dab4ba1d10a90a3400edb64d.png";
import imgImage11 from "figma:asset/1986150c09680001a53744c07c852501b197e3f1.png";
import imgImage14 from "figma:asset/1e29479c424479e69407fee754e09200aa8ea385.png";
type BackgroundImage41Props = {
  additionalClassNames?: string[];
};

function BackgroundImage41({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage41Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function ComponentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage41
      additionalClassNames={["h-[147px]", "rounded", "w-[276px]"]}
    >
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-col h-[147px] items-center justify-between p-0 relative w-[276px]">
        {children}
      </div>
    </BackgroundImage41>
  );
}

function BackgroundImage11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.56)] left-0 top-[104px] w-[276px]">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-4 py-3 relative w-[276px]">
          <div className="css-ewqoos font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LicenseBackgroundImage() {
  return (
    <BackgroundImage41 additionalClassNames={["h-[90.09px]", "w-[200px]"]}>
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
        data-name="image 13"
        style={{ backgroundImage: `url('${imgImage14}')` }}
      />
    </BackgroundImage41>
  );
}
type DescriptionBackgroundImageAndTextProps = {
  text: string;
};

function DescriptionBackgroundImageAndText({
  text,
}: DescriptionBackgroundImageAndTextProps) {
  return <BackgroundImage11>{text}</BackgroundImage11>;
}

function License() {
  return (
    <BackgroundImage41 additionalClassNames={["h-[102px]", "w-[200px]"]}>
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
        data-name="image 10"
        style={{ backgroundImage: `url('${imgImage10}')` }}
      />
    </BackgroundImage41>
  );
}

function Component2() {
  return (
    <ComponentBackgroundImage>
      <License />
      <DescriptionBackgroundImageAndText text="데이터분석 준전문가(ADsP)" />
    </ComponentBackgroundImage>
  );
}

function License1() {
  return (
    <BackgroundImage41 additionalClassNames={["h-[104.727px]", "w-[200px]"]}>
      <div
        className="[background-size:130.18%_134.03%] absolute bg-[50%_50%] bg-no-repeat inset-0"
        data-name="image 9"
        style={{ backgroundImage: `url('${imgImage9}')` }}
      />
    </BackgroundImage41>
  );
}

function Component3() {
  return (
    <ComponentBackgroundImage>
      <License1 />
      <DescriptionBackgroundImageAndText text="SQL개발자(SQLD)" />
    </ComponentBackgroundImage>
  );
}

function License2() {
  return (
    <BackgroundImage41 additionalClassNames={["h-[36.463px]", "w-[200px]"]}>
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
        data-name="image 12"
        style={{
          backgroundImage: `url('${imgImage12}'), url('${imgImage13}')`,
        }}
      />
    </BackgroundImage41>
  );
}

function Component4() {
  return (
    <ComponentBackgroundImage>
      <License2 />
      <DescriptionBackgroundImageAndText text="컴퓨터활용능력 1급" />
    </ComponentBackgroundImage>
  );
}

function License3() {
  return (
    <BackgroundImage41 additionalClassNames={["h-[93.24px]", "w-[200px]"]}>
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
        data-name="image 11"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
    </BackgroundImage41>
  );
}

function Description3() {
  return <BackgroundImage11>{` GTQ 그래픽기술자격 1급`}</BackgroundImage11>;
}

function Component7() {
  return (
    <ComponentBackgroundImage>
      <License3 />
      <Description3 />
    </ComponentBackgroundImage>
  );
}

function Component5() {
  return (
    <ComponentBackgroundImage>
      <LicenseBackgroundImage />
      <DescriptionBackgroundImageAndText text="ERP 인사 정보관리사 1급" />
    </ComponentBackgroundImage>
  );
}

function Component6() {
  return (
    <ComponentBackgroundImage>
      <LicenseBackgroundImage />
      <DescriptionBackgroundImageAndText text="ERP 회계 정보관리사 1급" />
    </ComponentBackgroundImage>
  );
}

export default function ContentContainer() {
  return (
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
  );
}
import imgImage10 from "figma:asset/c6942f31ec2757acf1425d016712b09f4948a363.png";

function License() {
  return (
    <div className="h-[102px] relative shrink-0 w-[200px]" data-name="license">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
        data-name="image 10"
        style={{ backgroundImage: `url('${imgImage10}')` }}
      />
    </div>
  );
}

function Description() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.56)] left-0 top-[104px] w-[276px]"
      data-name="Description"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-4 py-3 relative w-[276px]">
          <div className="css-ewqoos font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              데이터분석 준전문가(ADsP)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component2() {
  return (
    <div className="relative rounded size-full" data-name="Component 2">
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-col items-center justify-between p-0 relative size-full">
        <License />
        <Description />
      </div>
    </div>
  );
}
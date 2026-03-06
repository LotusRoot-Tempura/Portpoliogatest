import clsx from "clsx";
type Wrapper2Props = {
  additionalClassNames?: string[];
};

function Wrapper2({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <ul className={clsx("css-ed5n1g list-disc", additionalClassNames)}>
      {children}
    </ul>
  );
}
type ClickableInfoContentTextProps = {
  text: string;
};

function ClickableInfoContentText({ text }: ClickableInfoContentTextProps) {
  return (
    <li
      style={{
        marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
      }}
      className="css-ihls9j mb-0"
    >
      <span className="adjustLetterSpacing font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] not-italic text-[16px] font-[Pretendard]">
        {text}
      </span>
    </li>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <li
      style={{
        marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
      }}
      className="css-ihls9j mb-0"
    >
      <span className="adjustLetterSpacing font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] not-italic text-[#58595c] text-[14px] font-[Pretendard]">
        {text}
      </span>
    </li>
  );
}
type ClickableInfoContentHelperProps = {
  text: string;
  text1: string;
};

function ClickableInfoContentHelper({
  text,
  text1,
}: ClickableInfoContentHelperProps) {
  return (
    <ul className="css-ed5n1g list-disc mb-0">
      <Text text={text} />
      <Text text={text1} />
    </ul>
  );
}

function ClickableInfoContent() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Clickable Info Content"
    >
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative size-full">
        <div
          className="css-rt3fn7 font-['Pretendard:Medium',_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#0f0f0f] text-[0px] text-left tracking-[-0.64px]"
          style={{ width: "min-content" }}
        >
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-0 text-[20px] font-[Pretendard]">
            1. 주요 업무
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-0 text-[16px] font-[Pretendard]">
            1) 시원스쿨 웹/앱 신규 구축 및 리뉴얼
          </p>
          <ClickableInfoContentHelper
            text="시원스쿨 플러스 앱, 통합 회원 사이트 등 6건의 프로젝트 진행"
            text1="디자이너 및 개발자와 협업하여 프로젝트 일정 전반 관리"
          />
          <p className="adjustLetterSpacing block leading-[1.6] mb-0 text-[14px]">
            &nbsp;
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-0 text-[16px] font-[Pretendard]">
            2) 협업 툴 시범 도입 및 프로젝트 QA 주관
          </p>
          <Wrapper2 additionalClassNames={["mb-0"]}>
            <li
              className="css-ihls9j font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-0 not-italic text-[#58595c] text-[14px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-[Pretendard]">{`프로젝트 생산성 향상을 위한 협업 툴 조사 담당으로 지정되어 Asana, `}</span>
              <a
                className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pointer"
                href="http://Monday.com"
              >
                <span
                  className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] leading-[1.6] text-[#58595c] font-[Pretendard]"
                  href="http://Monday.com"
                >
                  Monday.com
                </span>
              </a>
              <span className="adjustLetterSpacing font-[Pretendard]">{` 등 협업 툴 시범 도입`}</span>
            </li>
            <Text text="프로젝트 관리 및 QA용 Notion 템플릿을 제작하여 부서 내 공식 채택" />
            <Text text="해당 Notion 템플릿 활용하여 4건의 프로젝트 QA 진행" />
          </Wrapper2>
          <p className="adjustLetterSpacing block leading-[1.6] mb-0 text-[14px]">
            &nbsp;
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-0 text-[16px] font-[Pretendard]">
            3) 각 사업부 협업 및 운영 업무 진행
          </p>
          <ClickableInfoContentHelper
            text="사업부 요청사항 및 VoC에 따른 웹/앱 개선안 작성"
            text1="마케터, PD, CS 담당 등 다양한 실무자와 소통하며 16건의 운영 업무 주관"
          />
          <p className="adjustLetterSpacing block leading-[1.6] mb-0 text-[20px]">
            &nbsp;
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-0 text-[20px] font-[Pretendard]">
            2. 성과
          </p>
          <Wrapper2>
            <ClickableInfoContentText text="1) 담당 프로젝트 지표(체류시간, 이탈률 등)들의 유의미한 개선 확인" />
            <ClickableInfoContentText text="2) 2024년 종무식 [올해의 슈퍼루키]상 수상" />
          </Wrapper2>
        </div>
      </div>
    </div>
  );
}

export default function ClickableInfoContainer() {
  return (
    <div className="relative size-full" data-name="Clickable Info Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2 py-3 relative size-full">
          <ClickableInfoContent />
        </div>
      </div>
    </div>
  );
}
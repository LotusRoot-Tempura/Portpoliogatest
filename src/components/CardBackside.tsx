import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import svgPaths from "../imports/svg-37lfpvd7fm";
import ImportedClickableInfo from "../imports/ClickableInfoContainer";
// Import CertificationsContent from its own file
import { CertificationsContent } from "./CertificationsContent";
// Import ActivitiesCarousel for Activities tab
import { ActivitiesCarousel } from "./ActivitiesCarousel";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { trackGaEvent } from "../utils/analytics";

// Import Education CardHeaders
import KnouEducationHeader from "../imports/CardHeader";
import DonggukEducationHeader from "../imports/CardHeader-51-282";
import ByeongjeomEducationHeader from "../imports/CardHeader-51-301";

// Import ImageWithFallback for better image handling
import { ImageWithFallback } from './figma/ImageWithFallback';
// Import StandardThumbnail for consistent logo display
import { StandardThumbnail } from './StandardThumbnail';

// Company logo URLs
const companyLogos = {
  sjw: "https://i.imgur.com/TlV2sLU.png",
  airforce: "https://i.imgur.com/MryMtPX.png", 
  vingle: "https://i.imgur.com/84Qy3pW.png"
};

// Education institution logo URLs
const educationLogos = {
  knou: "https://i.imgur.com/2reY49S.png",
  dongguk: "https://i.imgur.com/M1n7vUW.png",
  byeongjeom: "https://i.imgur.com/GT8eyiJ.png"
};

// Animation variants for content transitions
const contentVariants = {
  initial: { 
    opacity: 0,
    scale: 0.98,
    y: 10
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

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

// Component definitions based on the Figma import
function CompanyInfoContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function JobDetailsContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function TabButtonContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative">
        {children}
      </div>
    </div>
  );
}

function JobDurationContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] font-normal gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[14px] text-left text-nowrap tracking-[-0.56px]">
        {children}
      </div>
    </div>
  );
}

type CardWrapperProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};

function CardWrapper({ children, isSelected = false, onClick }: CardWrapperProps) {
  return (
    <div 
      className="relative rounded-lg shrink-0 w-full transition-all duration-200 cursor-pointer"
      onClick={onClick}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isSelected ? '#60A5FA' : '#e9eaeb',
        background: isSelected ? 'var(--primary-line, #DBECFF)' : 'transparent',
        transition: 'border-color 0.2s ease, background 0.2s ease'
      }}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#DBECFF';
        }
      }}
      onMouseOut={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#e9eaeb';
        }
      }}
    >
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

type CardHeaderContainerProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};

function CardHeaderContainer({ children, isSelected = false, onClick }: CardHeaderContainerProps) {
  return (
    <CardWrapper isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row gap-5 items-center p-[16px] self-stretch rounded-lg w-full">
        {children}
      </div>
    </CardWrapper>
  );
}

type TextElementProps = {
  text: string;
};

function JobDetailText({ text }: TextElementProps) {
  return (
    <div className="relative shrink-0">
      <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre font-[Pretendard] text-[14px]">
        {text}
      </p>
    </div>
  );
}

function CompanyName({ text }: TextElementProps) {
  return (
    <div className="relative shrink-0 text-left text-nowrap">
      <p 
        className="adjustLetterSpacing block leading-[normal] whitespace-pre not-italic"
        style={{
          color: 'var(--Black-950, #0F0F0F)',
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          letterSpacing: '-0.8px'
        }}
      >
        {text}
      </p>
    </div>
  );
}

type JobTitleContainerProps = {
  title: string;
  divider: string;
  department: string;
};

function JobTitleContainer({
  title,
  divider,
  department,
}: JobTitleContainerProps) {
  return (
    <JobDurationContainer>
      <JobDetailText text={title} />
      <JobDetailText text={divider} />
      <JobDetailText text={department} />
    </JobDurationContainer>
  );
}

type JobDatesProps = {
  startDate: string;
  endDate: string;
  duration: string;
};

function JobDates({ startDate, endDate, duration }: JobDatesProps) {
  return (
    <JobDurationContainer>
      <JobDetailText text={startDate} />
      <JobDetailText text="~" />
      <JobDetailText text={endDate} />
      <JobDetailText text={duration} />
    </JobDurationContainer>
  );
}

// Company 1 Components
function JobDetails1() {
  return (
    <JobDetailsContainer>
      <JobTitleContainer 
        title="UX기획자" 
        divider="|" 
        department="UX실" 
      />
      <JobDates 
        startDate="2024.03" 
        endDate="재직 중" 
        duration="(1년 3개월)" 
      />
    </JobDetailsContainer>
  );
}

function CompanyInfo1() {
  return (
    <CompanyInfoContainer>
      <CompanyName text="(주)에스제이더블유인터내셔널" />
      <JobDetails1 />
    </CompanyInfoContainer>
  );
}

function CardHeader1({ isSelected = false, onClick }: { isSelected?: boolean; onClick?: () => void }) {
  return (
    <CardHeaderContainer isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <StandardThumbnail 
          imageSrc={companyLogos.sjw}
          alt="(주)에스제이더블유인터내셔널 로고"
        />
      </div>
      <CompanyInfo1 />
    </CardHeaderContainer>
  );
}

// Company 2 Components
function JobDetails2() {
  return (
    <JobDetailsContainer>
      <JobTitleContainer 
        title="인사교육 장교(중위)" 
        divider="|" 
        department="제6탐색구조비행전대" 
      />
      <JobDates 
        startDate="2020.06" 
        endDate="2023.05" 
        duration="(3년)" 
      />
    </JobDetailsContainer>
  );
}

function CompanyInfo2() {
  return (
    <CompanyInfoContainer>
      <CompanyName text="대한민국 공군" />
      <JobDetails2 />
    </CompanyInfoContainer>
  );
}

function CardHeader2({ isSelected = false, onClick }: { isSelected?: boolean; onClick?: () => void }) {
  return (
    <CardHeaderContainer isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <StandardThumbnail 
          imageSrc={companyLogos.airforce}
          alt="대한민국 공군 로고"
        />
      </div>
      <CompanyInfo2 />
    </CardHeaderContainer>
  );
}

// Company 3 Components
function JobDetails3() {
  return (
    <JobDetailsContainer>
      <JobTitleContainer 
        title="인턴" 
        divider="|" 
        department="커뮤니티/마케팅 팀" 
      />
      <JobDates 
        startDate="2019.01" 
        endDate="2019.10" 
        duration="(10개월)" 
      />
    </JobDetailsContainer>
  );
}

function CompanyInfo3() {
  return (
    <CompanyInfoContainer>
      <CompanyName text="빙글(Vingle)" />
      <JobDetails3 />
    </CompanyInfoContainer>
  );
}

function CardHeader3({ isSelected = false, onClick }: { isSelected?: boolean; onClick?: () => void }) {
  return (
    <CardHeaderContainer isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <StandardThumbnail 
          imageSrc={companyLogos.vingle}
          alt="빙글(Vingle) 로고"
        />
      </div>
      <CompanyInfo3 />
    </CardHeaderContainer>
  );
}

// Education Tab Components - Custom implementations to fix image issues
function EducationJobDetails1() {
  return (
    <JobDetailsContainer>
      <JobTitleContainer 
        title="대학교(학사)" 
        divider="|" 
        department="통계·데이터과학과" 
      />
      <JobDates 
        startDate="2025.03" 
        endDate="재학 중" 
        duration="" 
      />
    </JobDetailsContainer>
  );
}

function EducationCompanyInfo1() {
  return (
    <CompanyInfoContainer>
      <CompanyName text="국립한국방송통신대학교" />
      <EducationJobDetails1 />
    </CompanyInfoContainer>
  );
}

function EducationCardHeader1({ isSelected = false, onClick }: { isSelected?: boolean; onClick?: () => void }) {
  return (
    <CardHeaderContainer isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <StandardThumbnail 
          imageSrc={educationLogos.knou}
          alt="국립한국방송통신대학 로고"
        />
      </div>
      <EducationCompanyInfo1 />
    </CardHeaderContainer>
  );
}

function EducationJobDetails2() {
  return (
    <JobDetailsContainer>
      <JobTitleContainer 
        title="대학교(학사)" 
        divider="|" 
        department="사회언론정보학부 사회학전공" 
      />
      <JobDates 
        startDate="2015.03" 
        endDate="2020.02" 
        duration="" 
      />
    </JobDetailsContainer>
  );
}

function EducationCompanyInfo2() {
  return (
    <CompanyInfoContainer>
      <CompanyName text="동국대학교 서울캠퍼스" />
      <EducationJobDetails2 />
    </CompanyInfoContainer>
  );
}

function EducationCardHeader2({ isSelected = false, onClick }: { isSelected?: boolean; onClick?: () => void }) {
  return (
    <CardHeaderContainer isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <StandardThumbnail 
          imageSrc={educationLogos.dongguk}
          alt="동국대학교 서울캠퍼스 로고"
        />
      </div>
      <EducationCompanyInfo2 />
    </CardHeaderContainer>
  );
}

function EducationJobDetails3() {
  return (
    <JobDetailsContainer>
      <JobTitleContainer 
        title="고등학교" 
        divider="|" 
        department="인문계" 
      />
      <JobDates 
        startDate="2012.03" 
        endDate="2015.02" 
        duration="" 
      />
    </JobDetailsContainer>
  );
}

function EducationCompanyInfo3() {
  return (
    <CompanyInfoContainer>
      <CompanyName text="병점고등학교" />
      <EducationJobDetails3 />
    </CompanyInfoContainer>
  );
}

function EducationCardHeader3({ isSelected = false, onClick }: { isSelected?: boolean; onClick?: () => void }) {
  return (
    <CardHeaderContainer isSelected={isSelected} onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <StandardThumbnail 
          imageSrc={educationLogos.byeongjeom}
          alt="병점고등학교 로고"
        />
      </div>
      <EducationCompanyInfo3 />
    </CardHeaderContainer>
  );
}

// Career Tab Card Container
function CareerCardContainer({ 
  selectedCard, 
  onCardClick 
}: { 
  selectedCard: number | null; 
  onCardClick: (cardIndex: number) => void;
}) {
  return (
    <div className="w-[380px] h-full shrink-0" data-name="Card Container">
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 h-full w-full overflow-y-auto overflow-x-hidden">
        <CardHeader1 
          isSelected={selectedCard === 0} 
          onClick={() => onCardClick(0)} 
        />
        <CardHeader2 
          isSelected={selectedCard === 1} 
          onClick={() => onCardClick(1)} 
        />
        <CardHeader3 
          isSelected={selectedCard === 2} 
          onClick={() => onCardClick(2)} 
        />
      </div>
    </div>
  );
}

// Education Tab Card Container - Using custom components to fix image issues
function EducationCardContainer({ 
  selectedCard, 
  onCardClick 
}: { 
  selectedCard: number | null; 
  onCardClick: (cardIndex: number) => void;
}) {
  return (
    <div className="w-[380px] h-full shrink-0" data-name="Education Card Container">
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 h-full w-full overflow-y-auto overflow-x-hidden">
        <EducationCardHeader1 
          isSelected={selectedCard === 0} 
          onClick={() => onCardClick(0)} 
        />
        <EducationCardHeader2 
          isSelected={selectedCard === 1} 
          onClick={() => onCardClick(1)} 
        />
        <EducationCardHeader3 
          isSelected={selectedCard === 2} 
          onClick={() => onCardClick(2)} 
        />
      </div>
    </div>
  );
}

function ClickIcon() {
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

function DefaultClickableInfoContent() {
  return (
    <motion.div
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full flex flex-col items-center justify-center"
      data-name="Clickable Info Content"
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <ClickIcon />
        <div
          className="font-['Pretendard:Medium',_sans-serif] font-medium leading-[normal] not-italic text-[#939499] text-[16px] text-center tracking-[-0.64px]"
        >
          <p className="adjustLetterSpacing block mb-0 font-[Pretendard]">카드를 클릭하시면</p>
          <p className="adjustLetterSpacing block font-[Pretendard]">
            자세한 설명을 확인하실 수 있어요
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Career detailed content
function Company1Content() {
  return (
    <motion.div 
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="p-4 h-full overflow-y-auto overflow-x-hidden max-h-[450px]">
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-normal w-full not-italic text-[#0f0f0f] text-left tracking-[-0.64px]">
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            1. 주요 업무
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            1) 시원스쿨 웹/앱 신규 구축 및 리뉴얼
          </p>
          <ul className="list-none mb-4 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">시원스쿨 플러스 앱, 통합 회원 사이트 등 6건의 프로젝트 진행</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">디자이너 및 개발자와 협업하여 프로젝트 일정 전반 관리</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            2) 협업 툴 시범 도입 및 프로젝트 QA 주관
          </p>
          <ul className="list-none mb-4 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">프로젝트 생산성 향상을 위한 협업 툴 조사 담당으로 지정되어 Asana, Monday.com 등 협업 툴 시범 도입</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">프로젝트 관리 및 QA용 Notion 템플릿을 제작하여 부서 내 공식 채택</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">해당 Notion 템플릿 활용하여 4건의 프로젝트 QA 진행</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            3) 각 사업부 협업 및 운영 업무 진행
          </p>
          <ul className="list-none mb-6 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">사업부 요청사항 및 VoC에 따른 웹/앱 개선안 작성</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">마케터, PD, CS 담당 등 다양한 실무자와 소통하며 16건의 운영 업무 주관</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            2. 성과
          </p>
          <ul className="list-none pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]">1) 담당 프로젝트 지표(체류시간, 이탈률 등)들의 유의미한 개선 확인</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]">2) 2024년 종무식 [올해의 슈퍼루키]상 수상</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Company2Content() {
  return (
    <motion.div 
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="p-4 h-full overflow-y-auto overflow-x-hidden max-h-[450px]">
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-normal w-full not-italic text-[#0f0f0f] text-left tracking-[-0.64px]">
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            1. 주요 업무
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            1) 부대 인사 관리 담당
          </p>
          <ul className="list-none mb-4 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">부대 내 전 계급의 진급, 전역, 근무 평정, 인사 이동 등 전반적인 인사 업무 총괄</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">유관 부서 및 상급자와의 업무 협조 및 예하 부대 업무 관리 경험 다수</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">월 평균 10회 심의 위원회 주관 및 연간 1,300여 건 문서 담당</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            2) 부대원 교육 관리 담당
          </p>
          <ul className="list-none mb-4 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">연간 간부/병 필수 교육 이수 관리 및 직접 교육 주관</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">각종 훈련 시 사전 교육과 브리핑을 통해 원활한 훈련 수행</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">전/평시 교육 자료 상시 최신화 및 예하 부대 업무 공유</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            3) 행정 예산 관리 및 집행
          </p>
          <ul className="list-none mb-6 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">군 외 교육 및 해외 출장 등 관련 예산 심의 주관과 제반 업무</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">예하 부대 복지 시설 증축/교체 등 예산 집행</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            2. 성과
          </p>
          <ul className="list-none pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]"> 1) 철저한 상급 부대 검열 대비로 당해년도 우수 검열 부대 선정</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]">2) 2023년도 성과 상여금 및 근무 평정에서 최고 등급인 S 등급 획득</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Company3Content() {
  return (
    <motion.div 
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="p-4 h-full overflow-y-auto overflow-x-hidden max-h-[450px]">
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-normal w-full not-italic text-[#0f0f0f] text-left tracking-[-0.64px]">
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            1. 주요 업무
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            1) 커뮤니티 서비스 운영 관리
          </p>
          <ul className="list-none mb-4 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">커뮤니티 서비스 운영 정책 수립 및 개정 담당</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">서비스 정책에 따른 전반적인 커뮤니티 운영 관리</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">연간 200여 건의 VoC(Voice of Customer) 분석 후 프로덕트 팀 인계</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            2) 이벤트/마케팅 기획
          </p>
          <ul className="list-none mb-6 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">유저 친화적 이벤트 기획으로 Retention 및 콘텐츠 생산 독려</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">서비스 내 콘텐츠 대상 인스타그램, 페이스북 마케팅 진행</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">자체 콘텐츠 제작 및 지표 분석을 통해 서비스 활성화 전략 수립</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            2. 성과
          </p>
          <ul className="list-none pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]">1) 프로덕트 팀과 연계하여 각종 버그 픽스 및 사용성 향상을 위한 개선 업무 등에 기여</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]">2) 신규 유저 대상 온보딩 웹툰을 직접 제작하여 조회수 100,000 이상 기록하며 사용자 경험 향상에 직/간접적 기여</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[16px]">
              <span className="adjustLetterSpacing font-[Pretendard]">3) 각종 이벤트 및 마케팅을 통해 관련 지표의 유의미한 상승</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// Education detailed content
function KnouEducationContent() {
  return (
    <motion.div 
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="p-4 h-full overflow-y-auto overflow-x-hidden max-h-[450px]">
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-normal w-full not-italic text-[#0f0f0f] text-left tracking-[-0.64px]">
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            교육 정보
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            전공: 통계·데이터과학과 (학사)
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-4 text-[16px] font-[Pretendard]">
            재학 기간: 2025.03 ~ 현재
          </p>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-3 text-[18px] font-[Pretendard]">
            주요 학습 내용
          </p>
          <ul className="list-none mb-6 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 통계학 기초 이론 및 데이터과학 일반</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 데이터 분석 및 시각화</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 빅데이터 처리 및 머신러닝</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• R, Python을 활용한 통계 프로그래밍</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 컴퓨터과학과 복수 전공을 위한 HTML, JAVA 프로그래밍 등 수강</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function DonggukEducationContent() {
  return (
    <motion.div 
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="p-4 h-full overflow-y-auto overflow-x-hidden max-h-[450px]">
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-normal w-full not-italic text-[#0f0f0f] text-left tracking-[-0.64px]">
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            교육 정보
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            전공: 사회언론정보학부 사회학전공 (학사)
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-4 text-[16px] font-[Pretendard]">
            재학기간: 2015.03 ~ 2020.02
          </p>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-3 text-[18px] font-[Pretendard]">
            주요 학습 내용
          </p>
          <ul className="list-none mb-6 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 사회학 이론 및 연구방법론 일반</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 각종 사회 현상의 통계학적 접근과 분석 역량 향상</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-3 text-[18px] font-[Pretendard]">
            주요 활동
          </p>
          <ul className="list-none pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 졸업논문: 성소수자 혐오와 사회적 자본의 상관관계</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 성소수자 집단 내외의 혐오 양상을 분석을 위한 R Studio 텍스트 마이닝</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 온라인 콘텐츠, 커뮤니티 내 등장 키워드 수합 및 감정 분석으로 집단 간 사회적 자본 유무 분석</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ByeongjeomEducationContent() {
  return (
    <motion.div 
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <div className="p-4 h-full overflow-y-auto overflow-x-hidden max-h-[450px]">
        <div className="font-['Pretendard:Medium',_sans-serif] font-medium leading-normal w-full not-italic text-[#0f0f0f] text-left tracking-[-0.64px]">
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-4 text-[20px] font-[Pretendard]">
            교육 정보
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 text-[16px] font-[Pretendard]">
            과정: 인문계 고등학교
          </p>
          <p className="adjustLetterSpacing block font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-4 text-[16px] font-[Pretendard]">
            재학기간: 2012.03 ~ 2015.02
          </p>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-3 text-[18px] font-[Pretendard]">
            주요 교육과정
          </p>
          <ul className="list-none mb-6 pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 인문계 교육과정 이수</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 논리적 사고력 및 문제해결 능력 배양</span>
            </li>
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 대학 진학을 위한 학업 기반 마련</span>
            </li>
          </ul>
          
          <p className="adjustLetterSpacing block font-['Pretendard:Bold',_sans-serif] font-bold leading-[1.6] mb-3 text-[18px] font-[Pretendard]">
            주요 활동
          </p>
          <ul className="list-none pl-4">
            <li className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[1.6] mb-2 not-italic text-[#58595c] text-[14px]">
              <span className="adjustLetterSpacing font-[Pretendard]">• 2년간 교지편집부 활동을 통해 학내 소식 및 기획 주제 선정, 기사 원고 작성 및 교정 업무</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// Career Clickable Info Container
function CareerClickableInfoContainer({ selectedCard }: { selectedCard: number | null }) {
  return (
    <div
      className="flex-1 h-full"
      style={{ minWidth: "450px" }}
      data-name="Clickable Info Container"
    >
      <div className="h-full w-full bg-white rounded-lg border border-[#e9eaeb] overflow-hidden">
        <div className="w-full h-full">
          <AnimatePresence mode="wait">
            {selectedCard === null && <DefaultClickableInfoContent key="default" />}
            {selectedCard === 0 && <Company1Content key="company1" />}
            {selectedCard === 1 && <Company2Content key="company2" />}
            {selectedCard === 2 && <Company3Content key="company3" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Education Clickable Info Container
function EducationClickableInfoContainer({ selectedCard }: { selectedCard: number | null }) {
  return (
    <div
      className="flex-1 h-full"
      style={{ minWidth: "450px" }}
      data-name="Education Clickable Info Container"
    >
      <div className="h-full w-full bg-white rounded-lg border border-[#e9eaeb] overflow-hidden">
        <div className="w-full h-full">
          <AnimatePresence mode="wait">
            {selectedCard === null && <DefaultClickableInfoContent key="default" />}
            {selectedCard === 0 && <KnouEducationContent key="knou" />}
            {selectedCard === 1 && <DonggukEducationContent key="dongguk" />}
            {selectedCard === 2 && <ByeongjeomEducationContent key="byeongjeom" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Career Content Container
function CareerContentContainer() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  
  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex === selectedCard ? null : cardIndex);
  };
  
  return (
    <div
      className="w-full h-full"
      data-name="Career Content Container"
    >
      <div className="w-full h-full flex flex-row gap-6">
        <CareerCardContainer selectedCard={selectedCard} onCardClick={handleCardClick} />
        <CareerClickableInfoContainer selectedCard={selectedCard} />
      </div>
    </div>
  );
}

// Education Content Container
function EducationContentContainer() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  
  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex === selectedCard ? null : cardIndex);
  };
  
  return (
    <div
      className="w-full h-full"
      data-name="Education Content Container"
    >
      <div className="w-full h-full flex flex-row gap-6">
        <EducationCardContainer selectedCard={selectedCard} onCardClick={handleCardClick} />
        <EducationClickableInfoContainer selectedCard={selectedCard} />
      </div>
    </div>
  );
}

// Placeholder content for other tabs
function ActivitiesContent() {
  return (
    <motion.div
      variants={tabVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <ActivitiesCarousel />
    </motion.div>
  );
}

function ProjectsContent() {
  return (
    <motion.div
      variants={tabVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <ProjectsCarousel />
    </motion.div>
  );
}

function CareerContent() {
  return (
    <motion.div
      variants={tabVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <CareerContentContainer />
    </motion.div>
  );
}

function EducationContent() {
  return (
    <motion.div
      variants={tabVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      <EducationContentContainer />
    </motion.div>
  );
}

type TabButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

function TabButton({ text, isActive, onClick }: TabButtonProps) {
  if (isActive) {
    return (
      <div 
        className="relative shrink-0 cursor-pointer" 
        data-name="Container"
        onClick={onClick}
      >
        <div className="absolute border-[#000000] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
        <TabButtonContainer>
          <div className="relative shrink-0 text-left text-nowrap">
            <p className="adjustLetterSpacing block whitespace-pre text-[#131416] font-[Pretendard] text-[16px] font-bold leading-[140%] tracking-[-0.15px] not-italic">
              {text}
            </p>
          </div>
        </TabButtonContainer>
      </div>
    );
  }
  
  return (
    <div 
      className="relative shrink-0 cursor-pointer hover:opacity-75 transition-opacity"
      onClick={onClick}
    >
      <TabButtonContainer>
        <div className="font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#58616a] text-left text-nowrap tracking-[-0.15px]">
          <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre font-[Pretendard] text-[16px]">
            {text}
          </p>
        </div>
      </TabButtonContainer>
    </div>
  );
}

function MainContent() {
  const [activeTab, setActiveTab] = useState<string>("Career");

  const handleTabClick = (nextTab: string) => {
    const wasActive = activeTab === nextTab;

    setActiveTab(nextTab);
    trackGaEvent("portfolio_tab_click", {
      tab_name: nextTab === "Certifications" ? "Certification" : nextTab,
      tab_key: nextTab.toLowerCase(),
      was_active: wasActive,
      ui_surface: "card_backside",
    });
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case "Career":
        return <CareerContent key="career" />;
      case "Education":
        return <EducationContent key="education" />;
      case "Projects":
        return <ProjectsContent key="projects" />;
      case "Activities":
        return <ActivitiesContent key="activities" />;
      case "Certifications":
        return <CertificationsContent key="certifications" />;
      default:
        return <CareerContent key="career" />;
    }
  };
  
  return (
    <div
      className="w-full h-full flex flex-col"
      data-name="Main Content Container"
    >
      <div className="flex-none mb-6">
        <div className="flex flex-row gap-2 items-center">
          <TabButton 
            text="Career" 
            isActive={activeTab === "Career"}
            onClick={() => handleTabClick("Career")}
          />
          <TabButton 
            text="Education" 
            isActive={activeTab === "Education"}
            onClick={() => handleTabClick("Education")}
          />
          <TabButton 
            text="Projects" 
            isActive={activeTab === "Projects"}
            onClick={() => handleTabClick("Projects")}
          />
          <TabButton 
            text="Activities" 
            isActive={activeTab === "Activities"}
            onClick={() => handleTabClick("Activities")}
          />
          <TabButton 
            text="Certifications" 
            isActive={activeTab === "Certifications"}
            onClick={() => handleTabClick("Certifications")}
          />
        </div>
      </div>
      
      <div className="flex-1 h-[calc(100%-60px)]">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CardBackside() {
  return (
    <div
      className="bg-[#ffffff] h-[623px] rounded-[20px] w-[996px] overflow-hidden shadow-lg"
      data-name="Profile Container"
    >
      <div className="h-full w-full">
        <div className="h-full px-16 py-10">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

// Export the component properly
export { CardBackside };

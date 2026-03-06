import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Project card data for 5 projects (keeping as-is per user request)
const projectsData = [
  {
    id: 5,
    title: "[시원스쿨 플러스] 스터디 서비스 리뉴얼",
    type: "(주)에스제이더블유인터내셔널",
    company: "기획/PM/QA (100%)",
    startDate: "2024.04",
    endDate: "2024.08",
    image: "https://i.imgur.com/rWoSEBZ.png"
  },
  {
    id: 1,
    title: "[시원스쿨 멤버스] 로그인/회원가입/마이페이지 리뉴얼",
    type: "(주)에스제이더블유인터내셔널",
    company: "기획/PM/QA (100%)",
    startDate: "2025.02",
    endDate: "진행중",
    image: "https://i.imgur.com/0lkgIoN.png"
  },
  {
    id: 4,
    title: "[시원스쿨 플러스] 앱 푸시 발송 admin 메뉴 구축",
    type: "(주)에스제이더블유인터내셔널",
    company: "기획/PM/QA (100%)",
    startDate: "2024.06",
    endDate: "2024.08",
    image: "https://i.imgur.com/mgQd9nd.png"
  },
  {
    id: 2,
    title: "[시원스쿨] 전사 통합 환급 웹/앱 및 admin 메뉴 구축",
    type: "(주)에스제이더블유인터내셔널",
    company: "기획/PM/QA (100%)",
    startDate: "2024.08",
    endDate: "2025.04",
    image: "https://i.imgur.com/qFbfkQy.png"
  },
  {
    id: 3,
    title: "[시원스쿨] 기초영어 사이트 수강신청 리뉴얼",
    type: "(주)에스제이더블유인터내셔널",
    company: "기획/PM/QA (100%)",
    startDate: "2024.12",
    endDate: "2024.12",
    image: "https://i.imgur.com/6YAwBse.png"
  }
];

// External links for each project
const projectLinks = {
  1: "https://rumbling-chemistry-ee9.notion.site/209a1ba68cfa80ad842fcc7336b34567?source=copy_link", // 멤버스
  2: "https://rumbling-chemistry-ee9.notion.site/admin-209a1ba68cfa80778bb7d031ae39debb?source=copy_link", // 통합 환급
  3: "https://rumbling-chemistry-ee9.notion.site/209a1ba68cfa80ad84aec3c1723cd66e?source=copy_link", // 기초영어
  4: "https://rumbling-chemistry-ee9.notion.site/admin-209a1ba68cfa80b6a9a4f7e33a1799bf?source=copy_link", // 앱푸시 발송
  5: "https://rumbling-chemistry-ee9.notion.site/209a1ba68cfa80718939f0c1ac07dacd?source=copy_link"  // 스터디 리뉴얼
};

type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="css-srq0ww relative shrink-0">
      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre text-[#939499] font-[Pretendard] text-left">
        {text}
      </p>
    </div>
  );
}

type BackgroundImage1Props = {
  text: string;
  text1: string;
  text2: string;
};

function BackgroundImage1({ text, text1, text2 }: BackgroundImage1Props) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#939499] text-[16px] text-left text-nowrap tracking-[-0.64px]">
        <BackgroundImageAndText text={text} />
        <BackgroundImageAndText text={text1} />
        <BackgroundImageAndText text={text2} />
      </div>
    </div>
  );
}

type BackgroundImageProps = {
  additionalClassNames?: string[];
  onClick?: () => void;
  disabled?: boolean;
};

function ArrowButton({ additionalClassNames = [], onClick, disabled = false, direction }: BackgroundImageProps & { direction: 'left' | 'right' }) {
  return (
    <button
      className={clsx(
        "absolute z-10 h-[50px] w-12 transition-all duration-200",
        direction === 'left' ? "left-4" : "right-4",
        "top-1/2 -translate-y-1/2",
        disabled ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100 cursor-pointer",
        additionalClassNames
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="box-border content-stretch flex flex-row gap-1 h-[50px] items-center justify-start p-0 relative w-12">
        {direction === 'left' ? <IconarrowleftBackgroundImage /> : <RightArrowImage />}
      </div>
    </button>
  );
}

function IconarrowleftBackgroundImage() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 50"
      >
        <g id="icon/arrow-left">
          <rect
            fill="var(--fill-0, black)"
            fillOpacity="0.56"
            height="50"
            rx="24"
            width="48"
          />
          <path
            d="M30 37.5L18 25L30 12.5"
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function RightArrowImage() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 50"
      >
        <g id="icon/arrow-right">
          <rect
            fill="var(--fill-0, black)"
            fillOpacity="0.56"
            height="50"
            rx="24"
            width="48"
          />
          <path
            d="M18 37.5L30 25L18 12.5"
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function CompanyImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      className="aspect-[360/200] bg-gray-100 bg-center bg-cover relative shrink-0 w-full rounded-t-lg overflow-hidden"
      data-name="Company Image"
      style={{ 
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative size-full">
        <div className="aspect-[360/200] size-full" />
      </div>
    </div>
  );
}

function JobDetails({ type, company, startDate, endDate }: { type: string; company: string; startDate: string; endDate: string }) {
  return (
    <div className="relative shrink-0" data-name="Job Details">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
        <BackgroundImage1 text={type} text1="|" text2={company} />
        <BackgroundImage1 text={startDate} text1="~" text2={endDate} />
      </div>
    </div>
  );
}

function CompanyInfo({ title, type, company, startDate, endDate }: { 
  title: string; 
  type: string; 
  company: string; 
  startDate: string; 
  endDate: string; 
}) {
  return (
    <div
      className="flex-1 w-full bg-white"
      data-name="Company Info"
    >
      <div className="relative size-full">
        <div className="flex flex-col items-start justify-between px-4 py-2 relative size-full">
          <div className="w-full">
            <p className="text-[20px] font-semibold text-[#0f0f0f] tracking-[-0.8px] break-words leading-tight mb-2 max-w-[360px] font-[Pretendard] text-left">
              {title}
            </p>
          </div>
          <JobDetails type={type} company={company} startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, isActive, index, onClick }: { 
  project: typeof projectsData[0]; 
  isActive: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      className={clsx(
        "bg-white h-96 relative rounded-lg flex-shrink-0 w-[424px] mx-6 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shadow-md hover:shadow-lg",
        !isActive && "blur-[1px]"
      )}
      style={{
        opacity: isActive ? 1 : 0.7,
        transform: `scale(${isActive ? 1 : 0.92})`,
      }}
      data-name="Container"
      onClick={onClick}
    >
      <div className="overflow-hidden relative size-full bg-white rounded-lg">
        <div className="flex flex-col gap-4 h-96 items-start justify-start pb-5 pt-0 px-0 relative w-[424px]">
          <CompanyImage imageSrc={project.image} />
          <CompanyInfo 
            title={project.title}
            type={project.type}
            company={project.company}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        </div>
      </div>
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-lg" />
    </button>
  );
}

function Item({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="item"
    >
      <div
        className={clsx(
          "[grid-area:1_/_1] rounded-full transition-all duration-300 ease-in-out",
          isActive 
            ? "bg-blue-400 w-3 h-3 scale-110" 
            : "bg-[#bebfc2] w-2 h-2 scale-100"
        )}
        data-name={isActive ? "Active Dot" : "Inactive Dot"}
      />
    </div>
  );
}

function CarouselDot({ currentIndex, totalItems, onDotClick }: { 
  currentIndex: number; 
  totalItems: number; 
  onDotClick: (index: number) => void;
}) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="carousel__dot"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-2 relative w-full">
          {Array.from({ length: totalItems }, (_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className="relative rounded-[999px] shrink-0 transition-all duration-200 hover:scale-110 p-1"
            >
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
                <Item isActive={index === currentIndex} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (projectId: number) => {
    const url = projectLinks[projectId as keyof typeof projectLinks];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Calculate the transform value to center the current card
  // Card width: 424px + margin: 48px (24px each side) = 472px per card
  const cardWidth = 472; // 424px card + 48px margin (24px each side)
  const containerWidth = 1200; // Visible container width
  const centerOffset = containerWidth / 2.7; // container width / 2.7
  const cardCenter = cardWidth / 2; // Half of card width
  
  // Calculate translateX to center the current card with slight left adjustment
  const translateX = centerOffset - cardCenter - (currentIndex * cardWidth);

  return (
    <div className="relative size-full" data-name="Projects Carousel">
      <motion.div
        key="carousel"
        initial={{ opacity: 1 }}
        className="flex flex-col gap-5 items-center justify-center p-0 relative size-full"
      >
        
        {/* Main Carousel Container */}
        <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
          
          {/* Floating Arrow Buttons */}
          <ArrowButton 
            direction="left"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          />
          
          <ArrowButton 
            direction="right"
            onClick={handleNext}
            disabled={currentIndex === projectsData.length - 1}
          />
          
          {/* Sliding Cards Container */}
          <div className="w-[1200px] h-96 relative overflow-hidden flex items-center">
            <motion.div
              className="flex items-center h-96"
              animate={{
                x: translateX
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6
              }}
              style={{
                width: `${projectsData.length * cardWidth}px`,
              }}
            >
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={index === currentIndex}
                  index={index}
                  onClick={() => handleCardClick(project.id)}
                />
              ))}
            </motion.div>
          </div>
          
        </div>
        
        {/* Carousel Dots */}
        <CarouselDot 
          currentIndex={currentIndex} 
          totalItems={projectsData.length}
          onDotClick={handleDotClick}
        />
      </motion.div>
    </div>
  );
}
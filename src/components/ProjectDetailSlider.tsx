import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// 임시로 모든 프로젝트에 포텐데이 이미지 사용
const tempProjectImages = [
  "https://i.imgur.com/f6wmbJQ.png",
  "https://i.imgur.com/xlBjJTM.png", 
  "https://i.imgur.com/KjmZYjU.png",
  "https://i.imgur.com/rmtZnKZ.png"
];

type ProjectDetailSliderProps = {
  projectTitle: string;
  images: string[];
  onBack: () => void;
};

function IconArrowRight() {
  return (
    <div className="relative size-6" data-name="icon/arrow-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon/arrow-right">
          <path
            d="M8 20L16 12L8 4"
            id="Vector"
            stroke="var(--stroke-0, #1D1E1F)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Iconarrowright() {
  return (
    <div className="h-[50px] w-12">
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

function SliderHeader({ title, currentIndex, totalImages, onBack }: {
  title: string;
  currentIndex: number;
  totalImages: number;
  onBack: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-3 relative w-full">
          <button 
            className="flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={onBack}
          >
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <IconArrowRight />
            </div>
          </button>
          <div className="css-7pl7bl font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] text-center text-nowrap tracking-[-0.8px] max-w-[600px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre line-clamp-2 break-words font-[Pretendard] font-bold text-[20px] text-left">
              {title}
            </p>
          </div>
          <div className="css-srq0ww font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#939499] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre font-[Pretendard] text-left">
              {currentIndex + 1} / {totalImages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailSlider({ projectTitle, images, onBack }: ProjectDetailSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <motion.div 
      className="relative size-full" 
      data-name="Project Detail Slider"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center px-5 py-0 relative size-full max-w-[1000px]">
          
          {/* Header */}
          <SliderHeader 
            title={projectTitle}
            currentIndex={currentIndex}
            totalImages={images.length}
            onBack={onBack}
          />
          
          {/* Image Container with Navigation */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            
            {/* Left Arrow */}
            <button
              className={clsx(
                "absolute -left-6 z-10 transition-opacity duration-200",
                currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100 cursor-pointer"
              )}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <Iconarrowright />
              </div>
            </button>
            
            {/* Image */}
            <motion.div 
              className="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg border border-[#e9eaeb]"
              key={currentIndex}
              initial={{ opacity: 0.8, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={images[currentIndex]}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                style={{ 
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </motion.div>
            
            {/* Right Arrow */}
            <button
              className={clsx(
                "absolute -right-6 z-10 transition-opacity duration-200",
                currentIndex === images.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100 cursor-pointer"
              )}
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
            >
              <Iconarrowright />
            </button>
            
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

// 시원스쿨 멤버스 로그인/회원가입/마이페이지 리뉴얼
export function SiwonMembersDetailSlider({ onBack }: { onBack: () => void }) {
  return (
    <ProjectDetailSlider
      projectTitle="[시원스쿨 멤버스] 로그인/회원가입/마이페이지 리뉴얼"
      images={tempProjectImages}
      onBack={onBack}
    />
  );
}

// 시원스쿨 전사 통합 환급 웹/앱 및 admin 메뉴 구축
export function SiwonRefundDetailSlider({ onBack }: { onBack: () => void }) {
  return (
    <ProjectDetailSlider
      projectTitle="[시원스쿨] 전사 통합 환급 웹/앱 및 admin 메뉴 구축"
      images={tempProjectImages}
      onBack={onBack}
    />
  );
}

// 시원스쿨 기초영어 사이트 수강신청 리뉴얼
export function SiwonBasicEnglishDetailSlider({ onBack }: { onBack: () => void }) {
  return (
    <ProjectDetailSlider
      projectTitle="[시원스쿨] 기초영어 사이트 수강신청 리뉴얼"
      images={tempProjectImages}
      onBack={onBack}
    />
  );
}

// 시원스쿨 플러스 앱 푸시 발송 admin 메뉴 구축
export function SiwonPlusPushDetailSlider({ onBack }: { onBack: () => void }) {
  return (
    <ProjectDetailSlider
      projectTitle="[시원스쿨 플러스] 앱 푸시 발송 admin 메뉴 구축"
      images={tempProjectImages}
      onBack={onBack}
    />
  );
}

// 시원스쿨 플러스 스터디 서비스 리뉴얼
export function SiwonPlusStudyDetailSlider({ onBack }: { onBack: () => void }) {
  return (
    <ProjectDetailSlider
      projectTitle="[시원스쿨 플러스] 스터디 서비스 리뉴얼"
      images={tempProjectImages}
      onBack={onBack}
    />
  );
}
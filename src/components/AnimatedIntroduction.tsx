import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "../imports/svg-1k8crv7y2n";
import ChatGptImage from "../imports/ChatGptImage2025년6월2일오후0105481";
import clsx from "clsx";
import { RollingJobTitles } from "./RollingJobTitles";
import { ImprovedFoilEffect } from "./ImprovedFoilEffect";
import { BlinkingPlaceholderInput } from "./BlinkingPlaceholderInput";
import { CardBackside } from "./CardBackside";
import { FlipButton } from "./FlipButton";
import { SkillTooltip } from "./SkillTooltip";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

// Card flip variants for 3D right-to-left flip
const cardVariants = {
  front: { 
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  back: { 
    rotateY: 180,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Text transition variants
const textVariants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Component definitions from the Figma import - preserving exact styling
function BackgroundImage31({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

type BackgroundImage15Props = {
  additionalClassNames?: string[];
};

function BackgroundImage15({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("size-6", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}

type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string[];
  styleType?: "name" | "skill";
  tooltipContent?: string;
};

function BackgroundImageAndText3({
  text,
  additionalClassNames = [],
  styleType = "name",
  tooltipContent,
}: BackgroundImageAndText3Props) {
  // Define different style configurations based on the styleType
  const styles = {
    name: {
      color: "#111827",
      fontFamily: "'Noto Sans', sans-serif",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "-2.56px"
    },
    skill: {
      color: "var(--black-500, #939499)",
      fontFamily: "'Pretendard', sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.8px"
    }
  };

  // For name type, render without tooltip
  if (styleType === "name") {
    return (
      <div
        style={{ 
          fontVariationSettings: "'CTGR' 100, 'wdth' 100",
        }}
        className={clsx("relative shrink-0", additionalClassNames)}
      >
        <p 
          style={styles[styleType]}
          className="adjustLetterSpacing block text-nowrap whitespace-pre"
        >
          {text}
        </p>
      </div>
    );
  }

  // For skill type, render with tooltip and hover effects
  return (
    <SkillTooltip skillName={text} tooltipContent={tooltipContent}>
      <div
        style={{ 
          fontVariationSettings: "'CTGR' 100, 'wdth' 100",
        }}
        className={clsx(
          "relative shrink-0 inline-flex justify-center items-center gap-[10px] rounded-[100px] px-[12px] py-[4px] transition-all duration-200",
          "group-hover:bg-blue-400 border border-[#E9EAEB] group-hover:border-blue-400",
          "skill-badge",
          additionalClassNames
        )}
      >
        <p 
          style={{
            ...styles[styleType],
            transition: "color 0.2s ease-in-out"
          }}
          className="adjustLetterSpacing text-nowrap whitespace-pre group-hover:text-[#FAFAFA]"
        >
          {text}
        </p>
      </div>
    </SkillTooltip>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div
      style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
      className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#76767a] text-[24px] text-left text-nowrap tracking-[-0.96px]"
    >
      <p className="adjustLetterSpacing block leading-[1] whitespace-pre font-[Pretendard] text-[24px]">
        {text}
      </p>
    </div>
  );
}

// Text style for intro text parts
const introTextStyle = {
  color: "#FAFAFA",
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "40px",  // Maintaining large size for intro text
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "-3.2px"
};

function GreetingContainer() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      data-name="Greeting Container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-0 relative">
        <div className="relative shrink-0">
          <p 
            className="adjustLetterSpacing whitespace-pre text-[40px] font-semibold"
            style={introTextStyle}
          >
            안녕하세요
          </p>
        </div>
        <div
          className="h-2 shrink-0 w-full"
          data-name="Greeting Divider"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 196 8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(10.05 0 0 0.4102 98 4)\\'><stop stop-color=\\'rgba(250,250,250,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          }}
        />
      </div>
    </motion.div>
  );
}

// Animation states for the intro text
const ANIMATION_STATES = {
  INITIAL: "initial",   // Initial state with all parts together
  TRANSITIONING: "transitioning",  // Middle part is hidden, outer parts are moving
  FINAL: "final"        // New middle part is shown, all parts in final position
};

function IntroductionContainer() {
  const [animationState, setAnimationState] = useState(ANIMATION_STATES.INITIAL);
  
  useEffect(() => {
    // Start transition after 2.5s (extended for better readability)
    const transitionTimer = setTimeout(() => {
      setAnimationState(ANIMATION_STATES.TRANSITIONING);
    }, 2500);
    
    // Show final state with new middle text after 500ms from transition start
    const finalTimer = setTimeout(() => {
      setAnimationState(ANIMATION_STATES.FINAL);
    }, 3000); // 2500ms initial delay + 500ms for transition
    
    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(finalTimer);
    };
  }, []);
  
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      data-name="Introduction Container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-0 relative">
        <div className="relative flex items-center justify-center">
          <div className="flex flex-row items-center">
            {/* First part - underscores */}
            <motion.div
              animate={{
                x: animationState === ANIMATION_STATES.INITIAL ? 0 : -25,
                transition: { 
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }}
              className="flex items-center"
            >
              <p 
                className="adjustLetterSpacing whitespace-pre text-[40px] font-semibold"
                style={introTextStyle}
              >
                ______________
              </p>
            </motion.div>
            
            {/* Middle animated section */}
            <div className="relative h-[55px] flex items-center justify-center" style={{ minWidth: "280px" }}>
              {/* Initial middle text */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ 
                  opacity: animationState === ANIMATION_STATES.INITIAL ? 1 : 0,
                  transition: { duration: 0.4 }
                }}
                style={{ 
                  position: "absolute",
                  display: "flex",
                  alignItems: "center", 
                  justifyContent: "center"
                }}
              >
                <p 
                  className="adjustLetterSpacing whitespace-pre text-[40px] font-semibold"
                  style={introTextStyle}
                >
                  에서 근무하는
                </p>
              </motion.div>
              
              {/* Final middle text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: animationState === ANIMATION_STATES.FINAL ? 1 : 0,
                  transition: { duration: 0.2 }
                }}
                style={{ 
                  position: "absolute",
                  display: "flex",
                  alignItems: "center", 
                  justifyContent: "center"
                }}
              >
                <p 
                  className="adjustLetterSpacing whitespace-pre text-[40px] font-semibold"
                  style={introTextStyle}
                >
                  와 함께하고 싶은 
                </p>
              </motion.div>
            </div>
            
            {/* Last part - name */}
            <motion.div
              animate={{
                x: animationState === ANIMATION_STATES.INITIAL ? 0 : 25,
                transition: { 
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }}
              className="flex items-center"
            >
              <p 
                className="adjustLetterSpacing whitespace-pre text-[40px] font-semibold"
                style={introTextStyle}
              >
                이준렬 입니다
              </p>
            </motion.div>
          </div>
        </div>
        
        <div
          className="h-2 shrink-0 w-full"
          data-name="Introduction Divider"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 649 8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(33.278 0 0 0.4102 324.5 4)\\'><stop stop-color=\\'rgba(250,250,250,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,250,250,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          }}
        />
      </div>
    </motion.div>
  );
}

function HeaderTextContainer() {
  const [companyName, setCompanyName] = useState("");
  
  return (
    <div className="relative shrink-0" data-name="Header Text Container">
      <div className="box-border content-stretch flex flex-col font-normal gap-2 items-end justify-start leading-[0] pt-3 px-0 pb-0 relative">
        <div style={{
          width: "fit-content",
          fontFamily: "'Black Han Sans', sans-serif",
          fontStyle: "normal",
          fontWeight: 400,
          position: "relative",
          flexShrink: 0,
          color: "#939499",
          fontSize: "48px",
          textAlign: "right",
          letterSpacing: "-1.92px",
          lineHeight: "1",
          whiteSpace: "nowrap"
        }}>
          {/* Replace the standard input with our custom component */}
          <BlinkingPlaceholderInput
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="TYPE YOUR COMPANY"
            className="text-right text-[48px] leading-[1] w-full"
            style={{
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: 900,
              letterSpacing: "-1.92px",
              color: companyName ? "#111827" : "#939499"
            }}
          />
        </div>
        <div style={{
          width: "fit-content",
          fontFamily: "'Noto Sans', sans-serif",
          minWidth: "100%",
          position: "relative",
          flexShrink: 0,
          color: "#76767a",
          fontSize: "20px",
          textAlign: "right",
          letterSpacing: "-0.8px",
          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
        }}>
          <p className="adjustLetterSpacing block leading-[1] text-right text-[20px] font-[Pretendard]">
            제 명함에 여러분과 함께하는 미래를 새기고 싶습니다
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header Container">
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <div className="shrink-0 size-[120px] opacity-90" data-name="profile-image">
          <ChatGptImage />
        </div>
        <HeaderTextContainer />
      </div>
    </div>
  );
}

function NameTextContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Name Text Container">
      <div className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative w-full">
        <BackgroundImageAndText3
          text="이"
          styleType="name"
        />
        <BackgroundImageAndText3
          text="준"
          styleType="name"
        />
        <BackgroundImageAndText3
          text="렬"
          styleType="name"
        />
      </div>
    </div>
  );
}

function NameContainer() {
  return (
    <div className="relative shrink-0 w-[187px]" data-name="Name Container">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-[187px]">
        <RollingJobTitles />
        <NameTextContainer />
      </div>
    </div>
  );
}

function LineMdPhoneFilled() {
  return (
    <BackgroundImage15 additionalClassNames={["relative", "shrink-0"]}>
      <g id="line-md:phone-filled">
        <path
          d={svgPaths.p35106c00}
          fill="var(--fill-0, #60A5FA)"
          id="Vector"
          stroke="var(--stroke-0, #60A5FA)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </BackgroundImage15>
  );
}

function PhoneContainer() {
  return (
    <BackgroundImage31>
      <LineMdPhoneFilled />
      <BackgroundImageAndText1 text="010-5141-8070" />
    </BackgroundImage31>
  );
}

function IcBaselineEmail() {
  return (
    <BackgroundImage15 additionalClassNames={["relative", "shrink-0"]}>
      <g id="ic:baseline-email">
        <path
          d={svgPaths.p33218b70}
          fill="var(--fill-0, #60A5FA)"
          id="Vector"
        />
      </g>
    </BackgroundImage15>
  );
}

function EmailContainer() {
  return (
    <BackgroundImage31>
      <IcBaselineEmail />
      <BackgroundImageAndText1 text="real896pc@naver.com" />
    </BackgroundImage31>
  );
}

function MynauiToolSolid() {
  return (
    <BackgroundImage15
      additionalClassNames={["absolute", "left-0", "top-[4.5px]"]}
    >
      <g id="mynaui:tool-solid">
        <path
          d={svgPaths.p2e0efd10}
          fill="var(--fill-0, #60A5FA)"
          id="Vector"
        />
      </g>
    </BackgroundImage15>
  );
}

function SkillsIconContainer() {
  return (
    <div
      className="h-[28.5px] relative shrink-0 w-6"
      data-name="Skills Icon Container"
    >
      <MynauiToolSolid />
    </div>
  );
}

function SkillsTextContainer() {
  // Skill descriptions
  const skillDescriptions = {
    "Figma": "Auto-layout과 컴포넌트 세트를 활용해 UI/UX를 설계하고, Figma Site·Make로 간단한 퍼블리싱까지 수행합니다.",
    "Notion": "데이터베이스 자동화, 함수, 시각화 도구로 WBS와 QA Sheet를 제작하고 관리할 수 있습니다.",
    "Google Analytics": "사용 목적에 맞춰 지표를 조합해 탐색하고, Explorer에서 세션·이벤트·세그먼트를 심층 분석할 수 있습니다.",
    "Excel": "실무에서 자주 사용되는 함수를 이해하고 데이터 유효성 검사, 고급 필터, 매크로 등을 활용합니다.",
    "HTML5": "HTML5의 기본 문법 및 구성, 의미론적 특성(Semantics)을 이해하고 준수합니다.",
    "CSS3": "선택자에 따른 스타일 적용 우선순위를 이해하며, 각종 스타일 요소의 적용을 학습하고 있습니다.",
    "JavaScript": "JavaScript의 기본 문법, DOM 구조 등에 대한 기초적인 개념을 이해하고 있습니다.",
    "Java": "Java의 기본 문법·상속·인터페이스 구현 등 객체지향 프로그래밍의 기초적인 개념을 이해하고 있습니다.",
    "Python": "Python의 기본 문법을 이해하고 간단한 데이터 분석 업무에 활용할 수 있습니다.",
    "SQL": "데이터베이스 언어에 대한 기초적인 지식을 가지고 있으며 간단한 SELECT 쿼리 등을 사용할 수 있습니다."
  };

  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Skills Text Container"
    >
      <div className="flex flex-col gap-2 w-full">
        {/* First row of skills */}
        <div className="flex flex-row flex-nowrap gap-2 items-center">
          <BackgroundImageAndText3
            text="Figma"
            styleType="skill"
            tooltipContent={skillDescriptions["Figma"]}
          />
          <BackgroundImageAndText3
            text="Notion"
            styleType="skill"
            tooltipContent={skillDescriptions["Notion"]}
          />
          <BackgroundImageAndText3
            text="Google Analytics"
            styleType="skill"
            tooltipContent={skillDescriptions["Google Analytics"]}
          />
          <BackgroundImageAndText3
            text="Excel"
            styleType="skill"
            tooltipContent={skillDescriptions["Excel"]}
          />
        </div>
        
        {/* Second row of skills */}
        <div className="flex flex-row flex-nowrap gap-2 items-center">
          <BackgroundImageAndText3
            text="HTML5"
            styleType="skill"
            tooltipContent={skillDescriptions["HTML5"]}
          />
          <BackgroundImageAndText3
            text="CSS3"
            styleType="skill"
            tooltipContent={skillDescriptions["CSS3"]}
          />
          <BackgroundImageAndText3
            text="JavaScript"
            styleType="skill"
            tooltipContent={skillDescriptions["JavaScript"]}
          />
          <BackgroundImageAndText3
            text="Java"
            styleType="skill"
            tooltipContent={skillDescriptions["Java"]}
          />
          <BackgroundImageAndText3
            text="Python"
            styleType="skill"
            tooltipContent={skillDescriptions["Python"]}
          />
          <BackgroundImageAndText3
            text="SQL"
            styleType="skill"
            tooltipContent={skillDescriptions["SQL"]}
          />
        </div>
      </div>
    </div>
  );
}

function SkillsContainer() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Skills Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-[530px]">
        <SkillsIconContainer />
        <SkillsTextContainer />
      </div>
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Container">
      <div className="box-border content-start flex flex-col gap-[20px] items-start justify-start p-0 relative w-full">
        {/* Contact Info Group (Phone + Email) */}
        <div className="flex flex-row gap-[60px] items-center">
          <PhoneContainer />
          <EmailContainer />
        </div>
        {/* Skills Container with 20px gap from above */}
        <SkillsContainer />
      </div>
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Info Container">
      <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative w-[530px]">
        <NameContainer />
        <ContactContainer />
      </div>
    </div>
  );
}

function CardFrontside() {
  return (
    <div className="bg-[#ffffff] h-[623px] rounded-[20px] w-[996px] overflow-hidden shadow-lg">
      <div className="box-border content-stretch flex flex-col h-[623px] items-start justify-between px-16 py-14 relative w-[996px]">
        <HeaderContainer />
        <InfoContainer />
      </div>
    </div>
  );
}

// The main profile container component that displays either the front or back of the card
function ProfileContainer({ isFlipped, onFlip }: { isFlipped: boolean; onFlip: () => void }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective"
      data-name="Profile Container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ perspective: "1200px" }}
    >
      <div className="relative preserve-3d w-[996px] h-[623px]">
        {/* Front of card with improved tilt effect */}
        <ImprovedFoilEffect
          isFlipped={isFlipped}
          intensity={5}
          shine={0.4}
          dampingFactor={0.3}
          animateProps={isFlipped ? cardVariants.back : cardVariants.front}
        >
          <CardFrontside />
        </ImprovedFoilEffect>
        
        {/* Back of card - rotated 180 degrees initially */}
        <ImprovedFoilEffect
          isFlipped={true}  // Always disable tilt effect on backside
          intensity={0}     // Set intensity to 0 to completely disable tilt
          shine={0.4}
          dampingFactor={0.3}
          animateProps={isFlipped ? cardVariants.front : cardVariants.back}
          initialTransform={{ rotateY: 180 }}
        >
          <CardBackside />
        </ImprovedFoilEffect>
      </div>
    </motion.div>
  );
}

export function AnimatedIntroduction() {
  const [step, setStep] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setIsFlipped(!isFlipped);
    // Allow some time for the animation to complete before enabling flipping again
    setTimeout(() => setIsFlipping(false), 600);
  };

  useEffect(() => {
    // After 1800ms, transition from Greeting to Introduction
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1800);

    // After greeting (1800ms) + first text (2500ms) + transition (500ms) + second text (2500ms)
    // Total: 7300ms before moving to profile card
    const timer2 = setTimeout(() => {
      setStep(3);
    }, 7300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="bg-[#373737] relative size-full flex items-center justify-center" data-name="TV - 1">
      {/* Floating flip button - only shown when profile is visible (step 3) */}
      {step === 3 && <FlipButton onClick={handleFlip} />}
      
      <div className="relative size-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && <GreetingContainer key="greeting" />}
          {step === 2 && <IntroductionContainer key="introduction" />}
          {step === 3 && (
            <div key="profile-wrapper" className="transform-gpu">
              <ProfileContainer key="profile" isFlipped={isFlipped} onFlip={handleFlip} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
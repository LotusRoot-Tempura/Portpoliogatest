import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import Frame1000001899 from "../imports/Frame1000001899";

interface SkillTooltipProps {
  children: React.ReactNode;
  skillName: string;
  tooltipContent?: string;
}

export function SkillTooltip({ 
  children, 
  skillName,
  tooltipContent = `${skillName}에 대한 설명이 들어갑니다. 사이즈는 240*120 고정입니다`
}: SkillTooltipProps) {
  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer transition-all duration-200 ease-in-out group hover:scale-105" style={{ color: 'inherit' }}>
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[240px] p-0 shadow-lg border-none rounded-xl overflow-hidden"
        side="top"
        sideOffset={5}
      >
        <div className="w-[240px] h-[120px] bg-[#dbecff] border border-blue-400 rounded-xl">
          <div className="flex flex-col items-center justify-center h-full p-[12px]">
            <p className="text-[#58595c] text-[15px] text-center leading-[1.5] font-['Pretendard',_sans-serif]">
              {tooltipContent}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
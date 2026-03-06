function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Frame48098185() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full">
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Wrapper>
        <div className="css-xdqguc font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#939499] text-[20px] text-left text-nowrap tracking-[-0.8px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            Figma
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

function Frame48098186() {
  return (
    <div className="bg-blue-400 relative rounded-[100px] shrink-0 w-full">
      <Wrapper>
        <div className="css-6bzbts font-['Pretendard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-left text-neutral-50 text-nowrap tracking-[-0.8px]">
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            Figma
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default function Frame48098187() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start px-7 py-8 relative size-full">
          <Frame48098185 />
          <Frame48098186 />
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export function MobileNotice() {
  return (
    <div className="flex items-center justify-center size-full bg-black">
      <p 
        className="text-center text-white px-4"
        style={{ 
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '16px',
          lineHeight: '1.5'
        }}
      >
        해당 페이지는 PC 환경에서 확인 가능합니다. PC로 접속 부탁드립니다.
      </p>
    </div>
  );
}
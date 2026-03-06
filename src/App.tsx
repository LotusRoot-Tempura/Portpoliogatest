import { AnimatedIntroduction } from "./components/AnimatedIntroduction";
import { MobileNotice } from "./components/MobileNotice";
import { useWindowSize } from "./components/useWindowSize";
import "./styles/globals.css";

export default function App() {
  const { width } = useWindowSize();
  
  // Show mobile notice for screens less than 1024px wide
  // Initial rendering shows main content until client-side measurement is available
  const isMobile = width !== undefined && width < 1024;
  
  return (
    <div className="flex items-center justify-center size-full">
      {isMobile ? <MobileNotice /> : <AnimatedIntroduction />}
    </div>
  );
}
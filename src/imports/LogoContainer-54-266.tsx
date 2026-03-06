import imgCompanyLogo from "figma:asset/ae13da1feaff925af5b65467434f110553c87250.png";

export default function LogoContainer() {
  return (
    <div
      className="bg-[#ffffff] relative rounded size-full"
      data-name="Logo Container"
    >
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-full">
        <div
          className="[background-size:111.11%_111.11%] aspect-[108/108] bg-[50%_13.31%] bg-no-repeat h-full shrink-0"
          data-name="Company Logo"
          style={{ backgroundImage: `url('${imgCompanyLogo}')` }}
        />
      </div>
    </div>
  );
}
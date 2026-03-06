import imgLogo from "figma:asset/f8280acee6af5f5603817440abc72080c1846cbb.png";

export default function LogoContainer() {
  return (
    <div
      className="bg-[#ffffff] relative rounded size-full"
      data-name="Logo Container"
    >
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat shrink-0 size-[52px]"
          data-name="Logo"
          style={{ backgroundImage: `url('${imgLogo}')` }}
        />
      </div>
    </div>
  );
}
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-accent wfull gap p-8">
      <Image
        src="/Logo.svg"
        alt="BEWEAR"
        width={100}
        height={26.14}
        className="pb-3"
      />
      <p className="text-xs font-medium">© 2025 Copyright BEWEAR</p>
      <p className="text-muted-foreground text-xs font-medium">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;

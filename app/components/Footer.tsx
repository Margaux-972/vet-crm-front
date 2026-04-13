import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4">
      <p className="text-gray-800">
        Fait par{" "}
        <a href="https://github.com/Margaux-972" target="_blank">
          Margaux Mathar
        </a>{" "}
        avec{" "}
        <Image
          src="/next.svg"
          alt="logo nextjs"
          width={40}
          height={40}
          className="inline mx-4"
          priority
        />{" "}
        <Image
          src="/NestJS.svg"
          alt="logo nestjs"
          width={25}
          height={25}
          className="inline"
          priority
        />
      </p>
    </footer>
  );
};

export default Footer;

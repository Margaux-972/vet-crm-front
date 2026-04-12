import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mr-30">
      <Image src="/Logo.png" alt="Logo Clinipet" width={110} height={110} />
      <Link href="/">Tableau de bord</Link>
      <Link href="/proprietaires">Propriétaires</Link>
      <Link href="/animaux">Animaux</Link>
    </nav>
  );
};
export default Navbar;

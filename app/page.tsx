import Link from "next/link";

export default async function Home() {
  const clientResponse = await fetch("http://localhost:3000/clients", {
    cache: "no-store",
  });

  const petResponse = await fetch("http://localhost:3000/pets", {
    cache: "no-store",
  });

  const proprietaires = await clientResponse.json();
  const animaux = await petResponse.json();

  const lastProprietaires = proprietaires.slice(-2).reverse();
  const lastAnimaux = animaux.slice(-2).reverse();

  return (
    <main className="min-h-screen bg-[#CFEE9E] p-6">
      <h1 className="text-3xl font-bold mb-10 mt-10 text-gray-800 text-center">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link
          href="/proprietaires"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center font-semibold"
        >
          Propriétaires
        </Link>

        <Link
          href="/animaux"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center font-semibold"
        >
          Animaux
        </Link>
        <Link
          href="/proprietaires/creation"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center font-semibold"
        >
          Ajouter un propriétaire
        </Link>
        <Link
          href="/animaux/creation"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center font-semibold"
        >
          Ajouter un animal
        </Link>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center font-semibold">
          Nombre de propriétaires:
          <p className="bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium mt-4">
            {proprietaires.length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center font-semibold">
          Nombre d'animaux :
          <p className="bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium mt-4">
            {animaux.length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
          <h2 className="font-semibold mb-4">Derniers propriétaires :</h2>

          <div className="space-y-2">
            {lastProprietaires.map((proprio: any) => (
              <p
                key={proprio.id}
                className="bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium"
              >
                {proprio.firstName} {proprio.lastName}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
          <h2 className="font-semibold mb-4">Derniers animaux :</h2>

          <div className="space-y-2">
            {lastAnimaux.map((animal: any) => (
              <p
                key={animal.id}
                className="bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium"
              >
                {animal.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

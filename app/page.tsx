import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#CFEE9E] p-6">
      <h1 className="text-3xl font-bold mb-10 mt-10 text-gray-800 text-center">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link
          href="/proprietaires"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center"
        >
          Propriétaires
        </Link>

        <Link
          href="/animaux"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center"
        >
          Animaux
        </Link>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
          Nouveau propriétaire
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
          Nouvel animal
        </div>

        <div className="bg-[#fc3a3a] rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
          Supprimer un propriétaire
        </div>

        <div className="bg-[#fc3a3a] rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
          Supprimer un animal
        </div>
      </div>
    </main>
  );
}

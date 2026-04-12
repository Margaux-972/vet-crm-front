import Link from "next/link";
import { Pet } from "../../types/index";

export default async function ProprietairePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const proprietaire = await response.json();
  return (
    <main className="min-h-screen bg-[#CFEE9E] p-6">
      <div className="max-w-3xl mx-auto mt-10">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {proprietaire.firstName} {proprietaire.lastName}
          </h1>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Informations de contact
            </h2>

            <ul className="space-y-1 text-gray-600 list-disc pl-5">
              <li>Email: {proprietaire.email}</li>
              <li>Téléphone: {proprietaire.phone}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Animaux
            </h2>

            {proprietaire.pet?.length ? (
              <div className="flex flex-wrap gap-2">
                {proprietaire.pet.map((pet: Pet) => (
                  <Link key={pet.id} href={`/animaux/${pet.id}`}>
                    <span className="inline-block bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition">
                      {pet.name}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">Aucun animal</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

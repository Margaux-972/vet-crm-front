import BackButton from "@/app/components/BackButton";
import DeleteModal from "@/app/components/DeleteModal";
import Link from "next/link";

export default async function AnimalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/pets/${id}`);
  const animal = await response.json();
  return (
    <main className="min-h-screen bg-[#CFEE9E] p-6">
      <div className="max-w-3xl mx-auto mt-10">
        <BackButton />
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {animal.name}
          </h1>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Informations
            </h2>
            <ul className="space-y-1 text-gray-600 list-disc pl-5">
              <li>Âge: {animal.age} ans</li>
              <li>Taille: {animal.size} cm</li>
              <li>Poids: {animal.weight} kg</li>
              <li>Espèce: {animal.species}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Propriétaire
            </h2>
            <p className="text-sm text-gray-500">
              <Link key={animal.id} href={`/proprietaires/${animal.client.id}`}>
                <span className="inline-block bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition">
                  {animal.client.firstName} {animal.client.lastName}
                </span>
              </Link>
            </p>
          </div>
        </div>
        <section className="flex justify-between">
          <Link href={`/animaux/${animal.id}/modification`}>
            <button className="bg-[#098c53] text-white px-4 py-2 rounded mt-5 cursor-pointer">
              Modifier
            </button>
          </Link>
          <DeleteModal
            id={animal.id}
            endpoint="pets"
            redirectTo="/animaux"
            label="cet animal"
          />
        </section>
      </div>
    </main>
  );
}

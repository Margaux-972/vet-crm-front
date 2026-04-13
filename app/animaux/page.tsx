import Link from "next/link";
import { Pet } from "../types/index";

export default async function AnimauxPage() {
  const response = await fetch("http://localhost:3000/pets", {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <main className="min-h-screen bg-[#CFEE9E] p-6">
      <h1 className="text-3xl font-bold mb-10 mt-10 text-gray-800 flex justify-center">
        Animaux
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((animal: Pet) => {
          return (
            <div
              key={animal.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <Link href={`/animaux/${animal.id}`}>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {animal.name}
                  </h2>
                  <p className="text-sm text-gray-500">Âge: {animal.age}</p>
                  <p className="text-sm text-gray-500">{animal.species}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Propriétaire:
                  </h3>

                  <span className="bg-[#b7ed9c] text-[#098c53] px-3 py-1 rounded-full text-xs font-medium">
                    {animal.client.firstName} {animal.client.lastName}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

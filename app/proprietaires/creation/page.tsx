"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

export default function CreationProprietaire() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const petName = formData.get("petName");
    const petAge = Number(formData.get("petAge"));
    const petSize = Number(formData.get("petSize"));
    const petWeight = Number(formData.get("petWeight"));
    const petSpecies = formData.get("petSpecies");

    const response = await fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        civility: formData.get("civility"),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),

        pets:
          petName && petAge && petSize && petWeight && petSpecies
            ? [
                {
                  name: petName,
                  age: petAge,
                  size: petSize,
                  weight: petWeight,
                  species: petSpecies,
                },
              ]
            : [],
      }),
    });

    const data = await response.json();

    setLoading(false);

    if (!response.ok) {
      setError(
        Array.isArray(data?.message) ? data.message.join(", ") : data?.message,
      );
      return;
    }

    router.push("/proprietaires");
  }

  return (
    <main className="min-h-screen bg-[#CFEE9E] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <BackButton />

        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Créer un nouveau propriétaire
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="civility"
              className="text-sm font-medium text-gray-700"
            >
              Civilité
            </label>
            <select
              name="civility"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="">Sélectionnez une option</option>
              <option value="Mr">Mr</option>
              <option value="Mme">Mme</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Jean"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Dupond"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="jean@mail.com"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Téléphone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="0123456789"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>

          <div className="mt-4 border-t border-gray-400 pt-4">
            <h2 className="font-semibold text-gray-700 mb-2">Animal</h2>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Prénom de l'animal
              </label>
              <input
                type="text"
                name="petName"
                placeholder="Rex"
                className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Âge</label>
              <input
                type="text"
                name="petAge"
                placeholder="2"
                className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Taille de l'animal
              </label>
              <input
                type="text"
                name="petSize"
                placeholder="20"
                className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Poids de l'animal
              </label>
              <input
                type="text"
                name="petWeight"
                placeholder="10"
                className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Espèce
              </label>
              <select
                name="petSpecies"
                className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
              >
                <option value="">Sélectionnez une espèce</option>
                <option value="chien">Chien</option>
                <option value="chat">Chat</option>
                <option value="hamster">Hamster</option>
                <option value="tortue">Tortue</option>
              </select>
            </div>
          </div>
          <button
            disabled={loading}
            className="bg-[#098c53] text-white font-semibold py-2 rounded-lg mt-4 hover:opacity-90 transition"
          >
            {loading ? "Création..." : "Créer"}
          </button>
        </form>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mt-4">
            {error}
          </div>
        )}
      </div>
    </main>
  );
}

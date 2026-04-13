import BackButton from "@/app/components/BackButton";
import { redirect } from "next/navigation";

export default async function EditPetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/pets/${id}`, {
    cache: "no-store",
  });

  const animal = await response.json();
  const speciesOptions = ["chien", "chat", "hamster", "tortue"];

  return (
    <main className="min-h-screen bg-[#CFEE9E] flex flex-col items-center justify-center p-6">
      <BackButton />
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Mofifier un animal
        </h1>
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            await fetch(`http://localhost:3000/pets/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formData.get("name"),
                age: Number(formData.get("age")),
                size: Number(formData.get("size")),
                weight: Number(formData.get("weight")),
                species: formData.get("species"),
              }),
            });
            redirect(`/animaux/${id}`);
          }}
        >
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            defaultValue={animal.name}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <label htmlFor="age">Âge</label>
          <input
            type="text"
            name="age"
            defaultValue={animal.age}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <label htmlFor="size">Taille</label>
          <input
            type="text"
            name="size"
            defaultValue={animal.size}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <label htmlFor="weight">Poids</label>
          <input
            type="text"
            name="weight"
            defaultValue={animal.weight}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <select
            name="species"
            defaultValue={animal.species}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          >
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
          <button className="bg-[#098c53] text-white font-semibold py-2 rounded-lg mt-4 hover:opacity-90 transition">
            Modifier
          </button>
        </form>
      </div>
    </main>
  );
}

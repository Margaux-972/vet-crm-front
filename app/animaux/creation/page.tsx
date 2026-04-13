import { redirect } from "next/navigation";

export default async function CreationAnimal() {
  const response = await fetch("http://localhost:3000/clients", {
    cache: "no-store",
  });

  const proprietaires = await response.json();

  return (
    <main className="min-h-screen bg-[#CFEE9E] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Créer un nouvel animal
        </h1>

        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            await fetch("http://localhost:3000/pets", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                age: Number(formData.get("age")),
                size: Number(formData.get("size")),
                weight: Number(formData.get("weight")),
                species: formData.get("species"),
                clientId: Number(formData.get("clientId")),
              }),
            });
            redirect("/animaux");
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              name="name"
              placeholder="Lolita"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="age" className="text-sm font-medium text-gray-700">
              Âge
            </label>
            <input
              type="text"
              name="age"
              placeholder="3"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="size" className="text-sm font-medium text-gray-700">
              Taille
            </label>
            <input
              type="text"
              name="size"
              placeholder="30"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="text-sm font-medium text-gray-700"
            >
              Poids
            </label>
            <input
              type="text"
              name="weight"
              placeholder="4"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="species"
              className="text-sm font-medium text-gray-700"
            >
              Espèce
            </label>
            <select
              name="species"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="">Choisir une espèce</option>
              <option value="chien">Chien</option>
              <option value="chat">Chat</option>
              <option value="hamster">Hamster</option>
              <option value="tortue">Tortue</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="clientId"
              className="text-sm font-medium text-gray-700"
            >
              Propriétaire
            </label>
            <select
              name="clientId"
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="">Choisir un propriétaire</option>
              {proprietaires.map((proprio: any) => {
                return (
                  <option key={proprio.id} value={proprio.id}>
                    {proprio.firstName} {proprio.lastName}
                  </option>
                );
              })}
            </select>
          </div>

          <button className="bg-[#098c53] text-white font-semibold py-2 rounded-lg mt-4 hover:opacity-90 transition">
            Créer
          </button>
        </form>
      </div>
    </main>
  );
}

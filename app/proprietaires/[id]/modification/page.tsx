import { redirect } from "next/navigation";

export default async function ModificationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const proprietaire = await response.json();
  return (
    <main className="min-h-screen bg-[#CFEE9E] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Mofifier un propriétaire
        </h1>
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            await fetch(`http://localhost:3000/clients/${id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                civility: formData.get("civility"),
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                email: formData.get("email"),
                phone: formData.get("phone"),
              }),
            });
            redirect(`/proprietaires/${id}`);
          }}
        >
          <label htmlFor="civility">Civilité</label>
          <select
            name="civility"
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="">Sélectionnez une option</option>
            <option value="Mr">Mr</option>
            <option value="Mme">Mme</option>
          </select>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            name="firstName"
            defaultValue={proprietaire.firstName}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            defaultValue={proprietaire.lastName}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={proprietaire.email}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <label htmlFor="phone">Téléphone</label>
          <input
            type="text"
            name="phone"
            defaultValue={proprietaire.phone}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />
          <button className="bg-[#098c53] text-white font-semibold py-2 rounded-lg mt-4 hover:opacity-90 transition">
            Modifier
          </button>
        </form>
      </div>
    </main>
  );
}

import BackButton from "@/app/components/BackButton";
import { redirect } from "next/navigation";

export default async function EditClientPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ error?: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const proprietaire = await response.json();

  const sp = await searchParams;
  const civilityOptions = ["Mr", "Mme"];

  return (
    <main className="min-h-screen bg-[#CFEE9E] flex flex-col items-center justify-center p-6">
      <BackButton />

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Modifier un propriétaire
        </h1>

        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";

            const res = await fetch(`http://localhost:3000/clients/${id}`, {
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

            const data = await res.json().catch(() => null);

            if (!res.ok) {
              return redirect(
                `/proprietaires/${id}/modification?error=${encodeURIComponent(
                  Array.isArray(data?.message)
                    ? data.message.join(", ")
                    : data?.message || "Erreur",
                )}`,
              );
            }

            redirect(`/proprietaires/${id}`);
          }}
        >
          <label>Civilité</label>
          <select
            name="civility"
            defaultValue={proprietaire.civility}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          >
            {civilityOptions.map((civility) => (
              <option key={civility} value={civility}>
                {civility}
              </option>
            ))}
          </select>

          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            defaultValue={proprietaire.firstName}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />

          <label>Nom</label>
          <input
            type="text"
            name="lastName"
            defaultValue={proprietaire.lastName}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            defaultValue={proprietaire.email}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full"
          />

          <label>Téléphone</label>
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
        {sp?.error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mt-4">
            {sp.error}
          </div>
        )}
      </div>
    </main>
  );
}

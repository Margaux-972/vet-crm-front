"use client";
import { useState } from "react";

type DeleteModalProps = {
  id: number;
  endpoint: "clients" | "pets";
  redirectTo: string;
  label: string;
};

export default function DeleteModal({
  id,
  endpoint,
  redirectTo,
  label,
}: DeleteModalProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="bg-red-500 text-white px-4 py-2 rounded mt-5 cursor-pointer"
      >
        Supprimer
      </button>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg ">
            <h2 className="text-lg font-semibold mb-4">
              Confirmer la suppression
            </h2>
            <p>Êtes-vous sûr(e) de vouloir supprimer {label} ?</p>
            <div className="flex justify-between gap-2 mt-4">
              <button
                className="px-3 py-2 border rounded"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Annuler
              </button>
              <button
                className="bg-red-500 text-white px-3 py-2 rounded"
                onClick={async () => {
                  await fetch(`http://localhost:3000/${endpoint}/${id}`, {
                    method: "DELETE",
                  });
                  window.location.href = redirectTo;
                }}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

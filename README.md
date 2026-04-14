# CRM Vétérinaire - Frontend

Application front-end développée avec Next.js pour la gestion d’un cabinet vétérinaire.

## Stack

- Next.js
- React
- TypeScript
- Fetch API
- Tailwind

---

## Fonctionnalités

### Dashboard

- Statistiques :
  - Nombre de clients
  - Nombre d’animaux
- Liste des derniers clients ajoutés
- Liste des derniers animaux ajoutés
- Navigation rapide :
  - Ajouter un client
  - Ajouter un animal

---

### Clients (propriétaires)

- Liste des clients
- Détail d’un client :
  - Informations personnelles
  - Liste de ses animaux
- Navigation vers :
  - Détail d’un animal
- Modification / suppression d’un client

---

### Animaux

- Liste des animaux
- Détail d’un animal :
  - Informations (âge, espèce, poids, taille)
  - Lien vers son propriétaire
- Modification / suppression d’un animal

---

## Navigation

Relations bidirectionnelles :

- Client → ses animaux
- Animal → son propriétaire

---

## Architecture

- Pages :
  - `/dashboard`
  - `/proprietaires`
  - `/animaux`
- Détails dynamiques :
  - `/proprietaires/[id]`
  - `/animaux/[id]`

---

## Lancer le projet

```bash
npm install
npm run dev
```

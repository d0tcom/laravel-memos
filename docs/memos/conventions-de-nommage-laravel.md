# Conventions de nommage Laravel

::: tip
Ces conventions ne sont pas obligatoires mais sont utilisées par beaucoup de programmeurs.
:::

Elles sont utilisées pour garder nos fichiers, méthodes, routes etc. logiques, organisés et facile à comprendre pour nous-même ou pour les autres.

## Le modèle

Un modèle se nomme **avec une majuscule au début** de son nom et **au singulier**.

Par exemple, si on a une BDD qui s'appelle 'Voitures'. Alors, on nommera notre modèle : 'Voiture' au singulier.

## Les contrôleurs

Pour le contrôleur, c'est plus ou moins pareil. Avec une majuscule au début, au singulier et suivit du mot 'Controller'.

Par exemple :

| Requête | route            | contrôleur & action                   | Vue (view) |
| ------- | ---------------- | ------------------------------------- | ---------- |
| GET     | /voitures        | [VoitureController::class, 'index']   | index      |
| GET     | /voitures/{id}   | [VoitureController::class, 'show']    | show       |
| GET     | /voitures/create | [VoitureController::class, 'create']  | create     |
| POST    | /voitures        | [VoitureController::class, 'store']   | ---        |
| DELETE  | /voitures/{id}   | [VoitureController::class, 'destroy'] | ---        |
| PUT     | /voitures/{id}   | [VoitureController::class, 'update']  | update     |

Pour les actions (méthodes) (Resful Controller Actions).

- 'index' va montrer **tous les enregistrements** ou du moins une grande partie sur la page.
- 'show' va montrer **seulement un enregistrement** grâce à son id par exemple sur la page.
- 'create' si nous avons **un formulaire pour ajouter** un nouvel enregistrement à la BDD.
- 'store' va **prendre les données du formulaire en POST** pour les **sauvegarder dans la BDD**.
- 'destroy' va **prendre un enregistrement** grâce à son id pour le supprimer dans la BDD.
- 'edit' va **afficher une vue pour éditer** un enregistrement existant.
- 'update'

# Créer une base de donnée

Pour commencer, démarrer le serveur Apache et MySQL.

Vérifiez que vous avez mysql dans vos variables d'environnement sur Windows. (Exemple : C:\xampp\mysql\bin)

## Se connecter à MySQL

On va d'abord se connecter à MySQL, pour cela tapez :

```
mysql -u root
```

'root' est l'utilisateur par défaut de MySQL.

## Créer une base de donnée

Pour créer la base de donnée, tapez :

```
create database nom_de_la_bdd;
```

## Dire à Laravel quelle BDD on va utiliser (pour notre projet actuel)

Pour spécifier à Laravel quelle base de donnée notre projet va utiliser, il faut tout simplement éditer le fichier '.env' qui se situe à la racine du projet.

```
DB_DATABASE=nom_de_la_bdd
DB_USERNAME=root
```

⚠️ Plus tard, en production, vous pourrez ajouter un mot de passe ou changer l'username.

Une fois l'édition de ce fichier terminée, quittez le serveur et relancez-le.

```
php artisan serve
```

## Liens utiles

[Documentation de Laravel - Base de donnée](https://laravel.com/docs/8.x/database)

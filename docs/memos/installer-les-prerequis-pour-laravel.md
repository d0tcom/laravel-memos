# Installer les prérequis pour Laravel

## Installer PHP et MySQL (simplement)

Vous aurez besoin d'installer PHP et MySQL.
Un des moyens très simple pour le faire est d'installer Laragon ou encore XAMPP.

- [Télécharger XAMPP](https://www.apachefriends.org/fr/index.html)
- [Télécharger Laragon](https://laragon.org/download/)

## Installer Composer

Il faudra ensuite installer Composer.
Composer est un gestionnaire de paquets pour PHP, il permet d'installer des packages et des librairies pour notre projet sur Laravel. (C'est un peu comme NPM pour NodeJS)

[Télécharger Composer](https://getcomposer.org/)

Vérifier que composer est installer, tapez dans l'invite de commande :

```
composer -V
```

La dernière version de Composer que vous avez installé devrait s'afficher. Si ce n'est pas le cas, il y a un problème.

## Installer Laravel

Pour installer Laravel, tapez dans l'invite de commande :

```
composer global require laravel/installer
```

Cela va installer le package de manière globale. Vous pourrez ensuite utiliser Laravel pour créer un projet n'importe où sur votre ordinateur.

## Liens utiles

- [Télécharger Laragon](https://laragon.org/download/)
- [Télécharger XAMPP](https://www.apachefriends.org/fr/index.html)
- [Télécharger Composer](https://getcomposer.org/)
- [Voir la documentation de Laravel 8.x](https://laravel.com/docs/8.x)

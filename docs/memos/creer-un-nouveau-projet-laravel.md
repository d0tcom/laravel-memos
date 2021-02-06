# Démarrer un nouveau projet Laravel

Ouvrez votre éditeur de code préféré et allez dans votre dossier où sont situés vos projets.

## Créer un projet

__Avec l'installeur :__  Tapez dans l'invite de commande :

```
laravel new nomdevotreprojet
```

Cela va prendre un peu de temps pour créer tous la structure, les dossiers etc.

Vous pourrez ensuite vous rendre dans le dossier "nomdevotreprojet" avec votre éditeur.

__Avec Composer :__ Si vous n'avez pas installé l'installeur Laravel, vous pouvez également créer votre projet via composer :

```
composer create-project laravel/laravel nomdevotreprojet --prefer-dist
```

__Avec Laragon :__
Directement par le menu,
 Menu -> "Créer un site web rapidement" -> "Laravel"

## Lancer un serveur de développement

Pour lancer un serveur de développement pour voir votre projet en ligne, tapez dans l'invite de commande :

```
php artisan serve
```

Par défaut le port utilisé par ce serveur est le port 8000. Si vous utilisez déjà ce port, vous pouvez spécifier dans la commande celui que vous voulez utiliser grâce au flag **--port=8080** par exemple.

```
php artisan serve --port=8080
```
__Avec Laragon :__
L'avantage de Laragon est qu'il créée automatiquement un hôte virtuel (de type http: // nomdevotreprojet.test) pour chaque nouveau projet (Vous devrez peut-être appuyez sur Stop puis Start pour que l(hôte soit actif)
Le serveur est alors accessible via le menu de laragon :
 Menu -> "www" -> nomdevotreprojet

## Liens utiles

[Voir la documentation de Laravel 8.x](https://laravel.com/docs/8.x)

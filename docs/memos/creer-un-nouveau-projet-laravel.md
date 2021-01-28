# Démarrer un nouveau projet Laravel

Ouvrez votre éditeur de code préféré et allez dans votre dossier où sont situés vos projets.

## Créer un projet

Tapez dans l'invite de commande :

```
laravel new nomdevotreprojet
```

Cela va prendre un peu de temps pour créer tous la structure, les dossiers etc.

Vous pourrez ensuite vous rendre dans le dossier "nomdevotreprojet" avec votre éditeur.

## Lancer un serveur de développement

Pour lancer un serveur de développement pour voir votre projet en ligne, tapez dans l'invite de commande :

```
php artisan serve
```

Par défaut le port utilisé par ce serveur est le port 8000. Si vous utilisez déjà ce port, vous pouvez spécifier dans la commande celui que vous voulez utiliser grâce au flag **--port=8080** par exemple.

```
php artisan serve --port=8080
```

## Liens utiles

[Voir la documentation de Laravel 8.x](https://laravel.com/docs/8.x)

# Créer un modèle

Pour créer un modèle (**Voiture** avec un V majuscule, c'est la convention), nous allons utiliser artisan et taper :

```
php artisan make:model Voiture
```

Cela va créer un Model qui se trouvera dans le dossier app/Models/Voiture.php

On pourra utiliser ce Model **Voiture** dans notre Controller 'VoitureController' :

```php
use App\Models\Voitures
```

## Avec son contrôleur

```
php artisan make:model Voiture -c
```

## Avec son contrôleur de ressources (CRUD)

```
php artisan make:model Voiture -r
```

## Avec sa factory

```
php artisan make:model Voiture -f
```

## Avec son seeder

```
php artisan make:model Voiture -s
```

## Avec toutes les options

```
php artisan make:model Voiture -mfsc
```

## Liens utiles

[Documentation de Laravel - Modeles](https://laravel.com/docs/8.x/eloquent#defining-models)

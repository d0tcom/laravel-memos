# Les contrôleurs

Les contrôleurs permettent d'avoir un code plus propre et mieux organisé, qui sera maintenable dans le temps.

Avant nous utilisions une fonction à l'intérieur d'une route comme cela :

```php
Route::get('/users', function () {
  $users = [
    ['name' => 'John'],
    ['name' => 'Robert'],
    ['name' => 'Philibert']
  ];
    return view('/users', $users);
});
```

## Créer un contrôleur

Maintenant, nous utiliserons un contrôleur.
Pour créer ce contrôleur, nous pouvons le faire manuelement ou utiliser une commande :

```
php artisan make:controller UserController
```

Ce nouveau contrôleur sera placé dans le dossier 'app/Http/Controller/UserController.php'

**On mettra toujours le terme 'Controller' après le nom du contrôleur pour le distinguer des autres classes comme les modèles etc.**

## Modifier un contrôleur

Cela sera une Classe toute simple à laquelle nous pourrons ajouter les données que l'on passait avant dans la fonction de la route.

```php
<?php

namespace App\Http\Controllers;

class UserController extends Controller
{
    public function index()
    {
      $users = [
        ['name' => 'John'],
        ['name' => 'Robert'],
        ['name' => 'Philibert']
      ];
      return view('/users', $users);
    }
}

```

## Définir le contrôleur dans la route

```php
Route::get('/users', [UserController::class, 'index']);
```

## Liens utiles

[Documentation de Laravel - Contrôleurs](https://laravel.com/docs/8.x/controllers)

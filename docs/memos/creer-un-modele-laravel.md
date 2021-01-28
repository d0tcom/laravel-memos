# Créer un modèle

Pour créer un modèle ('Voiture' avec un V majuscule, c'est la convention), nous allons utiliser artisan et taper :

```
php artisan make:model Voitures
```

Cela va créer un Model qui se trouvera dans le dossier app/Models/Voitures.php

On pourra utiliser ce Model 'Voitures' dans notre Controller 'VoituresController' :

```php
use App\Models\Voitures
```

## Liens utiles

[Documentation de Laravel - Modeles](https://laravel.com/docs/8.x/eloquent#defining-models)

# Accéder à une requête dans une url

Si vous souhaitez gérer une ou plusieurs requêtes qui seraient passées dans une de vos routes, par exemple :

http://monsite.com/voitures?marque=bmw

Ici, la requête est : **?marque=bmw**

::: tip
Pour ajouter des requêtes, il suffit d'ajouter un **&nomdelarequete**.

:::

http://monsite.com/voitures?marque=bmw&modele=m3

Vous pouvez utiliser le helper **request('nomDeLaRequete')** et stocker la valeur de cette requête dans une variable pour l'afficher par exemple.

```php
Route::get('/voitures', function () {

  $marque = request('marque');
  $modele = request('modele');

  return view('voitures', [
    'marque' => $marque,
    'modele' => $modele
  ])
})
```

## Afficher la requête dans une vue

Pour afficher par exemple cette requête dans 'voitures.blade.php' que vous avez stocker dans une variable :

```html
<div>
  <p>La marque de votre voiture est {{ $marque }}</p>
  <p>Le modèle est {{ $modele }}</p>
</div>
```

## Liens utiles

[Documentation de Laravel - Le helper request()](https://laravel.com/docs/8.x/helpers#method-request)

# Accéder à une requête dans une url

Si vous souhaitez gérer une ou plusieurs requêtes qui seraient passées dans une de vos routes, par exemple :

http://monsite.com/voitures?marque=bmw

Pour ajouter des requêtes, il suffit d'ajouter un &nomdelarequete.

http://monsite.com/voitures?marque=bmw&modele=m3

Vous pouvez utiliser la fonction 'request('nomDeLaRequete')' et stocker la valeur de cette requête dans une variable pour l'afficher par exemple.

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

## Accéder à la variable dans une view

Pour afficher par exemple cette requête dans 'voitures.blade.php' que vous avez stocker dans une variable :

```html
<div>
  <p>La marque de votre voiture est {{ $marque }}</p>
  <p>Le modèle est {{ $modele }}</p>
</div>
```

### Ne pas échapper les caractères spéciaux

Si vous voulez ne pas échapper les caractères spéciaux dans une requête URL, vous pouvez faire comme ça :
(si par exemple vous allez chercher du HTML depuis votre BDD, pour cette raison vous allez vouloir l'afficher dans le navigateur)

```html
<div>
  <p>Nom : {!! $name !!}</p>
</div>
```

# Enregistrer des données dans une table

On va utiliser le Modele 'Voiture' à l'intérieur de notre contrôleur 'VoitureController' :

```php
public function store()
    {
      $voiture = new Voiture();

      $voiture->marque = request('marque');
      $voiture->modele = request('modele');
      $voiture->annee = request('annee');

      $voiture->save();

      return redirect('/')->with('mssg', "Merci pour votre commande");
    }
```

Dans ces propriété **on va injecter les données du formulaire** qui ont été envoyé grâce à la méthode **'request('marque')'** par exemple.

```php
$voiture->marque = request('marque');
```

Ensuite, nous allons sauvegarder ces propriété dans la BDD grâce à :

```php
$voiture->save();
```

et rediriger l'utilisateur vers la page d'accueil.

```php
return redirect('/')->with('mssg', "Merci pour votre commande");
```

## Liens utiles

[Documentation de Laravel - Accéder aux requêtes](https://laravel.com/docs/8.x/requests#accessing-the-request)

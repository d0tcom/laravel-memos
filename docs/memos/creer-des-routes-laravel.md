# Créer des routes

## Route simple

Il y a un dossier /routes, dans le fichier web.php vous pouvez créer des routes. (GET, POST etc.)

Pour créer une route vers l'acceuil par exemple :

```php
Route::get('/', function () {
    return view('welcome');
});
```

"return view('welcome');" va retourner une view qui s'appelle 'welcome' et qui se trouve dans le dossier 'resources/views/welcome.blade.php'.
Cette route vous amènera vers 'localhost/' (acceuil)

Un autre exemple :

```php
Route::get('/contact', function () {
    return view('contact');
});
```

Celle-ci vous amènera vers 'localhost/contact' (une page de contact par exemple)

## Passer des données à travers la route

Vous pouvez passez des données à travers cette route. Par exemple :

```php
Route::get('/contact', function () {
  $user = [
    'name' => 'Jean',
    'firstname' => 'Michel',
    'age' => 30
  ]
    return view('/contact', $user);
});
```

### Afficher les données sur une vue

Pour afficher ces données sur votre view 'contact.blade.php', vous pouvez utilisez des {{ $variable }} entre des balises HTML.

```php
<div>
  <p>Nom : {{ $name }}</p>
  <p>Prénom : {{ $firstname }}</p>
  <p>Age : {{ $age }}</p>
</div>
```

## Créer une route type 'posts/mon-premier-post' (paramètres)

Si vous voulez créer une route qui afficherait par exemple des posts. Vous pourrez donner à chacun d'eux un nom.

Exemple : http://monsite.com/posts/mon-premier-post

Cela afficherait le post 'mon-premier-post' par exemple.

```php
Route::get('/posts/{post}', function ($post) {
  $posts = [
    'mon-premier-post' => 'Bonjour, ceci est mon premier post!',
    'autre-chose' => 'Vive la vie'
  ];
});

return view('post', [
  'post' => $posts[$post]
]);
```

Créer une nouvelle view 'users.blade.php' dans le dossier 'resources/views'

```html
<div>
  <h1>Mon blog</h1>
  <p>{{ $post }}</p>
</div>
```

### Afficher une page 404 si des données n'existent pas

Pour vérifier que les données existent, nous utiliserons une condition avec la fonction 'array_key_exists' et nous retournerons un 'abort(404)' dans le cas échéant.

```php
Route::get('/posts/{post}', function ($post) {
  $posts = [
    'mon-premier-post' => 'Bonjour, ceci est mon premier post!',
    'autre-chose' => 'Vive la vie'
  ];
});

if (!array_key_exists($post, $posts)) {
  abort(404, 'Désolé, cette page existe pas.');
}

return view('post', [
  'post' => $posts[$post]
]);
```

## Liens utiles

- [Documentation de Laravel - Routes](https://laravel.com/docs/8.x/routing)
- [Syntaxe Blade Templates](https://laravel.com/docs/8.x/blade)

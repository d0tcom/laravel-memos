# Créer des routes

## Route simple

Il y a un dossier **/routes**, dans le fichier web.php vous pouvez créer des routes. (GET, POST etc.)

Pour créer une route vers l'accueil par exemple :

```php
Route::get('/', function () {
    return view('welcome');
});
```

**return view('welcome');** va retourner une vue qui s'appelle 'welcome' et qui se trouve dans le dossier **'resources/views/welcome.blade.php'**.
Cette route vous amènera vers 'localhost/' (accueil)

Un autre exemple :

```php
Route::get('/contact', function () {
    return view('contact');
});
```

Celle-ci vous amènera vers **'localhost/contact'** (une page de contact par exemple)

## Passer des données à une route

Vous pouvez passer des données à travers cette route. Par exemple :

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

Pour afficher ces données sur votre vue 'contact.blade.php', vous pouvez utiliser des doubles '{' '}' entre les balises HTML.

```php
<div>
  <p>Nom : {{ $name }}</p>
  <p>Prénom : {{ $firstname }}</p>
  <p>Age : {{ $age }}</p>
</div>
```

## Créer une route type 'posts/mon-premier-post' (paramètres)

Vous voulez créer une route qui afficherait par exemple des posts.

Exemple : http://monsite.com/posts/mon-premier-post

```php
Route::get('/posts/{post}', function ($post) {
  $posts = [
    'mon-premier-post' => 'Bonjour, ceci est mon premier post!',
    'autre-chose' => 'Un autre post'
  ];
});

return view('post', [
  'post' => $posts[$post]
]);
```

Créer une nouvelle vue 'posts.blade.php' dans le dossier 'resources/views'

```html
<div>
  <h1>Mon blog</h1>
  <p>{{ $post }}</p>
</div>
```

## Liens utiles

- [Documentation de Laravel - Routes](https://laravel.com/docs/8.x/routing)
- [Syntaxe Blade Templates](https://laravel.com/docs/8.x/blade)

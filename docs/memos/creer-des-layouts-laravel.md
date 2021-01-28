# Créer des layouts

Si vous avez plusieurs pages (views) qui utilisent le même header, footer etc. Vous pouvez utilisez des **layouts** pour ne pas répéter ces morceaux de code à chaque fois.

Exemple, vous avez deux views : **contact.blade.php** et **users.blade.php**.

## Créer le dossier layouts/

Vous allez créer un dossier **layouts/** à l'intérieur du dossier **views/**.

Dans ce dossier **layouts/**, créez un nouveau fichier **layout.blade.php**

Dans ce fichier **layout.blade.php**, vous allez pouvoir insérer le layout que vous utilisez sur les deux pages **contact** et **users** :

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Laravel</title>

    <!-- Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:200,600"
      rel="stylesheet"
    />

    <!-- Styles -->
    <link href="/css/main.css" rel="stylesheet" />
  </head>
  <body>
    @yield('content')

    <footer>
      <p>Copyright 2020 Pizza House</p>
    </footer>
  </body>
</html>
```

**@yield('content')** vous permettra d'importer une section que vous avez appellez **content** et qui se trouve dans une autre vue par exemple.

## Utiliser un layout dans une vue

Pour utilisez ce layout dans vos autres vues, au début d'une vue, tapez :

```html
@extends('layouts.layout') @section('content')
<html></html>
@endsection
```

## Liens utiles

[Syntaxe Blade Templates](https://laravel.com/docs/8.x/blade)

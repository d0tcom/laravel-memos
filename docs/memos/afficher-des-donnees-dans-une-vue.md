# Afficher des données dynamiquement dans une vue

## Depuis une route

Si par exemple vous voulez afficher une liste d'articles dans une vue qui sont dans une table **articles**.

Vous allez retourner dans une route : la vue qui va être affichée mais aussi des données avec elle :

```php
use App\Models\Article;


Route::get('/news', function () {
    return view('news', [
        'articles' => Article::take(3)->latest()->get()
    ]);
});
```

**Article** est un modèle qui sert aux articles. Dans cet exemple, nous prenons **take()** les 3 derniers **latest()** articles dans la table et nous les affichons dans la vue.

```html
<ul class="style1">
  @foreach ($articles as $article)
  <li class="first">
    <h3>{{ $article->title }}</h3>
    <p><a href="#">{{ $article->excerp }}</a></p>
  </li>
  @endforeach
</ul>
```

## Depuis un contrôleur

```php
use App\Models\Article;

class ArticlesController extends Controller
{
    public function show(Article $article) // Ou public function show($id)
    {
        // $article = Article::find($id); // Ou $article = Article::find($id);

        return view('articles.show', ['article' => $article]);
    }

    public function index()
    {
        return view('articles.index', [
            'articles' => Article::take(4)->latest()->get()
        ]);
    }
}
```

## Liens utiles

[Documentation de Laravel - Récupérer les résultats d'une table](https://laravel.com/docs/8.x/queries#retrieving-results)

# Le Eager Loading

Laravel nous permet d'intéroger le modèle parent pour accèder à ses enfants. (par exemple le modèle parent 'Book' et son enfant 'Author')

Ci-dessous, le modèle 'Book'. Il appartient à un 'Author'.

```php
class Book extends Model
{
    /**
     * Get the author that wrote the book.
     */
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
```

Pour ce faire, **nous accéderons à tous les livres avec tous leurs auteurs**. Seulement 2 requêtes seront alors executées.

Grâce à 'with('')'

```php
$books = Book::with('author')->get();

foreach ($books as $book) {
    echo $book->author->name;
}
```

Si on veut le faire avec plusieurs autres relations, on peut passer un tableau à la place :

```php
$books = Book::with(['author', 'publisher'])->get();
```

## Liens utiles

- [Laravel - Eloquent relations](https://laravel.com/docs/8.x/eloquent-relationships)
- [Laravel - Eager Loading](https://laravel.com/docs/8.x/eloquent-relationships#eager-loading)
- [Laravel - Modeles](https://laravel.com/docs/8.x/eloquent#defining-models)

# Les accesseurs et mutateurs

Dans le cas de Laravel, les accesseurs et mutateurs sont extrêmement pratiques. En effet, ils permettent de **transformer les données lors de leur récupération ou lors de leur enregistrement**.

## Définir un accesseur

Si on veut définir un accesseur, on créera une méthode 'getPrenomAttribute' sur notre modèle Utilisateur; dans cet exemple l'accesseur transformera le prénom pour **lui mettre une majuscule à sa première lettre** (ucfirst()) avant de la renvoyer par exemple :

```php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    /**
     * Va chercher le prénom de l'utilisateur et met une majuscule à sa première lettre.
     *
     * @param  string  $prenom
     * @return string
     */
    public function getPrenomAttribute($prenom)
    {
        return ucfirst($prenom);
    }
}
```

## Définir un mutateur

Pour définir un mutateur, on créera une méthode 'setPrenomAttribute' sur notre modèle Utilisateur; dans cet exemple le mutateur transformera le prénom pour **le mettre en minuscule** avant de l'enregistrer dans la BDD par exemple :

```php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    /**
     * Enregistre le prénom de l'utilisateur en minuscule.
     *
     * @param  string  $prenom
     * @return void
     */
    public function setPrenomAttribute($prenom)
    {
        $this->attributes['prenom'] = strtolower($prenom);
    }
}
```

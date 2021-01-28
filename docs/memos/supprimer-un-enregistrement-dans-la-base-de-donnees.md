# Supprimer un enregistrement

Pour supprimer un enregistrement dans la base de données grâce à un formulaire.

## Ajouter un bouton au formulaire

Par exemple, un bouton 'supprimer cette voiture', nous allons d'abord ajouter ce bouton à un formulaire

```html
<form action="/voitures/{{ $voiture->id }}" method="POST">
  @csrf @method('DELETE')
  <button>Complete Order</button>
</form>
```

On va utiliser la méthode POST mais nous dirons à Laravel que c'est en réalité la méthode DELETE **@method('DELETE')**.

**@csrf** servira à empêcher l'exploitation de failles de sécurité de type CSRF.

## Ajouter la route

On ajoutera la route avec une méthode 'delete' et l'action sera 'destroy' par convention.

```php
Route::delete('/voitures/{id}', [VoitureController::class, 'destroy']);
```

## Ajouter la méthode destroy dans le contrôleur

Nous ajouterons la méthode **destroy** dans notre contrôleur **VoitureController** :

```php
class VoitureController extends Controller
{
  public function destroy($id)
  {
    $voiture = Voiture::findOrFail($id);
    $voiture->delete();

    return redirect('/voitures');
  }
}
```

Cette méthode va d'abord vérifier si l'id de la voiture existe. Si oui, il supprimera cet enregistrement de la base de données.

Cela redirigera ensuite l'utilisateur vers la page **/voitures**.

## Liens utiles

[Documentation de Laravel - DB Delete](https://laravel.com/docs/8.x/queries#delete-statements)

## Retour au sommaire

[<- Retour au sommaire](https://github.com/d0tcom/laravel)

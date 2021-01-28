# Faire une requête (Query Builder)

Pour faire une requête vers votre BDD, par exemple pour **afficher une liste d'utilisateur**; vous allez faire cette requête dans votre contrôleur 'UserController' :

```php
class UserController extends Controller
{
    /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */
    public function index()
    {
        $users = DB::table('users')->get();

        return view('user.index', ['users' => $users]);
    }
}
```

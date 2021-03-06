# Migration

Les migrations vous permettent de définir un schéma de base de donnée pour votre application. Vous pouvez y ajouter, modifier, une table, des colonnes à l'intérieur de ces tables... Pour maintenir et gérer votre base de donnée, on utilisera les migrations.

Les migrations dans notre projet se situent dans le dossier **database/migrations/** Il y en a 3 par défaut.

Chaque migration est un fichier .php dans lequel se situe une classe.

- La fonction **up()** crée la table et définie sa structure.
- La fonction **down()** supprime la table.

## Créer une migration

Pour créer une migration, tapez la commande suivante (ici l'example est une table contenant des voitures)

```
php artisan make:migration create_voitures_table
```

## Ajouter une colonne à notre table

Pour ajouter une nouvelle colonne à notre table, il faut aller dans la migration que l'on vient de créer et ajouter par exemple :

```php
$table->string('marque');
$table->string('modele');
```

```php{13,14}
class CreateVoituresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('voitures', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('marque');
            $table->string('modele');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pizzas');
    }
}

```

Ensuite, nous allons faire un rollback pour revenir à l'état initial, cela va supprimer les colonnes et les remettre avec la nouvelle que nous venons d'ajouter :

```php
php artisan migrate:refresh
```

## Actualiser/Lancer une nouvelle migration

Pour lancer une nouvelle migration dans la base de données, tapez :

```
php artisan migrate
```

Cela va ajouter toutes les tables crées à la base de données.

## Ajouter une NOUVELLE colonne (sans prendre de risque)

```
php artisan make:migration add_price_to_voitures_table
```

Cela va créer une nouvelle migration et sélectionner la table correcte pour y ajouter la nouvelle colonne.

```php
public function up()
    {
        Schema::table('voitures', function (Blueprint $table) {
            $table->integer('price');
        });
    }
```

Pour sauvegarder ces changements, il faudra taper :

```
php artisan migrate
```

## Commandes migration

```
php artisan
```

```
migrate
migrate:fresh        Supprime toutes les tables et re-fait toutes les migrations
migrate:install      Créer le dossier pour les migrations
migrate:refresh      Reset et re-lance toutes les migrations
migrate:reset        Fait un retour en arrière de toutes les migrations de la BDD (rollback)
migrate:rollback     Fait un retour en arrière de la dernière migration de la BDD (rollback)
migrate:status       Affiche le status de chaque migration
```

## Liens utiles

- [Documentation de Laravel - Migration](https://laravel.com/docs/8.x/migrations#introduction)
- [Cours intéressant sur les migrations](https://laravel.sillo.org/cours-laravel-6-les-donnees-migrations-et-modeles/)

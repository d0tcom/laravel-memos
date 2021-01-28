# Se repérer dans une relation entre des tables

On peut penser de cette manière pour créer une relation entre les tables, One to One, One to Many, Many to Many :

- Dans la table **avec la clé étrangère (foreign key)**, utiliser **belongsTo**
- Dans l'autre table **sans la clé étrangère**, utiliser **hasOne** ou **hasMany**
- Si les deux ont une clé étrangère, utiliser **Many To Many** et utiliser **belongsToMany** dans les deux

## Liens utiles

[Documentation de Laravel - Les relations](https://laravel.com/docs/8.x/eloquent-relationships)

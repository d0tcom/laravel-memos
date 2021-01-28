### Ne pas échapper les caractères spéciaux

Par exemple vous allez chercher du HTML dans votre base de données, pour cette raison vous allez vouloir l'afficher dans le navigateur

Pour ne pas échapper les caractères spéciaux dans une requête URL, vous pouvez faire comme ça :

```html
<div>
  <p>Nom : {!! $name !!}</p>
</div>
```

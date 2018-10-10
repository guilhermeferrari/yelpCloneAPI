# yelpCloneAPI
Utilizaçao de mapas com o react native.

App feito com base na série de videos: [Yelp Clone (Turbo 360)](https://www.youtube.com/watch?v=sxKppOV6X04)

# Keys

Para a ultilização correta, deve-se criar um arquivo xml em `android/app/res/values`
esse arquivo deve possuir a API KEY, exemplo:

```xml
<resources>
    <string name="google_maps_api_key">XXXX</string>
</resources>
```

Esse string pode ser referenciada em outro `.xml` da seguinte forma:

```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="@string/google_maps_api_key"/>
```

Esse arquivo específico foi adicionado ao `.gitignore` para evitar que outras pessoas com acesso a esse repositório usem e key indevidamente.


## restaurants.json

Arquivo fornecido pela aula. No tutorial utilizam o MondoDB. O arquivo original nao é um array: `[]`, e os objetos nao estão separados por `,`, então editei o arquivo fazendo as correções para importar no Firebase, que é mais familiar.
Se no decorrer das aulas não der certo utilizar o Firebase, procuro como configurar o MongoDB
___
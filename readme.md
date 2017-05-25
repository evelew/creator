O Creator facilitador usado para inicializar projetos com Laravel e Gulp.

O projeto será criado na pasta ao lado de onde estiver o Creatpr e a estrutura dele ficará assim:
```
raíz
 - assets
  - myDev
   - css
    - images
    - sass
     - *pastas que você nomear*
      - *arquivos que você nomear*
   - images
   - js
    - *pastas que você nomear*
      - *arquivos que você nomear*
 - laravel
 - node_modules
 gulpfile.js
 package.json
```

OBS: os arquivos dentro da pasta `copy` serão copiados e colados dentro do novo projeto. (Por enquanto apenas os arquivos `gulpfile.js` e `package.json` estão sendo copiados).

> Como instalar: 

Faça o download desse repositório e rode um `npm install`.

> Como usar:

Vá até a raiz do projeto e rode `npm app.js`, responda as questões do terminal (sobre nome de pastas e arquivos) e elas serão criadas, no final é executado um `npm install` e acontece a instalação do Laravel.
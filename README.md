# vue-todo-list

A responsive designed simple todo/done list with draggable items created with VUE CLI

## Implemented Libraries
* [Vue draggable](https://www.npmjs.com/package/vuedraggable) - allow to drag and drop elements on the list
* [Vue draggable](https://www.creative-tim.com/vuematerial) - to apply styles similar to angular material design library

## To test in development mode:

1. Project setup
```
npm install
```

2. Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

## Migration approach
1. Running original application
2. Checking libraries and structure (what to reuse)
3. Develop app trying to reuse as much as I could (copied some HTML, styles and logic)
4. Modified and adapt to Vue.js, make it work
5. Once the app is working, installed:
  * vue draggable to make items drag and drop
  * vue material to give a look and feel oriented to material design
  * material design icons from google
6. Finally I added some styles to make it more like the original. I also added responsive styles to make it adaptable for different viewport sizes.

*Note: The design of the original application has many issues: different design approaches, ununiform styles, not responsive design, etc. But I followed instructions and tried to make it as much close to it.*

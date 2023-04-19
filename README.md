# Prueba_Tecnica_Rebus

# Instalación

Instalar Node.js

`npm init`

Instalar Cypress

`npm install cypress --save-dev`

Abrir Cypress

`npx cypress open `
`npm run cypress:open`

Instalar la libreria Faker

Faker nos permitire crear correos electronicos aleatorios

`npm install faker --save-dev`

Instalar Mocha

Mocha nos permitira utilizar hooks

`npm install mocha --save-dev`

# Uso
El Proyecto cuenta con un unico archivo `cy.js` el cual contiene el set de pruebas con cada uno de los test cases

# Informe de errores
Esta página está diseñada específicamente para fines de prueba. Como tal, es posible que experimentes algunos errores o fallas durante la ejecución de las pruebas. Por ejemplo, es posible que ciertas funcionalidades no funcionen correctamente o que algunos elementos no se carguen correctamente en la página. Tambien es de resaltar que las cuentas o usuarios creados se eliminan automaticamente pasado 10 minutos

# Autor
Carlos Andres Giraldo Marin

# Observaciones
Cada uno de los casos de prueba cuenta con una gran cantidad de esperas explicitas, ya que toda la pagina web se maneja con un iframe y los elementos no cargaban de forma rapida

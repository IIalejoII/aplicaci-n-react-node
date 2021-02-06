
Examen para MELI realizado por Alejandro Torres.

# Para construir una imagen de Docker
Si se desea dockerizar la imagen y correrla en un ambiente local se puede ejecutar el siguiente comando en la raíz del proyecto: docker build -t examen-frontend-meli .

luego para levantar la imagen:

/ running on Image
docker run -it -p  3080:3080 --name react-node-ui examen-frontend-meli

# Detalles adicionales 
Es un proyecto que usa React.js para el frontedn y node.js para servir la aplicación y algunos endpoints que ocupara la aplicación.

No tuve mucho tiempo para poder avanzar como quería esta aplicación web, sin embargo comprendo los requisitos y no pude cubrirlos todos.

Para terminar de manera prolija la aplicación


# Para terminar

Para poder terminar los puntos hubiera hecho lo siguiente:

- Construir endpoint para consultar un solo producto.
- Desarrollar la función de busqueda, actualmente trae todos los productos independientemente de lo que busques.
- Construir endpoint para items.
- Seguir modificando estilos.
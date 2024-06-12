# Fundamentos de las aplicaciones web.

## Modelo de Objetos del Documento o DOM.

El Modelo de Objetos del Documento (DOM) es una interfaz de programación que proporciona una representación estructurada y jerárquica de documentos HTML y XML. 
Permite a los desarrolladores acceder y manipular el contenido, la estructura y el estilo de estos documentos de manera dinámica utilizando lenguajes de programación como JavaScript.

Manipulando el DOM, tienes infinitas posibilidades. Puedes crear aplicaciones que actualicen los datos de la página sin necesidad de actualizar. Además, puedes crear aplicaciones 
personalizables por el usuario y luego cambiar el diseño de la página sin actualizar. Puedes arrastrar, mover y eliminar elementos.

En DOM, los documentos tienen una estructura lógica que es muy parecida a un árbol; para ser más preciso, es más bien como un "bosque" o una "arboleda", que puede contener más de un árbol. 
Cada documento contiene cero o un nodo doctype, uno nodo de elemento de documento, y cero o más comentarios o instrucciones de tratamiento; el elemento del documento sirve como la raíz del 
árbol para el documento. Sin embargo, DOM no especifica que los documentos deban ser implementados como un árbol o un bosque, ni tampoco especifica como deben implementarse las relaciones 
entre los objetos. DOM es un modelo lógico que puede implementarse de cualquier manera que sea conveniente. En esta especificación, usamos el término modelo de estructura para describir la 
representación en forma de árbol de un documento. También utilizamos el termino "árbol" cuando refiriendose al arreglo de aquellos artículos de información que pueden ser alcanzados utilizando 
métodos "exploració por árbol"; (esto no incluye atributos).

## Nodos del DOM:

- Elementos: Representan las etiquetas HTML, como div, p, span, etc. Los elementos pueden contener otros elementos, texto u otros tipos de nodos.
- Texto: Representa el contenido textual dentro de un elemento.
- Atributos: Representan los atributos de un elemento HTML, como id, class, src, etc.
- Comentarios: Representan comentarios dentro del código HTML.
- Documento: Representa el documento en sí mismo y es el nodo raíz del árbol DOM.



## Manipulando el objeto document desde la consola.

El nodo superior del árbol DOM de un documento HTML es el objeto document. Este objeto actúa como el punto de entrada principal para interactuar con el contenido de la página web mediante la DOM-API.

Manipular el objeto document desde la consola es una habilidad esencial para los desarrolladores web. Permite probar y aplicar cambios directamente en la página, facilitando el desarrollo y la depuración 
de aplicaciones web. Con una buena comprensión de la DOM-API, puedes realizar una amplia variedad de operaciones para mejorar la interactividad y la apariencia de tu sitio web.

### Operaciones Comunes Usando el Objeto document

- Acceder a Elementos del DOM.

Puedes acceder a elementos del DOM utilizando varios métodos del objeto document.

- Manipular Contenido de Elementos.

Una vez que has accedido a un elemento, puedes modificar su contenido.

- Modificar Atributos de Elementos.

Puedes cambiar o establecer atributos de elementos HTML.

- Modificar Estilos de Elementos.

Puedes cambiar los estilos CSS de un elemento directamente.

- Agregar y Eliminar Clases.

La manipulación de clases es esencial para cambiar estilos y comportamientos.

- Escuchar y Manejar Eventos.

Puedes agregar controladores de eventos a elementos para hacer la página interactiva.


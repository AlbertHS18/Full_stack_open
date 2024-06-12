```mermaid
sequenceDiagram
    participant User as Usuario
    participant Browser as Navegador
    participant Server as Servidor

    Note right of User: El usuario escribe una nota en el campo de texto
    User->>Browser: Hace clic en el botón "Save"
    
    Browser->>Server: POST /new_note con el contenido de la nueva nota
    activate Server
    Note right of Server: El servidor procesa la nueva nota y la almacena
    Server-->>Browser: 201 Created (Nota guardada con éxito)
    deactivate Server

    Browser->>Server: GET /notes
    activate Server
    Server-->>Browser: Documento HTML con todas las notas actualizadas
    deactivate Server

    Browser->>Server: GET /styles.css
    activate Server
    Server-->>Browser: Archivo CSS
    deactivate Server

    Browser->>Server: GET /app.js
    activate Server
    Server-->>Browser: Archivo JavaScript
    deactivate Server

    Note right of Browser: El navegador ejecuta el código JavaScript para actualizar las notas

    Browser->>Server: GET /data.json
    activate Server
    Server-->>Browser: JSON con todas las notas [{ "content": "JavaScript is versatile", "date": "2023-2-15" }, ... , { "content": "nueva nota", "date": "2024-6-12" }]
    deactivate Server

    Note right of Browser: El navegador renderiza la lista de notas incluyendo la nueva nota



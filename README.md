# espacios
Administracón de espacios

## Server

### API

See [API documentation](server/docs/api/Espacios.postman_collection.json)
with Postman for endpoints exposed and examples of usage.

### Setting Up

1. Set and export environment variables using the `.env.tmpl` file as template.
2. To make pre-signed URLs work, add new records to the `/etc/hosts` file in your OS:

    ```txt
    ...
    127.0.0.1 minio
    ```

### Run

1. Run containers:

    ```bash
    docker-compose up
    ```

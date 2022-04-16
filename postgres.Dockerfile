FROM postgres:13

COPY server/scripts/postgres/* /docker-entrypoint-initdb.d/

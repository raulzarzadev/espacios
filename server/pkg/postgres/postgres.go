package postgres

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type DB struct {
	pool *sqlx.DB
}

var (
	dbHost     string
	dbName     string
	dbPassword string
	dbPort     string
	dbUser     string
)

func init() {
	dbHost = os.Getenv("DB_HOST")
	dbName = os.Getenv("DB_NAME")
	dbPassword = os.Getenv("DB_PASSWORD")
	dbPort = os.Getenv("DB_PORT")
	dbUser = os.Getenv("DB_USER")
}

func Connect() (DB, error) {
	dbInfo := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		dbHost, dbPort, dbUser, dbPassword, dbName,
	)
	pool, err := sqlx.Connect("postgres", dbInfo)
	if err != nil {
		log.Fatalln(err)
	}

	log.Printf(
		"Database connection to %s:%s/%s established successfully!",
		dbHost, dbPort, dbName,
	)

	return DB{pool}, nil
}

func (db *DB) Close() {
	db.pool.Close()
}

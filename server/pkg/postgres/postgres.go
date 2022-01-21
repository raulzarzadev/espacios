package postgres

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type db struct {
	Pool *sqlx.DB
}

var DB db

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

func Open() error {
	dbInfo := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		dbHost, dbPort, dbUser, dbPassword, dbName,
	)
	pool, err := sqlx.Connect("postgres", dbInfo)
	if err != nil {
		return err
	}

	DB.Pool = pool
	log.Printf(
		"Database connection to %s:%s/%s established successfully!",
		dbHost, dbPort, dbName,
	)

	return nil
}

func Close() {
	DB.Pool.Close()
}

package main

import (
	"log"
	"spaces/internal/app/spaces"
	"spaces/pkg/postgres"
)

func main() {
	db, err := postgres.Connect()
	if err != nil {
		log.Fatalf("Unable to connect to DB: %s", err)
	}
	defer db.Close()

	server := spaces.NewServer()
	if err := server.Start(); err != nil {
		log.Fatalf("Unable to start spaces server: %s", err)
	}
}

package main

import (
	"log"
	"spaces/internal/app/spaces"
)

func main() {
	server := spaces.NewServer()
	if err := server.Start(); err != nil {
		log.Fatalf("Unable to start spaces server: %s", err)
	}
}

package handlers

import (
	"log"
	v1 "spaces/internal/handlers/v1"

	"github.com/gin-gonic/gin"
)

type Ping struct{}

func (Ping) Pong(ctx *gin.Context) {
	version, err := ctx.Get("version")
	if err == false {
		version = "v1"
		log.Printf("Unable to read API version. Using latest version: %s", version)
	}

	switch version {
	case "v1":
		handler := v1.Ping{}
		handler.Pong(ctx)
	}
}

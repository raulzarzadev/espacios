package controller

import (
	"log"
	v1 "spaces/internal/controller/v1"

	"github.com/gin-gonic/gin"
)

type Ping struct{}

func (c Ping) Pong(ctx *gin.Context) {
	version, err := ctx.Get("version")
	if err == false {
		version = "v1"
		log.Printf("Unable to read API version. Using latest version: %s", version)
	}

	switch version {
	case "v1":
		controller := v1.Ping{}
		controller.Pong(ctx)
	}
}

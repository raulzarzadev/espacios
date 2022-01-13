package routes

import (
	"spaces/internal/handlers/v1"

	"github.com/gin-gonic/gin"
)

func Ping(rg *gin.RouterGroup, apiVersion string) {
	group := rg.Group("/ping")
	h := handlers.Ping{}

	switch apiVersion {
	case "v1":
		group.GET("/", h.Pong)
	}

}

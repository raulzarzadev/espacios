package routes

import (
	"spaces/internal/handlers"

	"github.com/gin-gonic/gin"
)

func AddPing(rg *gin.RouterGroup) {
	group := rg.Group("/ping")

	h := handlers.Ping{}
	group.GET("/", h.Pong)
}

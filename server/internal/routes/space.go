package routes

import (
	"spaces/internal/handlers/v1"

	"github.com/gin-gonic/gin"
)

func Space(rg *gin.RouterGroup, apiVersion string) {
	group := rg.Group("/space")
	h := handlers.Space{}

	group.POST("/", h.Register)
}

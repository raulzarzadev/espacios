package routes

import (
	"spaces/internal/handlers/v1"

	"github.com/gin-gonic/gin"
)

func Address(rg *gin.RouterGroup, apiVersion string) {
	group := rg.Group("/adresses")
	h := handlers.Address{}

	group.POST("/", h.Register)
	group.GET("/:id", h.Read)
	group.GET("/", h.List)
	group.PUT("/", h.Update)
	group.DELETE("/:id", h.Delete)
}

package routes

import (
	"spaces/internal/handlers/v1"

	"github.com/gin-gonic/gin"
)

func Space(rg *gin.RouterGroup, apiVersion string) {
	group := rg.Group("/spaces")
	h := handlers.Space{}

	group.POST("/", h.Register)
	group.POST("/:id/files", h.UploadFiles)
	group.GET("/:id/files/:name", h.DownloadFile)
}

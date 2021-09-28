package router

import (
	"spaces/internal/controller"

	"github.com/gin-gonic/gin"
)

func (r Router) addPing(rg *gin.RouterGroup) {
	group := rg.Group("/ping")

	controller := controller.Ping{}
	group.GET("/", controller.Pong)
}

package router

import (
	"spaces/internal/middleware"

	"github.com/gin-gonic/gin"
)

type Router struct {
	router *gin.Engine
}

func SetUp() Router {
	r := Router{
		router: gin.Default(),
	}
	r.router.Use(middleware.ReadAPIVersion())

	v1 := r.router.Group("/v1")

	r.addPing(v1)

	return r
}

func (r Router) Run() error {
	return r.router.Run()
}

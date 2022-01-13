package spaces

import (
	"spaces/internal/middlewares"
	"spaces/internal/routes"

	"github.com/gin-gonic/gin"
)

type Server struct {
	router *gin.Engine
}

func NewServer() Server {
	s := Server{
		router: gin.Default(),
	}
	s.addMiddlewares()
	s.addRoutesV1()

	return s
}

func (s *Server) Start() error {
	return s.router.Run()
}

func (s *Server) addMiddlewares() {
	s.router.Use(middlewares.ReadAPIVersion())
}

func (s *Server) addRoutesV1() {
	apiVersion := "v1"
	v1 := s.router.Group("/" + apiVersion)

	routes.Ping(v1, apiVersion)

}

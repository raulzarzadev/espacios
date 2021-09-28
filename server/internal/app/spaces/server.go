package spaces

import "spaces/internal/router"

type Server struct {
	router router.Router
}

func NewServer() Server {
	s := Server{
		router: router.SetUp(),
	}

	return s
}

func (s *Server) Start() error {
	return s.router.Run()
}

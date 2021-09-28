package v1

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Ping struct{}

func (c *Ping) Pong(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

package middleware

import (
	"strings"

	"github.com/gin-gonic/gin"
)

func ReadAPIVersion() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		path := strings.Split(ctx.FullPath(), "/")
		ctx.Set("version", path[1])

		ctx.Next()
	}
}

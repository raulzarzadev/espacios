package handlers

import (
	"fmt"
	"net/http"
	"spaces/internal/models"

	"github.com/gin-gonic/gin"
)

type Space struct{}

func (Space) Register(ctx *gin.Context) {
	var space models.Space
	err := ctx.BindJSON(&space)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	space, err = space.Create()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	fmt.Printf("Space: %v\n", space)
	ctx.JSON(http.StatusOK, space)
}

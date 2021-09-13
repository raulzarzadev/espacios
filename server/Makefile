all: build

build:
	GOOS=linux GOARCH=amd64 go build -o bin/spaces-server cmd/server/main.go

clean:
	go clean
	rm -rf bin/

run:
	go run cmd/server/main.go

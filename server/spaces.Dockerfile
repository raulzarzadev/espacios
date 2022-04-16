FROM golang:1.17.2-alpine AS builder

ENV GO111MODULE=on
WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o spaces-server cmd/spaces/main.go

FROM scratch

COPY --from=builder /app/spaces-server /app/

ENV GIN_MODE=release
ENV PORT=8080
EXPOSE 8080

CMD ["/app/spaces-server"]

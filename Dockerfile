# syntax=docker/dockerfile:1

#
#  BUILD
#
FROM golang:1.16-alpine AS GOBuild

WORKDIR /tempApp

COPY go.mod ./
COPY app.go ./

# removing debug informations and compile only for linux target and disabling cross compilation
# https://chemidy.medium.com/create-the-smallest-and-secured-golang-docker-image-based-on-scratch-4752223b7324
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags="-w -s" -o desafio01 .

#
#  DEPLOY
#
# Creating a multi-stage build image only with GO executable file
FROM scratch
WORKDIR /app/
COPY --from=GOBuild /tempApp/desafio01 ./app

CMD [ "./app" ]
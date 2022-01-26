package storage

import (
	"context"
	"io"
	"os"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

type UploadInfo minio.UploadInfo

type File struct {
	Filename string
	Data     io.Reader
	Size     int64
}

type MinioClient struct {
	client *minio.Client
}

var (
	host     string
	user     string
	password string
	bucket   string
)

func init() {
	host = os.Getenv("MINIO_HOST")
	user = os.Getenv("MINIO_USER")
	password = os.Getenv("MINIO_PASSWORD")
	bucket = os.Getenv("MINIO_BUCKET")
}

func OpenConnection() (MinioClient, error) {
	client, err := minio.New(host, &minio.Options{
		Creds:  credentials.NewStaticV4(user, password, ""),
		Secure: false,
	})
	if err != nil {
		return MinioClient{}, err
	}

	ctx := context.TODO()
	exists, err := client.BucketExists(ctx, bucket)
	if err != nil {
		return MinioClient{}, err
	}

	if !exists {
		err := client.MakeBucket(ctx, bucket, minio.MakeBucketOptions{})
		if err != nil {
			return MinioClient{}, err
		}
	}

	return MinioClient{client: client}, nil
}

func (c *MinioClient) UploadFile(file File) (UploadInfo, error) {
	uploadInfo, err := c.client.PutObject(
		context.TODO(), bucket, file.Filename, file.Data, file.Size,
		minio.PutObjectOptions{},
	)
	if err != nil {
		return UploadInfo{}, err
	}

	return UploadInfo(uploadInfo), nil
}

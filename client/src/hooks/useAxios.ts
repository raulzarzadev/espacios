import { useState, useEffect } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const useAxios = ({
  url,
  method = 'get',
  data = null,
  headers = null
}: AxiosRequestConfig) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      axios({
        method,
        url,
        data: JSON.parse(data),
        headers: JSON.parse(headers)
      })
        .then((res: AxiosResponse) => {
          setResponse(res.data)
        })
        .catch((err: string) => {
          setError(err)
        })
        .finally(() => {
          setloading(false)
        })
    }
    fetchData()
  }, [method, url, data, headers])

  return { response, error, loading }
}

export default useAxios

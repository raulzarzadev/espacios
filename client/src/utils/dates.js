import { formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns'
import { es } from 'date-fns/locale'

export const fromNow = (date = new Date(), options) => {
  return formatDistanceToNowStrict(date, { locale: es, ...options,   })
}

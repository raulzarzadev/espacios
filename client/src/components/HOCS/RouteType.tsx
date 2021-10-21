import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from 'src/hooks/useAuth'
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'

export default function RouteType({
  children,
  type
}: {
  children: ReactNode
  type: 'private' | 'public' | 'not-logged-in'
}) {
  const router = useRouter()
  const {
    user: { isLoggedIn }
  } = useAuth()
  const redirectToHome = () => {
    router.replace('/')
  }

  useEffect(() => {
    if (type === 'private') {
      !isLoggedIn && redirectToHome()
    } else if (type === 'public') {
      // do noting ??
    } else if (type === 'not-logged-in') {
      isLoggedIn && redirectToHome()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, isLoggedIn])

  return (
    <div className="">
      <>{children}</>
    </div>
  )
}

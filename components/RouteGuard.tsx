import { useState, useEffect, FC } from 'react'
import { useRouter } from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'

export { RouteGuard }

interface RouteGuardProps {
  children?: any
}

const RouteGuard: FC<RouteGuardProps> = ({ children }) => {
  const { address, getNetworkMetadata } = useWeb3()

  console.log('address', address)

  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    // on initial load - run auth check
    if (address) authCheck(router.asPath, address)

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function authCheck(url: string, address: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/']
    const path = url.split('?')[0]
    console.log({ address })
    if (!address && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push({
        pathname: '/',
        query: { returnUrl: router.asPath },
      })
    } else {
      setAuthorized(true)
    }
  }

  return authorized && children
}

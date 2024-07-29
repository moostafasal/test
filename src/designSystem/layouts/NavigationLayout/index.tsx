import { useUserContext } from '@/core/context'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { user, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  let itemsLeftbar = [
    
  ]

  let itemsTopbar = [

{
      key: '/home',
      label: 'Home Page',
      onClick: () => goTo('/home'),
    },

{
      key: '/my-bookings',
      label: 'My Bookings Page',
      onClick: () => goTo('/my-bookings'),
    },

{
      key: '/upload-license',
      label: 'Upload Driver's License Page',
      onClick: () => goTo('/upload-license'),
    },

{
      key: '/payment',
      label: 'Payment Page',
      onClick: () => goTo('/payment'),
    },

{
      key: '/terms',
      label: 'Rental Terms and Conditions Page',
      onClick: () => goTo('/terms'),
    },

{
      key: '/support',
      label: 'Customer Support Page',
      onClick: () => goTo('/support'),
    },

{
      key: '/admin/cars',
      label: 'Admin Cars Management Page',
      onClick: () => goTo('/admin/cars'),
    },

{
      key: '/admin/bookings',
      label: 'Admin Bookings Management Page',
      onClick: () => goTo('/admin/bookings'),
    },

]

  let itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar items={itemsLeftbar} logo={<Logo className="m-2" />} />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              logo={!isLeftbar && <Logo height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Spin, Row, Col, Card } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [paymentLink, setPaymentLink] = useState<string | null>(null)

  const { data: booking, isLoading } = Api.booking.findUnique.useQuery({
    where: { id: params.bookingId },
    include: { car: true, payments: true },
  })

  const { mutateAsync: getPaymentLink } =
    Api.billing.getPaymentLink.useMutation()

  useEffect(() => {
    if (booking && booking.totalPrice) {
      getPaymentLink({ productId: booking.id })
        .then(link => setPaymentLink(link))
        .catch(error =>
          enqueueSnackbar('Failed to generate payment link', {
            variant: 'error',
          }),
        )
    }
  }, [booking, getPaymentLink])

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!booking) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Booking Not Found</Title>
        <Paragraph>We couldn't find the booking you're looking for.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Payment for Booking</Title>
      <Paragraph>Confirm your rental by making a payment.</Paragraph>
      <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Card
            title={`Booking for ${booking.car?.brand} ${booking.car?.model}`}
            bordered={false}
            style={{ textAlign: 'center' }}
          >
            <Paragraph>
              <Text strong>Total Price: </Text>${booking.totalPrice?.toString()}
            </Paragraph>
            {paymentLink ? (
              <Button
                type="primary"
                icon={<CreditCardOutlined />}
                size="large"
                href={paymentLink}
              >
                Pay Now
              </Button>
            ) : (
              <Spin size="large" />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}

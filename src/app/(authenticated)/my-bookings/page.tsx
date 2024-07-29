'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Button,
  List,
  Card,
  Row,
  Col,
  Spin,
  Popconfirm,
} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MyBookingsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: userData,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { bookings: { include: { car: true } } },
  })

  const { mutateAsync: cancelBooking } = Api.booking.delete.useMutation()

  const handleCancelBooking = async (bookingId: string) => {
    try {
      await cancelBooking({ where: { id: bookingId } })
      enqueueSnackbar('Booking cancelled successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to cancel booking', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Booking History</Title>
      <Text>Here you can view and manage your bookings.</Text>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={userData?.bookings}
        renderItem={booking => (
          <List.Item>
            <Card>
              <Row>
                <Col span={16}>
                  <Title level={4}>
                    {booking.car?.brand} {booking.car?.model}
                  </Title>
                  <Text>
                    Start Date: {dayjs(booking.startDate).format('YYYY-MM-DD')}
                  </Text>
                  <br />
                  <Text>
                    End Date: {dayjs(booking.endDate).format('YYYY-MM-DD')}
                  </Text>
                  <br />
                  <Text>Total Price: ${booking.totalPrice?.toString()}</Text>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                  <Popconfirm
                    title="Are you sure you want to cancel this booking?"
                    onConfirm={() => handleCancelBooking(booking.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="primary" danger icon={<DeleteOutlined />}>
                      Cancel Booking
                    </Button>
                  </Popconfirm>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}

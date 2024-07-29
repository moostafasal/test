'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Row, Col, Card, DatePicker, Button, Spin } from 'antd'
import { CarOutlined, CalendarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CarDetailsPage() {
  const router = useRouter()
  const params = useParams<{ carId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: car, isLoading: carLoading } = Api.car.findUnique.useQuery({
    where: { id: params.carId },
    include: { bookings: true },
  })

  const { mutateAsync: bookCar } = Api.booking.create.useMutation()

  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null,
  )

  const handleBooking = async () => {
    if (!dateRange || !user) {
      enqueueSnackbar(
        'Please select a date range and ensure you are logged in.',
        { variant: 'error' },
      )
      return
    }

    try {
      const [startDate, endDate] = dateRange
      await bookCar({
        data: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          userId: user.id,
          carId: car.id,
          status: 'PENDING',
          totalPrice: car.pricePerDay * dayjs(endDate).diff(startDate, 'day'),
        },
      })
      enqueueSnackbar('Car booked successfully!', { variant: 'success' })
      router.push('/my-bookings')
    } catch (error) {
      enqueueSnackbar('Failed to book the car. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <CarOutlined /> Car Details
      </Title>
      <Paragraph>
        View the details of the car and book it for your desired date range.
      </Paragraph>
      {carLoading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          <Col span={24}>
            <Card
              cover={<img alt={car?.model} src={car?.imageUrl} />}
              title={`${car?.brand} ${car?.model}`}
            >
              <Paragraph>{car?.description}</Paragraph>
              <Text strong>Type:</Text> <Text>{car?.type}</Text>
              <br />
              <Text strong>Price per day:</Text>{' '}
              <Text>${car?.pricePerDay?.toString()}</Text>
              <br />
              <Text strong>Availability Status:</Text>{' '}
              <Text>{car?.availabilityStatus}</Text>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              title={
                <>
                  <CalendarOutlined /> Book this Car
                </>
              }
            >
              <RangePicker
                onChange={dates => setDateRange(dates)}
                disabledDate={current =>
                  current && current < dayjs().endOf('day')
                }
              />
              <Button
                type="primary"
                onClick={handleBooking}
                style={{ marginTop: '16px' }}
              >
                Book Now
              </Button>
            </Card>
          </Col>
        </Row>
      )}
    </PageLayout>
  )
}

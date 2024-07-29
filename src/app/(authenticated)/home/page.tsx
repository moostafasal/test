'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Select, InputNumber, Spin } from 'antd'
import { CarOutlined, DollarOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [type, setType] = useState<string | undefined>(undefined)
  const [brand, setBrand] = useState<string | undefined>(undefined)
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined)

  const {
    data: cars,
    isLoading,
    refetch,
  } = Api.car.findMany.useQuery({
    where: {
      AND: [
        type ? { type } : {},
        brand ? { brand } : {},
        maxPrice ? { pricePerDay: { lte: maxPrice } } : {},
      ],
    },
  })

  useEffect(() => {
    refetch()
  }, [type, brand, maxPrice])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Available Cars</Title>
      <Text>
        Select a car to rent from the list below. Use the filters to narrow down
        your options.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col span={8}>
          <Select
            placeholder="Filter by Type"
            style={{ width: '100%' }}
            onChange={value => setType(value)}
            allowClear
          >
            <Option value="SUV">SUV</Option>
            <Option value="Sedan">Sedan</Option>
            <Option value="Hatchback">Hatchback</Option>
            <Option value="Convertible">Convertible</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select
            placeholder="Filter by Brand"
            style={{ width: '100%' }}
            onChange={value => setBrand(value)}
            allowClear
          >
            <Option value="Toyota">Toyota</Option>
            <Option value="Ford">Ford</Option>
            <Option value="BMW">BMW</Option>
            <Option value="Mercedes">Mercedes</Option>
          </Select>
        </Col>
        <Col span={8}>
          <InputNumber
            placeholder="Max Price per Day"
            style={{ width: '100%' }}
            onChange={value => setMaxPrice(value)}
            prefix={<DollarOutlined />}
          />
        </Col>
      </Row>

      {isLoading ? (
        <Spin size="large" style={{ display: 'block', marginTop: 20 }} />
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          {cars?.map(car => (
            <Col span={8} key={car.id}>
              <Card
                hoverable
                cover={<img alt={car.model} src={car.imageUrl} />}
                onClick={() => router.push(`/cars/${car.id}`)}
              >
                <Card.Meta
                  title={`${car.brand} ${car.model}`}
                  description={
                    <>
                      <Text>{car.type}</Text>
                      <br />
                      <Text>{`$${car.pricePerDay?.toString()} per day`}</Text>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}

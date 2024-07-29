'use client'

import { Prisma } from '@prisma/client'
import { Typography, Table, Button, Space, Tag, Spin } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminBookingsManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: bookings,
    isLoading,
    refetch,
  } = Api.booking.findMany.useQuery({
    include: { user: true, car: true },
  })

  const { mutateAsync: updateBooking } = Api.booking.update.useMutation()

  const handleApprove = async (id: string) => {
    try {
      await updateBooking({ where: { id }, data: { status: 'approved' } })
      enqueueSnackbar('Booking approved successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to approve booking', { variant: 'error' })
    }
  }

  const handleReject = async (id: string) => {
    try {
      await updateBooking({ where: { id }, data: { status: 'rejected' } })
      enqueueSnackbar('Booking rejected successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to reject booking', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (user: Prisma.UserGetPayload<{}>) => user?.name,
    },
    {
      title: 'Car',
      dataIndex: 'car',
      key: 'car',
      render: (car: Prisma.CarGetPayload<{}>) => `${car?.brand} ${car?.model}`,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag
          color={
            status === 'approved'
              ? 'green'
              : status === 'rejected'
                ? 'red'
                : 'blue'
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.BookingGetPayload<{}>) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<CheckOutlined />}
            onClick={() => handleApprove(record.id)}
            disabled={record.status === 'approved'}
          >
            Approve
          </Button>
          <Button
            type="danger"
            icon={<CloseOutlined />}
            onClick={() => handleReject(record.id)}
            disabled={record.status === 'rejected'}
          >
            Reject
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Admin Bookings Management</Title>
      <Text>
        As an admin, you can view all bookings and manage the rental operations
        by approving or rejecting user bookings.
      </Text>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Table
          dataSource={bookings}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      )}
    </PageLayout>
  )
}

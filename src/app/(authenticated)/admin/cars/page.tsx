'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Table,
  Space,
  Popconfirm,
  InputNumber,
  Upload,
} from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminCarsManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { data: cars, isLoading, refetch } = Api.car.findMany.useQuery({})
  const { mutateAsync: createCar } = Api.car.create.useMutation()
  const { mutateAsync: updateCar } = Api.car.update.useMutation()
  const { mutateAsync: deleteCar } = Api.car.delete.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const [form] = Form.useForm()
  const [editingCar, setEditingCar] = useState<Prisma.Car | null>(null)
  const [fileList, setFileList] = useState([])

  const handleFinish = async (values: Prisma.Car) => {
    try {
      if (editingCar) {
        await updateCar({ where: { id: editingCar.id }, data: values })
        enqueueSnackbar('Car updated successfully', { variant: 'success' })
      } else {
        await createCar({ data: values })
        enqueueSnackbar('Car added successfully', { variant: 'success' })
      }
      form.resetFields()
      setEditingCar(null)
      refetch()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteCar({ where: { id } })
      enqueueSnackbar('Car deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const handleEdit = (car: Prisma.Car) => {
    setEditingCar(car)
    form.setFieldsValue(car)
  }

  const handleUpload = async ({ file }) => {
    const response = await upload({ file })
    form.setFieldsValue({ imageUrl: response.url })
  }

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Price Per Day',
      dataIndex: 'pricePerDay',
      key: 'pricePerDay',
      render: (text: number) => text.toString(),
    },
    {
      title: 'Availability Status',
      dataIndex: 'availabilityStatus',
      key: 'availabilityStatus',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Prisma.Car) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Admin Cars Management</Title>
      <Text>
        Manage the car inventory by adding, updating, or removing cars.
      </Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ marginTop: 20 }}
      >
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please input the car type!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="brand"
          label="Brand"
          rules={[{ required: true, message: 'Please input the car brand!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="model"
          label="Model"
          rules={[{ required: true, message: 'Please input the car model!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pricePerDay"
          label="Price Per Day"
          rules={[
            { required: true, message: 'Please input the price per day!' },
          ]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="availabilityStatus"
          label="Availability Status"
          rules={[
            {
              required: true,
              message: 'Please input the availability status!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="imageUrl" label="Image URL">
          <Upload
            customRequest={handleUpload}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            {editingCar ? 'Update Car' : 'Add Car'}
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={cars}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        style={{ marginTop: 20 }}
      />
    </PageLayout>
  )
}

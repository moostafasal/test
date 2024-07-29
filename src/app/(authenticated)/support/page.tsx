'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CustomerSupportPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const { mutateAsync: createSupportRequest } =
    Api.customerSupport.create.useMutation()

  const handleSubmit = async (values: { message: string }) => {
    try {
      await createSupportRequest({
        data: {
          message: values.message,
          userId: user.id,
          status: 'Pending',
        },
      })
      enqueueSnackbar('Support request submitted successfully', {
        variant: 'success',
      })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to submit support request', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Contact Customer Support</Title>
          <Text>
            If you have any issues or questions, please let us know below.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={18} md={12}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                block
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}

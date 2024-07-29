'use client'

import { useState } from 'react'
import { Typography, Upload, Button, Spin, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UploadDriversLicensePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const [fileList, setFileList] = useState<any[]>([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = async () => {
    if (fileList.length === 0) {
      enqueueSnackbar('Please select a file to upload', { variant: 'error' })
      return
    }

    setUploading(true)
    try {
      const file = fileList[0]
      const { url } = await upload({ file })
      await updateUser({
        where: { id: user.id },
        data: { driversLicenseUrl: url },
      })
      enqueueSnackbar("Driver's license uploaded successfully", {
        variant: 'success',
      })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar("Failed to upload driver's license", { variant: 'error' })
    } finally {
      setUploading(false)
    }
  }

  const uploadProps = {
    onRemove: (file: any) => {
      setFileList(prevFileList => {
        const index = prevFileList.indexOf(file)
        const newFileList = prevFileList.slice()
        newFileList.splice(index, 1)
        return newFileList
      })
    },
    beforeUpload: (file: any) => {
      setFileList([file])
      return false
    },
    fileList,
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={18} md={12} lg={8}>
          <Title level={2}>Upload Driver's License</Title>
          <Text>
            Please upload your driver's license to verify your eligibility to
            rent a car.
          </Text>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={fileList.length === 0 || uploading}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Uploading' : 'Start Upload'}
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}

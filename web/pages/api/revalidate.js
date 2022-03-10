import { isValidRequest } from '@sanity/webhook'

const localSecret='sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu'

const remoteSecret='sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu'

const revalidateSecret = window.location.hostname === 'localhost' ? localSecret : remoteSecret

const revalidate = async (req, res) => {

  if (!isValidRequest(req, revalidateSecret)) {
    return res.status(401).json({
      success: false,
      message: 'Invalid signature',
    })
  }

  const page_uid = req.body.uid.current

  try {
    // Customise the pages you need to revalidate here.
    // Keep the is simple for now
    await res.unstable_revalidate(`/${page_uid}`)

    res.json({
      success: true,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error revalidating',
    })
  }
}

export default revalidate

import { isValidRequest } from '@sanity/webhook'

const previewSecret='sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu'

const revalidate = async (req, res) => {
  if (!isValidRequest(req, previewSecret)) {
    return res.status(401).json({
      success: false,
      message: 'Invalid secret',
    })
  }

  try {
    // Customise the pages you need to revalidate here.
    // Keep the is simple for now
    await res.unstable_revalidate('/our-research')

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

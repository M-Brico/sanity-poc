import { isValidRequest } from '@sanity/webhook'

const revalidate = async (req, res) => {
  if (!isValidRequest(req, process.env.SANITY_API_TOKEN)) {
    return res.status(401).json({
      success: false,
      message: 'Invalid signature',
    })
  }

  try {
    // Customise the pages you need to revalidate here.
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

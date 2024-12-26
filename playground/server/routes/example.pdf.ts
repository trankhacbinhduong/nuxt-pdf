export default defineEventHandler(async (event) => {
  const { page } = await useBrowser()

  await page.goto(`${getRequestURL(event).origin}/example`)
  setHeader(event, 'Content-Type', 'application/pdf')

  return page.pdf({ format: 'A4' })
})

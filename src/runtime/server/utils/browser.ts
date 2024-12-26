import type { H3Event } from 'h3'
import puppeteer from 'puppeteer'
import { useEvent, useNitroApp } from '#imports'

export async function useBrowser() {
  const currentEvent = useEvent()
  const nitroApp = useNitroApp()

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  nitroApp.hooks.hook('close', async () => {
    browser.close()
  })

  nitroApp.hooks.hookOnce('afterResponse', async (event: H3Event) => {
    if (currentEvent !== event) return
    await page.close()
  })

  return { browser, page }
}

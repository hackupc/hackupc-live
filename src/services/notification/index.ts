export function notify({
  body,
  title = 'HackUPC Live',
  icon = 'favicon.ico',
}: {
  body?: string
  title: string
  icon?: string
}): void {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon,
    })
  } else {
    askNotificationPermissions()
  }
}

export async function askNotificationPermissions(): Promise<boolean> {
  const permission = await Notification.requestPermission()
  return permission === 'granted'
}

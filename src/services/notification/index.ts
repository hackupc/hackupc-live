export function notify(
  body: string,
  title = 'HackUPC',
  icon = 'favicon.svg'
): void {
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      body,
      icon,
    })
    setTimeout(() => {
      notification.close()
    }, 7000)
  }
}

export function initPermissions(): void {
  if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }
  } else {
    console.warn('This browser does not support desktop notification')
  }
}

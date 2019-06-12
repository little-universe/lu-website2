export function preloadImage(url, debug) {
    const img = new Image()
    if (debug) {
        const now = new Date()
        img.onload = () => {
            console.warn('image loaded', url, (new Date()) - now)
        }
    }
    img.src = url
}
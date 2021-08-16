export const USERS = "users"
export const MESSAGES = "messages"

const DAY_SECONDS = 86400
export function getForDays(items, start, end= 0) {
    const now = new Date()
    const today = (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000).toFixed()
    return items.filter(item => (item.time > today - start * DAY_SECONDS) && (item.time < Date.now() / 1000 - end * DAY_SECONDS))
}
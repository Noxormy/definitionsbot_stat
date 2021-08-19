export const USERS = "users"
export const MESSAGES = "messages"

const DAY_SECONDS = 86400
export function getForDays(items, start, end= 0) {
    const now = new Date()
    const today = parseInt((new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000).toFixed())
    return items.filter(item => (item.time > today - (start - 1) * DAY_SECONDS) && (item.time < today - (end - 1) * DAY_SECONDS))
}

export function getForOneDay(items, day) {
    return getForDays(items, day, day - 1)
}
export const parseDay = day => (day[0] === "0" ? day.slice(1) : day)
export const formatDate = date => {
  const [year, month, day] = date.split("-")
  const monthMap = {
    "01": "stycznia",
    "02": "lutego",
    "03": "marca",
    "04": "kwietnia",
    "05": "maja",
    "06": "czerwca",
    "07": "lipca",
    "08": "sierpnia",
    "09": "września",
    10: "paźdzernika",
    11: "listopada",
    12: "grudnia",
  }
  return `${parseDay(day)} ${monthMap[month]} ${year}`
}

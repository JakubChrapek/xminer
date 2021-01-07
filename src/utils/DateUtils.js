export const parseDay = day => (day[0] === "0" ? day.slice(1) : day)
export const formatDate = date => {
  const [year, month, day] = date.split("-")
  const monthMap = {
    1: "stycznia",
    2: "lutego",
    3: "marca",
    4: "kwietnia",
    5: "maja",
    6: "czerwca",
    7: "lipca",
    8: "sierpnia",
    9: "września",
    10: "paźdzernika",
    11: "listopada",
    12: "grudnia",
  }
  return `${parseDay(day)} ${monthMap[month]} ${year}`
}

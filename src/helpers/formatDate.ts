export function formatDate(dateNoFormat: string) {
  const date = new Date(dateNoFormat)
  const formatDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return formatDate
}

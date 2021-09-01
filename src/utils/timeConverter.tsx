export function timeConverter(time: string): string {
  const t = time.split("T")[0];
  const dateNums = t.split("-");
  const date = new Date(
    parseInt(dateNums[0]),
    parseInt(dateNums[1]) - 1,
    parseInt(dateNums[2])
  );
  const month = date.toLocaleString("default", { month: "long" });
  return `${month} ${dateNums[0]} `;
}

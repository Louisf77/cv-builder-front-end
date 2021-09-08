export function timeConverter(time: string): string {
  const t = time.split("T")[0];
  const dateNums = t.split("-");
  const m = parseInt(dateNums[1]) - 1;
  const d = parseInt(dateNums[2]) + 1;
  const date = new Date(parseInt(dateNums[0]), m, d);
  const month = date.toLocaleString("default", { month: "long" });
  return `${month} ${dateNums[0]} `;
}

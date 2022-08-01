export function convertFunctionName(txt: string) {
  let txtArr = txt.split('-');
  let result: string = '';
  for (const str of txtArr) {
    result = result + str.charAt(0).toUpperCase() + str.slice(1);
  }
  return result;
}

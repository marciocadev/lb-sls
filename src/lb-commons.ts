export function convertFunctionName(txt: string) {
  let txtArr = txt.split('-');
  let result: string = '';
  for (const str of txtArr) {
    result = result + str.charAt(0).toUpperCase() + str.slice(1);
  }
  return result;
}

export function transformObjToSchema(obj: {[key:string]: any}, schema: {[key:string]: any}) {
  obj.type = 'object';
  obj.properties = {};
  Object.keys(obj).forEach(function(key) {
    if (Number.isInteger(obj[key])) {schema.properties[key] = { type: 'integer' };} else if (typeof obj[key] === 'number') {schema.properties[key] = { type: 'number' };} else if (typeof obj[key] === 'string') {schema.properties[key] = { type: 'string' };} else if (typeof obj[key] === 'boolean') {schema.properties[key] = { type: 'boolean' };} else if (typeof obj[key] === 'object') {
      schema.properties[key] = {};
      transformObjToSchema(obj[key], schema.properties.key);
    }
  });
}
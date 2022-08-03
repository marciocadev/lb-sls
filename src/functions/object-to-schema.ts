export function objectToSchema(obj: {[key:string]: any}, schema: {[key:string]: any}) {
  schema.type = 'object';
  schema.properties = {};
  Object.keys(obj).forEach(function(key) {
    if (Number.isInteger(obj[key])) {
      schema.properties[key] = { type: 'integer' };
    } else if (typeof obj[key] === 'number') {
      schema.properties[key] = { type: 'number' };
    } else if (typeof obj[key] === 'string') {
      schema.properties[key] = { type: 'string' };
    } else if (typeof obj[key] === 'boolean') {
      schema.properties[key] = { type: 'boolean' };
    } else if (typeof obj[key] === 'object') {
      schema.properties = {};
      objectToSchema(obj[key], schema.properties);
    }
  });
}
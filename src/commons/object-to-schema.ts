export function objectToArray(obj: {[key: string]: any}) {
  let schema: {[key:string]: any} = {};
  schema.type = 'array';
  schema.items = {};
  if (Number.isInteger(obj)) {
    schema.items = { type: 'integer' };
  } else if (typeof obj === 'string') {
    schema.items = { type: 'string' };
  } else if (typeof obj === 'number') {
    schema.items = { type: 'number' };
  } else if (typeof obj === 'boolean') {
    schema.items = { type: 'boolean' };
  } else if (typeof obj === 'object' && typeof obj.length === 'number' ) {
    schema.items = objectToArray(obj[0]);
  } else if (typeof obj === 'object') {
    schema.items = objectToSchema(obj);
  }
  return schema;
}

export function objectToSchema(obj: {[key:string]: any}) {
  let schema: {[key:string]: any} = {};
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
    } else if (typeof obj[key] === 'object' && typeof obj[key].length === 'number' ) {
      schema.properties[key] = objectToArray(obj[key][0]);
    } else if (typeof obj[key] === 'object') {
      schema.properties[key] = objectToSchema(obj[key]);
    }
  });
  return schema;
}
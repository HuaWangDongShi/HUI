import {prefixCls, fieldType} from './assist';

const alignMap = {
  top: `${prefixCls}-items-start`,
  middle: `${prefixCls}-items-center`,
  bottom: `${prefixCls}-items-end`
};

const justifyMap = {
  start: `${prefixCls}-content-start`,
  center: `${prefixCls}-content-center`,
  end: `${prefixCls}-content-end`,
  'space-around': `${prefixCls}-content-around`,
  'space-between': `${prefixCls}-content-between`,
};

export function colOfSizeArgs(that, propsName) {
  return colOfSizeCls(...propsName, that)
}

function colOfSizeCls() {
  let c = 0,
    name = null,
    v = null,
    t = null,
    arr = [];
  while (typeof (t = colSizeType(v = (arguments[arguments.length - 1][(name = arguments[c])]), name)) === "string") {
    if (t !== "null") {
      switch (parseInt(v)) {
        case 2:
          arr.push(`${name}:${prefixCls}-w-1/12`);
          break;
        case 4:
          arr.push(`${name}:${prefixCls}-w-2/12`);
          break;
        case 6:
          arr.push(`${name}:${prefixCls}-w-3/12`);
          break;
        case 8:
          arr.push(`${name}:${prefixCls}-w-4/12`);
          break;
        case 10:
          arr.push(`${name}:${prefixCls}-w-5/12`);
          break;
        case 12:
          arr.push(`${name}:${prefixCls}-w-6/12`);
          break;
      }
    }
    c++;
    if (c === arguments.length - 1) {
      break;
    }
  }
  return arr.join(" ");
}


function colSizeType(col, name) {
  const T = fieldType(col);
  if (T === '[object Null]' && typeof col === 'object') {
    return "null";
  }
  if (T === '[object Number]') {
    return "number"
  }
  if (T === '[object Object]' && typeof col === 'object') {
    return "object";
  }
  console.error(`This is ${name} Col Type Don't not Number or Object`);
  return null;
}

export function screen(alignType, justifyType) {
  return `${prefixCls}-container  sm:${prefixCls}-container md:${prefixCls}-container lg:${prefixCls}-container xl:${prefixCls}-container ${prefixCls}-flex ${align(alignType)} ${justify(justifyType)}`
}

export function align(type) {
  return alignMap[type];
}

export function justify(type) {
  return justifyMap[type];
}

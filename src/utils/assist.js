export const prefixCls = 'h'

export function fieldType(field) {
  const T = {}.toString.call(field);
  return T;
}


export const nameMap = {
  primary: 'blue',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'indigo',
  dark: 'black',
  light: 'white'
};

export const sizeMap = {
  small: {
    t: '1',
    r: '2',
    b: '1',
    l: '2',
  },
  middle: {
    t: '2',
    r: '3',
    b: '2',
    l: '3',
  },
  large: {
    t: '3',
    r: '4',
    b: '3',
    l: '4',
  },
};

export const fontSizeMap = {
  small: `${prefixCls}-text-sm`,
  middle: `${prefixCls}-text-lg`,
  large: `${prefixCls}-text-xl`,
};

export function oneOfCl(value, size, outline) {
  const paddingCls = getPaddingCls(size);
  if (value === 'default') {
    if (outline) {
      return `${prefixCls}-rounded ${prefixCls}-bg-white ${prefixCls}-border  ${prefixCls}-border-${value}  dark:${prefixCls}-bg-white ${prefixCls}-text-black dark:${prefixCls}-text-black ${prefixCls}-border-color focus:${prefixCls}-outline-none ${paddingCls}`;
    }
    return `${prefixCls}-rounded ${prefixCls}-bg-white  dark:${prefixCls}-bg-white ${prefixCls}-text-black dark:${prefixCls}-text-black ${prefixCls}-border-color focus:${prefixCls}-outline-none ${paddingCls}`;
  }
  if (outline) {
    return `${prefixCls}-rounded ${prefixCls}-bg-${value}-${500} ${prefixCls}-border  ${prefixCls}-border-${value}  dark:${prefixCls}-bg-${value}-${500} hover:${prefixCls}-bg-${value}-${600} dark:hover:${prefixCls}-bg-${value}-${600} focus:${prefixCls}-bg-${value}-${600} dark:focus:${prefixCls}-bg-${value}-${600} ${prefixCls}-text-${value} dark:${prefixCls}-text-${value} ${prefixCls}-transition ${prefixCls}-duration-${100} ${prefixCls}-ease-in  focus:${prefixCls}-outline-none  ${paddingCls}`;
  }
  return `${prefixCls}-rounded ${prefixCls}-bg-${value}-${500}  dark:${prefixCls}-bg-${value}-${500} hover:${prefixCls}-bg-${value}-${600} dark:hover:${prefixCls}-bg-${value}-${600} focus:${prefixCls}-bg-${value}-${600} dark:focus:${prefixCls}-bg-${value}-${600} ${prefixCls}-text-white dark:${prefixCls}-text-white ${prefixCls}-transition ${prefixCls}-duration-${100} ${prefixCls}-ease-in  focus:${prefixCls}-outline-none  ${paddingCls}`;
}

export function getPaddingCls(size) {
  const map = sizeMap[size];
  return `${prefixCls}-pt-${map.t} ${prefixCls}-pl-${map.l} ${prefixCls}-pr-${map.r} ${prefixCls}-pb-${map.b}`
}


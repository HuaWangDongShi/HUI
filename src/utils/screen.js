import {prefixCls} from './assist';

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

export function screen(alignType, justifyType) {
    return `${prefixCls}-flex ${align(alignType)} ${justify(justifyType)}`
}

export function align(type) {
  return alignMap[type];
}

export function justify(type) {
  return justifyMap[type];
}

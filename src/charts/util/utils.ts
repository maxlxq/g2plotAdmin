/* eslint-disable no-restricted-syntax */
// 类型检测
export const isType = (value: any, type: string): boolean => {
    const { toString } = {};
    return toString.call(value) === `[object ${type}]`;
};

interface map { [key: string]: any }

export const clone = (source: map | undefined) => {
    if (!source) {
        return source;
    }
    const target = {} as map;
    // eslint-disable-next-line guard-for-in
    for (const k in source) {
        target[k] = source[k];
    }
    return target;
};

/**
 * 深克隆
 * @param source 要深克隆的目标对象
 */
export const deepClone = (source: map | undefined) => {
    if (!source) {
        return source;
    }

    // @ts-ignore
    const target = new source.constructor();
    const getType = (n: Object) => {
        return Object.prototype.toString.call(n).slice(8, -1);
    };

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] =
                getType(source[key]) === 'Object' || getType(source[key]) === 'Array'
                    ? deepClone(source[key])
                    : source[key];
        }
    }

    return target;
};

/**
 * 存在时返回路径值，不存在时返回 undefined
 */
export const hasPath = (source: any, path: string[]) => {
    let current = source;
    for (let i = 0; i < path.length; i += 1) {
        if (current?.[path[i]]) {
            current = current[path[i]];
        } else {
            current = undefined;
            break;
        }
    }
    return current;
};

/**
 * 内部指定 params ，不考虑复杂情况
 */
export const setPath = (source: map | undefined, path: string[], value: any) => {
    if (!source) {
        return source;
    }
    let o = source;
    path.forEach((key: string, idx: number) => {
        // 不是最后一个
        if (idx < path.length - 1) {
            o = o[key];
        } else {
            o[key] = value;
        }
    });
    return source;
};

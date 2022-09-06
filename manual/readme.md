# 使用手册

## API

### 判断

#### `isBoolean(target)`

判断是否为布尔类型。

#### `isNumber(target)`

判断是否为数字类型，如果是 `NaN` 的话则返回 `false`。

#### `isString(target)`

判断是否为字符串类型。

#### `isAsyncFunction(target)`

判断是否为异步函数类型。

#### `isFunction(target)`

判断是否为函数类型，包括普通函数和异步函数。

#### `isArray(target)`

判断是否为数组类型。

#### `isDate(target)`

判断是否为日期类型。

#### `isRegExp(target)`

判断是否为正则表达式类型。

#### `isObject(target)`

判断是否为对象类型。

#### `isLooseObject(target)`

宽松地判断是否为对象类型，`target` 是数组等时也返回 `true`。

#### `isNumeric(target)`

判断是否为数字或类数字类型。

#### `isGlobal(target)`

判断是否为宿主环境全局对象，在浏览器环境中就是 `window` 对象。

#### `isArrayLike(target)`

判断是否为类数组对象。

#### `isPlainObject(target)`

判断是否为纯对象。

#### `isUrl(target)`

判断是否为一个 URL 字符串。

#### `isEmail(target)`

判断是否为电子邮箱。

#### `isCellphone(target)`

判断是否为手机号。

## 计算

#### `plus(num1, num2, ...others)`

精确加法。

#### `minus(num1, num2, ...others)`

精确减法。

#### `multiply(num1, num2, ...others)`

精确乘法。

#### `divided(num1, num2, ...others)`

精确除法。

### 集合

#### `each(target, callback)`

遍历指定对象，与 [`jQuery.each()`](http://api.jquery.com/jQuery.each/) 效果类似。

#### `mixin(...args)`

扩展指定对象，与 [`jQuery.extend()`](http://api.jquery.com/jQuery.extend/) 效果一样。

#### `arrayify(target)`

将目标转化为数组。

#### `includes(target, collection)`

判断目标是否在集合中。

#### `map(target, callback)`

对集合中的每个元素进行处理并返回一个新的集合。

#### `filter(arr, callback)`

对集合中的每个元素进行过滤并返回一个新的集合。

#### `last(target)`

获取集合中的最后一个元素。

#### `keys(target)`

获取指定对象的所有键。

#### `clone(target)`

克隆目标。

### 对象

#### `pick(obj, paths)`

从指定对象中摘取指定键值并返回新对象。

#### `omit(obj, paths)`

从指定对象中忽略指定键值并返回新对象。

### 存储

#### `saveData(storage, ref, val, merge?)`

存储数据。

#### `retrieveData(storage, ref)`

获取数据。

#### `set(ref, val)`

设置应用业务数据。

#### `get(ref)`

获取应用业务数据。

### URL

#### `href(url)`

返回 URL 的 `href` 部分。

#### `protocol(url)`

返回 URL 的 `protocol` 部分。

#### `host(url)`

返回 URL 的 `host` 部分。

#### `hostname(url)`

返回 URL 的 `hostname` 部分。

#### `port(url)`

返回 URL 的 `port` 部分。

#### `pathname(url)`

返回 URL 的 `pathname` 部分。

#### `hash(url)`

返回 URL 的 `hash` 部分。

#### `username(url)`

返回 URL 的 `username` 部分。

#### `password(url)`

返回 URL 的 `password` 部分。

#### `origin(url)`

返回 URL 的 `origin` 部分。

#### `search(url)`

返回 URL 的 `search` 部分。

#### `query(url, key?)`

将查询字符串变成对象并返回指定键的值，若未指定则返回对象。

### 其他

#### `hasOwnProp(prop, obj)`

判断某个对象上是否有指定属性。

#### `capitalize(str)`

使字符串首字母大写。

#### `generateRandomId(prefix?)`

生成随机 ID。

#### `noop()`

空函数，一般用作某操作默认值。

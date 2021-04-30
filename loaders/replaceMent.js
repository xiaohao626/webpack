// 自定义loader
module.exports = function (source) {
  return source.replace(/(hello world)/, '{{ $1 }}');
}


var exports = module.exports = Tag;


function Tag(name) {
  if (!(this instanceof Tag)) {
    return new Tag(name);
  }

  this.name = name;
  this.content = [];
  this.attributes = {};
};


Tag.prototype.append = function (content) {
  return this.content.push(content), this;
};

Tag.prototype.appendTo = function (tag) {
  tag.append(this);
  return this;
};


Tag.prototype.attr = function (name, value) {
  this.attributes[name] = value;
  return this;
};

Tag.prototype.toString = function () {
  return '<'
    + this.name
    + serializeAttributes(this.attributes)
    + '>'
    + serializeContent(this.content)
    + '</' + this.name + '>';
};


function serializeAttributes(attrs) {
  return Object.keys(attrs).reduce(function (r, key) {
    return r + ' ' + key + '="' + attrs[key] + '"';
  }, '');
}

function serializeContent(content) {
  return Array.prototype.reduce.call(content, function (r, value) {
    return r + value;
  }, '');
}




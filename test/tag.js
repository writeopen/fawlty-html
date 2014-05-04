
var assert = require('assert');
var tag = require('../lib/tag');

describe('Tag', function () {
  it('can render tags', function () {
    assert.equal((new tag('p')).append('hello, world'), '<p>hello, world</p>');
  });

  it('can render attributes', function () {
    assert.equal((new tag('div').attr('class', 'foobar').append('derp')), '<div class="foobar">derp</div>');
  });

  it('can nest tags within tags', function () {
    var container = new tag('div').attr('class', 'container');

    var s1 = new tag('span').attr('class', 's1');
    var s2 = new tag('span').attr('class', 's2');

    s2.append(s1).appendTo(container);

    assert.equal(container, '<div class="container"><span class="s2"><span class="s1"></span></span></div>');
  });

  it('can be used like a function', function () {
    var div = tag('div').attr('id', 'div_1234');

    assert.equal(div, '<div id="div_1234"></div>');
  });
});


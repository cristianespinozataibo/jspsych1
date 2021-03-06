'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function _jestWatcher() {
  const data = require('jest-watcher');

  _jestWatcher = function () {
    return data;
  };

  return data;
}

function _TestNamePatternPrompt() {
  const data = _interopRequireDefault(require('../TestNamePatternPrompt'));

  _TestNamePatternPrompt = function () {
    return data;
  };

  return data;
}

function _active_filters_message() {
  const data = _interopRequireDefault(require('../lib/active_filters_message'));

  _active_filters_message = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class TestNamePatternPlugin extends _jestWatcher().BaseWatchPlugin {
  constructor(options) {
    super(options);

    _defineProperty(this, '_prompt', void 0);

    _defineProperty(this, 'isInternal', void 0);

    this._prompt = new (_jestWatcher().Prompt)();
    this.isInternal = true;
  }

  getUsageInfo() {
    return {
      key: 't',
      prompt: 'filter by a test name regex pattern'
    };
  }

  onKey(key) {
    this._prompt.put(key);
  }

  run(globalConfig, updateConfigAndRun) {
    return new Promise((res, rej) => {
      const testNamePatternPrompt = new (_TestNamePatternPrompt().default)(
        this._stdout,
        this._prompt
      );
      testNamePatternPrompt.run(
        value => {
          updateConfigAndRun({
            mode: 'watch',
            testNamePattern: value
          });
          res();
        },
        rej,
        {
          header: (0, _active_filters_message().default)(globalConfig)
        }
      );
    });
  }
}

var _default = TestNamePatternPlugin;
exports.default = _default;

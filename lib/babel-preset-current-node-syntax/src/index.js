const tests = {
  // ECMAScript 2018
  "object-rest-spread": ["({ ...{} })", "({ ...x } = {})"], // Babel 7.2.0
  "async-generators": ["async function* f() {}"], //  Babel 7.2.0

  // ECMAScript 2019
  "optional-catch-binding": ["try {} catch {}"], // Babel 7.2.0
  "json-strings": ["'\\u2028'"], // Babel 7.2.0

  // ECMAScript 2020
  "bigint": ["1n"], // Babel 7.8.0
  "optional-chaining": ["a?.b"], // Babel 7.9.0
  "nullish-coalescing-operator": ["a ?? b"], // Babel 7.9.0
  // import.meta is handled manually

  // Stage 3
  "numeric-separator": ["1_2"],
  "class-properties": [
    "(class { x = 1 })",
    "(class { #x = 1 })",
    "(class { #x() {} })",
  ],
  "logical-assignment-operators": ["a ||= b", "a &&= b", "a ??= c"],
};

const plugins = [];
const works = (test) => {
  try {
    // Wrap the test in a function to only test the syntax, without executing it
    (0, eval)(`(() => { ${test} })`);
    return true;
  } catch (_error) {
    return false;
  }
};

for (const [name, cases] of Object.entries(tests)) {
  if (cases.some(works)) {
    plugins.push(require.resolve(`@babel/plugin-syntax-${name}`));
  }
}

// import.meta is only allowed in modules, and modules can only be evaluated
// synchronously. For this reason, we cannot detect import.meta support at
// runtime. It is supported starting from 10.4, so we can check the version.
const major = parseInt(process.versions.node, 10);
const minor = parseInt(process.versions.node.match(/^\d+\.(\d+)/)[1], 10);
if (major > 10 || (major === 10 && minor > 4)) {
  plugins.push(require.resolve("@babel/plugin-syntax-import-meta"));
}

module.exports = () => ({ plugins });

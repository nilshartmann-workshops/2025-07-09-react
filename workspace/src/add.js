function add(a, b) {
  // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
  // falsy    false, null, undefined, "", 0, -0
  // truethy  true, " ", {}, []

  // Lustig zum anschauen: WTF JS: https://github.com/denysdovhan/wtfjs

  if (!a || !b) {
    throw new Error("Invalid argument");
  }

  return a + b;
}

add(1, 0);

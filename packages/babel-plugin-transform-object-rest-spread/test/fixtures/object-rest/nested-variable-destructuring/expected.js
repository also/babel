const { a: { b: { c: { d: { x, y } } } } } = o,
      rest = babelHelpers.objectWithoutProperties(o.a.b.c.d, ["x", "y"]);

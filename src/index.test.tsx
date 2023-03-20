function sum(a: number, b: number) {
  return a + b;
}

describe("hello test", () => {
  test("test", () => {
    const z = sum(5, 5);
    expect(z).toEqual(10)
  })
})


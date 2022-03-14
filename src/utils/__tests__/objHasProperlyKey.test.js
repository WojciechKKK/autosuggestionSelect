import objHasProperlyKey from '../objHasProperlyKey';

describe("test objHasProperlyKey", () => {
    test("should render true", () => {
        const defaultArray = [
          { name: 'name1'},
          { name: 'name2'},
        ]
        expect(objHasProperlyKey(defaultArray)).toBe(true)
    });

    test("should render false", () => {
      const defaultArray = [
        { name: 'name1'},
        { surname: 'surname1'},
      ]
      expect(objHasProperlyKey(defaultArray)).toBe(false)
  })
})
import getuserList from '../getuserList';

describe("test getuserList", () => {
    const universityName = "name2";
    test("should render empty array == wrong param", () => {
        const defaultuserList = [];
        expect(getuserList(defaultuserList, universityName)).toEqual(defaultuserList)
    });

    test("should render filtered array", () => {
      const defaultuserList = [
        {name: 'name1', isChecked: true},
        {name: 'name2', isChecked: false}
      ];
      expect(getuserList(defaultuserList, universityName)).toEqual([defaultuserList[0]])
  });
})
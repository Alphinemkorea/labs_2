const { combineUsers } = require('./index');

describe('combineUsers', () => {
  test('returns an object', () => {
    const result = combineUsers([]);
    expect(typeof result).toBe('object');
  });

  test('returns object with users and merge_date properties', () => {
    const result = combineUsers([]);
    expect(result).toHaveProperty('users');
    expect(result).toHaveProperty('merge_date');
  });

  test('merges all given arrays', () => {
    const arr1 = ['user1', 'user2'];
    const arr2 = ['user3'];
    const result = combineUsers(arr1, arr2);
    expect(result.users).toEqual(['user1', 'user2', 'user3']);
  });

  test('contains todays date in M/D/YYYY format', () => {
    const today = new Date();
    const expectedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    const result = combineUsers([]);
    expect(result.merge_date).toBe(expectedDate);
  });
});
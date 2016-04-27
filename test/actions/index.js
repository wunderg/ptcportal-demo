import { expect } from '../test_helper.js';
import * as ACTIONS from '../../src/actions/constants.js';
import { addStudent } from '../../src/actions/index.js';


describe('actions', () => {
  describe('add student', () => {
    let data = {
      _id: 5,
      lesson: 0,
      level: 0,
      interview: 'not set',
      decision: 'pending',
      name: 'John',
      email: 'Josh@JOSH.com'
    };

    it('has to be correct type', () => {
      const action = addStudent(data);
      expect(action.type).to.equal(ACTIONS.ADD_STUDENT);
    });
  });
});

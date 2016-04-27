import { expect } from '../test_helper.js';
import * as ACTIONS from '../../src/actions/constants.js';
import { addStudent } from '../../src/actions/index.js';


describe('actions', () => {
  describe('add student', () => {
    it('has to be correct type', () => {
      const action = addStudent();
      expect(action.type).to.equal(ACTIONS.ADD_STUDENT);
    });
  });
});

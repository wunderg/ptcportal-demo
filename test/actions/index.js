import { expect } from '../test_helper.js';
import * as ACTIONS from '../../src/actions/constants.js';
import { addStudent } from '../../src/actions/index.js';

describe('actions', () => {
  describe('add student', () => {
    let action;
    beforeEach(() => {
      let data = {
        _id: 5,
        lesson: 0,
        level: 0,
        interview: 'not set',
        decision: 'pending',
        name: 'John',
        email: 'John@student.com'
      };
      action = addStudent(data);
    })

    it('has to be correct type', () => {
      expect(action.type).to.equal(ACTIONS.ADD_STUDENT);
    });
    it('has to have payload as an object', () => {
      expect(action.payload).to.be.an('object');
    });
    it('has to have name property as string', () => {
      expect(action.payload.name).to.be.a('function');
    });
  });
});

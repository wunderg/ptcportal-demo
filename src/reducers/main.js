import {} from '../actions/constants';

const INITIAL_STATE = {
  students: [
    {
      name: 'Oleg',
      email: 'oleg@oleg.com',
      lesson: 3,
      level: 4,
      interview: 'March 5',
      dicision: 'pending',
      notes: [
        { lesson1: 'Here the lesson 1 notes', code: 'var x = 5' },
        { lesson2: 'here is the lesson 2 notes', code: 'var x = 10' }
      ]
    },
    {
      name: 'Joh',
      email: 'Joh@Joh.com',
      lesson: 2,
      level: 6,
      interview: 'March 5',
      dicision: 'pending',
      notes: [
        { lesson1: 'Here the lesson 1 notes', code: 'var x = 5' },
        { lesson2: 'here is the lesson 2 notes', code: 'var x = 10' }
      ]
    }
  ],
  instructor: 'George',
  currentStudent: {
    name: 'Oleg',
    email: 'oleg@oleg.com',
    lesson: 3,
    level: 4,
    interview: 'March 5',
    dicision: 'pending',
    notes: [
      { lesson1: 'Here is the lesson 1 notes', code: 'var x = 5;' },
      { lesson2: 'here is the lesson 2 notes', code: 'var x = 10;' }
    ]
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

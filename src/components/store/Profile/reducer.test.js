import '@testing-library/jest-dom'
import '@testing-library/react'
import reducer from "./reducer";

describe('Initial State', () => {
    it('IS', () => {(reducer(undefined, {})).toEqual([
      {
        name: 'Marina',
        age: 27,
        isOnline: true,
        isAuthed: false,
      }
    ])})
  })
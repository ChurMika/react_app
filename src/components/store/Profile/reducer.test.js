import '@testing-library/jest-dom'
import '@testing-library/react'
import reducer from "./reducer"
import { CHANGE_IS_ONLINE, CHANGE_NAME } from './actions'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      name: 'Marina',
      age: 27,
      isOnline: true,
      isAuthed: false
    }
  )
})

test('should change name', () => {
  const previousState = {
    name: 'Marina',
    age: 27,
    isOnline: true,
    isAuthed: false
  }
  expect(reducer(previousState, (CHANGE_NAME: {name: 'Ira'}))).toEqual(
    {
      name: 'Marina',
      age: 27,
      isOnline: true,
      isAuthed: false
    },
    {
      name: 'Ira',
      age: 27,
      isOnline: true,
      isAuthed: false
    }
  )
})

test('should change online state', () => {
  const previousState = {
    name: 'Marina',
    age: 27,
    isOnline: true,
    isAuthed: false
  }
  expect(reducer(previousState, (CHANGE_IS_ONLINE: {isOnline: false}))).toEqual(
    {
      name: 'Marina',
      age: 27,
      isOnline: true,
      isAuthed: false
    },
    {
      name: 'Marina',
      age: 27,
      isOnline: false,
      isAuthed: false
    }
  )
})
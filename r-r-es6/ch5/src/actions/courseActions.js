import * as types from './actionTypes'

//action creator
export function createCourse(course) {
    return { type: types.CREATE_COURSE, course}
}

import {LOAD_COMMENT , LOAD_COMMENT_SUCCESS,LOAD_COMMENT_ERROR} from './type'

const loadApiComments = ()=>{
    return {
        type: LOAD_COMMENT
    }
}

const loadCommentsSuccess = ()=>{
    return {
        type: LOAD_COMMENT_SUCCESS
    }
}
const loadCommentsError = ()=>{
    return {
        type: LOAD_COMMENT_ERROR
    }
}
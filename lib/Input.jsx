import {Input as ElInput} from 'element-ui'

export default {
    name:'Input',
    data(){
        return {
            value:''
        }
    },
    render(h){
        console.log('h', h)
        return (
            <ElInput/>
        )
    }
}
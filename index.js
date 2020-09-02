import {Select} from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Select item',
    selectedId: '4',
    data: [
        {id: '1', value: 'Angular'},
        {id: '2', value: 'React'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Node JS'}
    ],
    onSelect(item) {
        console.log('Select Item', item)
    }
})

window.s = select

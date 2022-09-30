import { UIProvider } from '../ui-context';
import { Child } from './child'
const ContextDemo = () => {
    const UIEvents = {
        funLog: () => {
            console.log('测试')
        }
    }
    return (
        <UIProvider UIEvents={UIEvents}>
            <Child />
        </UIProvider>
    )
}

export default ContextDemo
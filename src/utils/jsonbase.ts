import { JSONParse } from '@/utils'
import * as defender_screen from '../jsonbase/defender_screen.json?raw'
import * as attacker_screen from '../jsonbase/attacker_screen.json?raw'


export const readsCompileJSON = () => {
    const files:any = []

    const object_defender_screen = JSONParse(defender_screen.default)
    object_defender_screen.id = 'defender_screen'
    files.push(object_defender_screen)

    const object_attacker_screen = JSONParse(attacker_screen.default)
    object_attacker_screen.id = 'attacker_screen'
    files.push(object_attacker_screen)

    return files
}
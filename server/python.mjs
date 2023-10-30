

import {python} from 'pythonia'
const bridge = await python('./python_bridge.py')


let b = {'objective_function_coefficients':'[1,2]','constraint_equations':'[6,2,3,4]','basic_coefficient':'[1,2]','columns':2,'rows':2,'constant_matrix':'[4,2]'}
export default async function simplex (b){
    
    const c =  await bridge.solve_simplex(b)

    python.exit()
}




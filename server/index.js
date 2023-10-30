import express  from 'express';
import {python} from 'pythonia'
const bridge = await python('./python_bridge.py')


let be = {'objective_function_coefficients':'[1,2]','constraint_equations':'[6,2,3,4]','basic_coefficient':'[1,2]','columns':2,'rows':2,'constant_matrix':'[4,2]'}

import cors from  'cors'
const app = express()
const PORT = 8080;


app.use(cors());
app.use(express.json());         
app.use(express.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'POST, GET,DELETE,PATCH')
    next()
  })
app.use('/',async (req,res)=> {
  let solution = await bridge.solve_simplex(req.body)
  await python.exit()
  res.send(solution)
})


app.listen(PORT, ()=>{
  console.log(`lpSolver listening on port ${PORT}`)
})


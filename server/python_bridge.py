
import json
import matlab.engine

def solve_simplex(unsolved_tableau):
    try:
        eng = matlab.engine.start_matlab()
        return eng.simplex(unsolved_tableau)
    except Exception as e:
        print (f"Error starting MATLAB Engine: {e}")
    
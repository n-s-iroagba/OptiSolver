from flask import Flask,request
import matlab.engine

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/solve',methods = ['POST'])
def solve_simplex():
    unsolved_tableau = request.get_json()
    try:
        eng = matlab.engine.start_matlab()
        return eng.simplex(unsolved_tableau)
    except Exception as e:
        print (f"Error starting MATLAB Engine: {e}")


    
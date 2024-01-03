from flask import Flask,request,session,jsonify
from flask_cors import CORS, cross_origin
import matlab.engine
import json
from datetime import datetime,timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity,set_access_cookies,get_jwt

# Application configuration
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:97chocho@localhost/optisolver'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this to a secure random key
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=100)  # Set the expiration time for access token

jwt = JWTManager(app)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)

# Models
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email= db.Column(db.String(80), unique=True, nullable=False)
    password= db.Column(db.String(80), unique=True, nullable=False)
    solutions=db.relationship('Solution', cascade="all",backref = 'student' )
class Solution(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    iteration= db.Column(db.Integer)
    problem = db.Column(db.JSON)
    solution = db.Column(db.JSON)
    student_id = db.Column(db.Integer,db.ForeignKey('student.id'))


#route handlers
@app.route("/")
def hello_world():
    with app.app_context():
        db.drop_all()
        db.create_all()
        return 'All tables dropped successfully.'


@app.route('/solve/<int:student_id>',methods = ['POST'])
@jwt_required()
def solve_simplex(student_id):
    unsolved_tableau = json.dumps(request.get_json())
    solution = {}
    try:
        eng = matlab.engine.start_matlab()
        solution =  eng.simplex(unsolved_tableau)
        eng.quit()
        response = Solution(problem=unsolved_tableau,solution= solution,iteration=0,student_id=student_id)
        db.session.add(response)
        db.session.commit()
    except Exception as e:
        print (f"Error starting MATLAB Engine: {e}")
        db.session.rollback()
    finally:
        db.session.close()
        response_data = {
            'problem': unsolved_tableau,
            'solution': json.loads(solution),
            'iteration': 0,
            'student_id': student_id
        }

    return jsonify(response_data)

@app.route('/student',methods = ['POST'])
def register():
    print(request.json.get('username'))
    username = json.dumps(request.json.get('username'))
    password = json.dumps(request.json.get('password'))
    email = json.dumps(request.json.get('email'))
    response=''
    try:
        student = Student.query.filter_by(email=email).first()
        if student is not None:
            return jsonify({"msg": "student with this email already exists"}), 400
        password = password.encode('utf-8')
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_student = Student(email=email,username=username,password= hashed_password)
        db.session.add(new_student)
        db.session.commit()
        access_token = create_access_token(identity=username)
        response = json.dumps({"token":access_token,"id":new_student.id})
    except Exception as e:
        print (f"Error registering student: {e}")
        db.session.rollback()
    finally:
        db.session.close()
    return response, 200

       

@app.route("/login",methods = ['POST'])
def login():
    email = json.dumps(request.json.get('username'))
    password = json.dumps(request.json.get('password'))
    try:
        student = Student.query.filter_by(email=email).first()
    except:
        return jsonify({"msg": "Error logging in"}), 400
    if student is None:
        return jsonify({"msg": "no user with this email found"}), 400
    entered_password = password.encode('utf-8')
    if bcrypt.checkpw(entered_password, student.password):
        access_token = create_access_token(identity=student.username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Invalid credentials"}), 401


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response


@app.route('/history/<int:student_id>')
def retrieve_history(student_id):
    try:
        solutions = Solution.query.filter(Solution.student_id == student_id).all()
    except Exception as e:
        return jsonify(f"Error getting history: {e}")
    return jsonify(solutions)


@app.route('/names')
def names():
    names_list = []
    try:
        students = Student.query.all()
    except:
        return jsonify('error with username server')
    for user in students:
        names_list.append(user.username)
    return json.dumps(names_list)
@app.route('/continue/<int:student_id>')
def retrieve_continuation(student_id):
    try:
        # Use double underscores for comparison operators
        solutions = Solution.query.filter(Solution.student_id == student_id, Solution.iteration > -1).all()
    except Exception as e:
        return jsonify(f"Error getting uncompleted solutions: {e}")
    return jsonify(solutions)


if __name__ == '__main__':
    # Set debug mode to True
    app.run(debug=True)
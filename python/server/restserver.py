from flask import Flask,jsonify,request
app = Flask(__name__)

task =['slepp','code','read']

@app.route('/',methods=['GET'])
def main_context():
   return jsonify({'m':'it works!'});

@app.route('/tasks',methods=['GET'])
def get_all_tasks():
   return jsonify(task);   


if __name__== '__main__':
    app.run(debug=True,port=8080)
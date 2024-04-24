from flask import Flask, request, render_template, redirect,jsonify


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('penjumlahan.html')

@app.route('/pengurangan')
def pengurangan():
    return render_template('pengurangan.html')

@app.route('/perkalian')
def perkalian():
    return render_template('perkalian.html')

@app.route('/pembagian')
def pembagian():
    return render_template('pembagian.html')

@app.route('/penjumlahan', methods=['POST'])
def hasil_penjumlahan():
    number1 = int(request.form['number1'])
    number2 = int(request.form['number2'])
    hasil = number1 + number2
    return jsonify({'hasil': hasil})

@app.route('/pengurangan', methods=['POST'])
def hasil_pengurangan():
    number1 = int(request.form['number1'])
    number2 = int(request.form['number2'])
    hasil = number1 - number2
    return jsonify({'hasil': hasil})

@app.route('/perkalian', methods=['POST'])
def hasil_perkalian():
    number1 = int(request.form['number1'])
    number2 = int(request.form['number2'])
    hasil = number1 * number2
    return jsonify({'hasil': hasil})

@app.route('/pembagian', methods=['POST'])
def hasil_pembagian():
    number1 = int(request.form['number1'])
    number2 = int(request.form['number2'])
    hasil = number1 / number2
    return jsonify({'hasil': hasil})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
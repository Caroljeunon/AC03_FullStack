from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

aulas = []
aulas.append({"nome": "Nome da Aula 1"})
aulas.append({"nome": "Nome da Aula 2"})

@app.route('/v1/aula/cadastrar', methods=["POST"])
def cadastrar():
    input_json = request.get_json(force=True)
    json = {'nome': input_json['nome']}
    aulas.append(json)
    return jsonify(aulas), 200

@app.route('/v1/aula/atualizar', methods=["PUT"])
def atualizar():
    input_json = request.get_json(force=True)
    jsonToReturn = {'nome': input_json['nome']}
    return jsonify(jsonToReturn), 200

@app.route('/v1/aula/listar', methods=["GET"])
def listar():
    return jsonify(aulas), 200

@app.route('/v1/aula/excluir/<int:aula_id>', methods=["DELETE"])
def excluir(aula_id):
    return jsonify(aula_id), 200

if __name__ == "__main__":
    app.run(port = 9000)
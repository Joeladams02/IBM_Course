from flask import Flask, jsonify, request, escape

data = [
    {
        "id": "3b58aade-8415-49dd-88db-8d7bce14932a",
        "first_name": "Tanya",
        "last_name": "Slad",
        "graduation_year": 1996,
        "address": "043 Heath Hill",
        "city": "Dayton",
        "zip": "45426",
        "country": "United States",
        "avatar": "http://dummyimage.com/139x100.png/cc0000/ffffff",
    },
    {
        "id": "d64efd92-ca8e-40da-b234-47e6403eb167",
        "first_name": "Ferdy",
        "last_name": "Garrow",
        "graduation_year": 1970,
        "address": "10 Wayridge Terrace",
        "city": "North Little Rock",
        "zip": "72199",
        "country": "United States",
        "avatar": "http://dummyimage.com/148x100.png/dddddd/000000",
    },
    {
        "id": "66c09925-589a-43b6-9a5d-d1601cf53287",
        "first_name": "Lilla",
        "last_name": "Aupol",
        "graduation_year": 1985,
        "address": "637 Carey Pass",
        "city": "Gainesville",
        "zip": "32627",
        "country": "United States",
        "avatar": "http://dummyimage.com/174x100.png/ff4444/ffffff",
    },
    {
        "id": "0dd63e57-0b5f-44bc-94ae-5c1b4947cb49",
        "first_name": "Abdel",
        "last_name": "Duke",
        "graduation_year": 1995,
        "address": "2 Lake View Point",
        "city": "Shreveport",
        "zip": "71105",
        "country": "United States",
        "avatar": "http://dummyimage.com/145x100.png/dddddd/000000",
    },
    {
        "id": "a3d8adba-4c20-495f-b4c4-f7de8b9cfb15",
        "first_name": "Corby",
        "last_name": "Tettley",
        "graduation_year": 1984,
        "address": "90329 Amoth Drive",
        "city": "Boulder",
        "zip": "80305",
        "country": "United States",
        "avatar": "http://dummyimage.com/198x100.png/cc0000/ffffff",
    }
]

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({'<h3>Welcome to this app<h3>'})

@app.route('/no_content')
def no_content():
    return ({'message':'No content found'}, 204)

@app.route('/name_search')
def name():
    first_names = [x['first_name'] for x in data]
    q = request.args.get('q')
    if q == None: return {'message': 'Invalid Input Parameter'}, 422
 
    if q in first_names: 
        return data[first_names.index(q)], 200
    else:
        return {'message': 'User Not Found'}, 404

@app.get('/count')
def count():
    return {'message':f'There are {len(data)} users'}

@app.get('/person/<uuid:id>')
def find_by_uuid(id):
    uuid = escape(id)
    id_array = [x['id'] for x in data]
    if uuid in id_array:
        return data[id_array.index(uuid)], 200
    else:
        return {'message':'User Not Found'}, 404

@app.delete('/person/<uuid:id>')
def delete_by_uuid(id):
    uuid = escape(id)
    id_array = [x['id'] for x in data]
    if uuid in id_array:
        del data[id_array.index(uuid)]
        return {'message':'User Deleted'}, 200
    else:
        return {'message':'User Not Found'}, 404

@app.route('/person', methods=['POST'])
def add_by_uuid():
    person = request.get_json()
    if not person:
        return {'message':'No Data Entered'}, 400
    
    elif person.keys() != data[0]:
        return {'message':'Partially complete Data Entered'}, 400

    data.append(person)
    return {'message': 'New User Added'}, 200

@app.error_handler(404)
def api_not_found():
    return {'message':'User Not Found'}
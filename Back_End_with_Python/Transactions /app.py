from flask import Flask, request, url_for, redirect, render_template

app = Flask(__name__)

transactions = [
    {'id': 1, 'date': '2023-06-01', 'amount': 100},
    {'id': 2, 'date': '2023-06-02', 'amount': -200},
    {'id': 3, 'date': '2023-06-03', 'amount': 300}
]

@app.route('/')
def get_transactions():
    return render_template('transactions.html', transactions = transactions)


@app.route('/add', methods = ['GET','POST'])
def add_transaction():
    if request.method == 'GET':
        return render_template('form.html')
    
    if request.method == 'POST':
        transaction = {
            'id': len(transactions)+1,
            'date': request.form['date'],
            'amount': request.form['amount']
        }
        transactions.append(transaction)
        return redirect(url_for("get_transactions")) 
    

@app.route('/edit/<int:transaction_id>', methods = ['GET','POST'])
def edit_transaction(transaction_id):
    transaction = next((x for x in transactions if x['id'] == transaction_id), None)
    if transaction == None:
        return {'message':'User Not Found'}, 404
    
    if request.method == 'GET':
        return render_template('edit.html', transaction = transaction)
    
    if request.method == 'POST':
        index = transactions.index(transaction)
        transactions[index] = {'id': transaction_id, 'date': request.form['date'], 'amount': request.form['amount']}
        return redirect(url_for("get_transactions"))


@app.route('/delete/<int:transaction_id>')
def delete_transaction(transaction_id):
    transaction = next((x for x in transactions if x['id'] == transaction_id), None)
    if transaction == None:
        return {'message':'User Not Found'}, 404
    
    transactions.remove(transaction)
    return redirect(url_for('get_transactions'))


@app.route('/search', methods = ['GET','POST'])
def search_transactions():
    if request.method == 'POST':
        try:
            min = int(request.form['min_amount'])
            max = int(request.form['max_amount'])
        except:
            {'message': 'Entries Incorrect'}
        search = [x for x in transactions if min < x['amount'] < max]
        return render_template('transactions.html', transactions = search)
    if request.method == 'GET':
        return render_template('search.html')

@app.route('/balance')
def total_balance():
    balance = 0
    for x in transactions:
        balance += x['amount']
    return {'message': f'Total Balance: {balance}'}

if __name__ == '__main__':
    app.run(debug=True)
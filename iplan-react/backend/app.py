from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc
import time

app = Flask(__name__)

@app.route('/get-top-10', methods=['GET'])
def get_top_10():
    DB = {'servername': 'AW02PSQLC007', 'database': 'India_GTSG'}
    conn = pyodbc.connect('DRIVER={SQL Server}; SERVER=' + DB['servername'] + ';DATABASE=' + DB['database'] + ';Trusted_Connection=yes')
    
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT TOP 10 * FROM [India_GTSG].[dbo].[RFT_P6]")
        data = cursor.fetchall()

        # Convert data to a list of dictionaries
        rows = [dict(zip([column[0] for column in cursor.description], row)) for row in data]
    finally:
        conn.close()

    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

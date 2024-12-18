import pyodbc
import time
from django.shortcuts import render

def success2():
    DB = {'servername': 'AW02PSQLC007',
          'database': 'India_GTSG'}
    conn = pyodbc.connect('DRIVER={SQL Server}; SERVER=' + DB['servername'] + ';DATABASE=' + DB['database'] + ';Trusted_Connection=yes')
    start_time = time.time()

    # Query the database
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM [India_GTSG].[dbo].[RFT_P6]")
    data = cursor.fetchall()
    conn.close()

    end_time = time.time()
    return {"rows_loaded": len(data), "time_taken": end_time - start_time}

def transfer(request):
    message = None
    if request.method == 'POST':
        # Call success2 and pass the result to the template
        result = success2()
        message = f"Rows Loaded: {result['rows_loaded']}, Time Taken: {result['time_taken']:.2f} seconds"
    return render(request, "index.html", {"message": message})

# Add the main function to handle the root URL '/'
def main(request):
    return render(request, "index.html")

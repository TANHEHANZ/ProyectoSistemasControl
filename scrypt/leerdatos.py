import serial
import requests

# Inicializa la conexión al puerto COM virtual
ser = serial.Serial('COM7', baudrate=9600)  # Ajusta el baudrate según tu configuración

# URL de la base de datos de Firebase en tiempo real
firebase_url = 'https://prueba-com-30fac-default-rtdb.firebaseio.com/'  # Reemplaza 'tu-proyecto' por tu proyecto Firebase

while True:
    try:
        # Lee datos del puerto COM
        data = ser.readline().decode().strip()

        # Crea un diccionario con los datos que deseas enviar a Firebase
        payload = {'valor': data}

        # Realiza una solicitud POST a Firebase para enviar los datos
        response = requests.post(firebase_url, json=payload)

        if response.status_code == 200:
            print(f'Datos enviados a Firebase: {data}')
        else:
            print(f'Error al enviar datos a Firebase: {response.text}')

    except KeyboardInterrupt:
        print("Detenido por el usuario.")
        break
    
    except Exception as e:
        print(f"Error: {e}")

# Cierra la conexión al puerto COM
ser.close()

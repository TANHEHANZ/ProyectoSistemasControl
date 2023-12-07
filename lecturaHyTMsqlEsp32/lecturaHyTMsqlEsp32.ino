#include <WiFi.h>     // Reemplaza ESP8266WiFi.h por WiFi.h
#include <HTTPClient.h>

const char* ssid = "FAMILIA TAPIA";      // SSID
const char* password = "tapia987ON";    // Contraseña
const char* host = "192.168.0.20";      // IP del servidor
const int port = 80;                   // Puerto del servidor
const int watchdog = 5000;            // Frecuencia del watchdog

unsigned long previousMillis = millis();

#include "DHT.h"       // Incluye la biblioteca DHT
#define DHTPIN 2       // El pin GPIO 2 (D2) en ESP32
#define DHTTYPE DHT11  // Tipo de sensor DHT (DHT11)

DHT dht(DHTPIN, DHTTYPE);

const int gasPin = 35;  // Pin analógico donde está conectado el sensor de gas (análogo A0 en ESP32)

void setup(void) {
  Serial.begin(9600);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.print("Dirección IP: ");
  Serial.println(WiFi.localIP());
  dht.begin();
  Serial.println("Humedad y Temperatura\n\n");
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  int gasValue = analogRead(gasPin); // Leer el valor del sensor de gas (0-4095 en ESP32)
  Serial.print("Valor del sensor de gas: ");
  Serial.println(gasValue);

  Serial.print("Humedad = ");
  Serial.print(h);
  Serial.print("%  ");
  Serial.print("Temperatura = ");
  Serial.print(t);
  Serial.println("°C  ");
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis > watchdog) {
    previousMillis = currentMillis;
    HTTPClient http;

    String url = "ConexionAmsql/index.php?temp=";
    url += gasValue;  
    url += "&hum=";
    url += gasValue;  

    http.begin("http://" + String(host) + url);
    int httpCode = http.GET();

    if (httpCode > 0) {
      String payload = http.getString();
      Serial.println(payload);
    } else {
      Serial.println("Error en la solicitud HTTP");
    }

    http.end();
  }
  delay(800);
}
import requests

url = “https://qr-code-and-barcode-scanner.p.rapidapi.com/ScanCode”

payload = "./public/images/987f33e2-6c94-4490-ab67-dfb87e7e6d59.jpg"
headers = {
content-type: “application/x-www-form-urlencoded”,
x-rapidapi-host: “qr-code-and-barcode-scanner.p.rapidapi.com”,
x-rapidapi-key: “API KEY”
}

response = requests.request(POST, url, data=payload, headers=headers)

print(response.text)
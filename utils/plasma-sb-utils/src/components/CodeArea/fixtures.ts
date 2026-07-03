export const codeByLanguage = {
    json: `{
  "input": "Первый искусственный спутник Земли был запущен Советским Союзом 4 октября 1957 года. Этот исторический запуск ознаменовал начало космической эры и стал важным событием в истории человечества. Спутник получил название «Спутник-1».",
  "model": "GigaCheckClassification"
}`,
    bash: `curl --request POST \\
  --url https://gigachat.devices.sberbank.ru/api/v1/ai/check \\
  --header 'Authorization: Bearer <token>' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "input": "Первый искусственный спутник Земли",
    "model": "GigaCheckClassification"
  }'`,
    python: `import requests
import json

url = "https://gigachat.devices.sberbank.ru/api/v1/ai/check"
payload = json.dumps({
  "input": "Первый искусственный спутник Земли был запущен Советским Союзом 4 октября 1957 года. Этот исторический запуск ознаменовал начало космической эры и стал важным событием в истории человечества. Спутник получил название «Спутник-1».",
  "model": "GigaCheckClassification"
})
headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": "Bearer <token>"
}

response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)`,
    go: `package main

import (
  "encoding/json"
  "fmt"
)

type Payload struct {
  Input string \`json:"input"\`
  Model string \`json:"model"\`
}

func main() {
  body, _ := json.Marshal(Payload{
    Input: "Первый искусственный спутник Земли",
    Model: "GigaCheckClassification",
  })

  fmt.Println(string(body))
}`,
    javascript: `const axios = require('axios');

let data = JSON.stringify({
  "input": "Первый искусственный спутник Земли был запущен Советским Союзом 4 октября 1957 года.",
  "model": "GigaCheckClassification"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://gigachat.devices.sberbank.ru/api/v1/ai/check',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
  },
  data
};

axios.request(config).then((response) => console.log(response.data));`,
    ruby: `require 'net/http'
require 'json'

uri = URI('https://gigachat.devices.sberbank.ru/api/v1/ai/check')
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request['Authorization'] = 'Bearer <token>'
request.body = {
  input: 'Первый искусственный спутник Земли',
  model: 'GigaCheckClassification'
}.to_json

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`,
    java: `OkHttpClient client = new OkHttpClient().newBuilder().build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\\"model\\":\\"GigaCheckClassification\\"}");

Request request = new Request.Builder()
  .url("https://gigachat.devices.sberbank.ru/api/v1/ai/check")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .build();

Response response = client.newCall(request).execute();`,
    text: `GET /api/v1/ai/check HTTP/1.1
Host: gigachat.devices.sberbank.ru
Authorization: Bearer <token>
Content-Type: application/json

{
  "input": "Первый искусственный спутник Земли",
  "model": "GigaCheckClassification"
}`,
};

export const codeLanguages = Object.keys(codeByLanguage);

export const getCodeByLanguage = (text: string) => codeByLanguage[text as keyof typeof codeByLanguage] ?? text;

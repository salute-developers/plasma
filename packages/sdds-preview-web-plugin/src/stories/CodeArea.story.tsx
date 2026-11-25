import { IconCopyOutline } from '@salutejs/plasma-icons';
import { codeAreaConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ReactNode } from 'react';

const CodeArea = component(mergeConfig(codeAreaConfig as any, {}));

const codeByLanguage: Record<string, string> = {
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

const codeLanguages = Object.keys(codeByLanguage);

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const slotBorder = '#9747FF 0.063rem, transparent 0.063rem';

const SlotContent = ({ children }: { children: ReactNode }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3rem',
            background: [
                `linear-gradient(to right, ${slotBorder}) 0 0`,
                `linear-gradient(to right, ${slotBorder}) 0 100%`,
                `linear-gradient(to left, ${slotBorder}) 100% 0`,
                `linear-gradient(to left, ${slotBorder}) 100% 100%`,
                `linear-gradient(to bottom, ${slotBorder}) 0 0`,
                `linear-gradient(to bottom, ${slotBorder}) 100% 0`,
                `linear-gradient(to top, ${slotBorder}) 0 100%`,
                `linear-gradient(to top, ${slotBorder}) 100% 100%`,
            ].join(', '),
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1rem 1rem',
        }}
    >
        {children}
    </div>
);

const CodeAreaDefault = {
    name: 'Default',
    args: [
        {
            name: 'language',
            value: 'json',
            items: toItems(codeLanguages),
        },
        {
            name: 'showLineNumbers',
            value: false,
        },
        {
            name: 'hasContentOuter',
            value: false,
        },
        {
            name: 'hasHeaderSlot',
            value: false,
        },
        {
            name: 'hasDivider',
            value: false,
        },
        {
            name: 'hasAction',
            value: false,
        },
        {
            name: 'width',
            value: '640px',
        },
        {
            name: 'height',
            value: 'auto',
        },
    ],
    render: function Story(args: any) {
        const { hasContentOuter, hasHeaderSlot, hasAction, width, height, language, ...rest } = args;

        return (
            <div style={{ width: width || undefined, height: height || undefined }}>
                <CodeArea
                    {...rest}
                    language={language}
                    contentAction={
                        hasAction ? (
                            <IconCopyOutline size="s" color="inherit" style={{ cursor: 'pointer' }} />
                        ) : undefined
                    }
                    contentHeader={hasHeaderSlot ? <SlotContent>Header</SlotContent> : undefined}
                    contentOuter={hasContentOuter ? <SlotContent>Content</SlotContent> : undefined}
                >
                    {codeByLanguage[language] ?? language}
                </CodeArea>
            </div>
        );
    },
};

export const CodeAreaStories = [CodeAreaDefault];

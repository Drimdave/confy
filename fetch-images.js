const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const html1 = await fetchUrl('https://ibb.co/kgGxZvkX');
  const match1 = html1.match(/https:\/\/i\.ibb\.co\/[^"']+/);
  console.log('URL1:', match1 ? match1[0] : 'not found');
}

run();

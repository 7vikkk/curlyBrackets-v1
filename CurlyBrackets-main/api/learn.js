export default function handler(req, res) {
  res.writeHead(302, { Location: 'https://curly-brackets-v1-okzh.vercel.app/learn' });
  res.end();
}

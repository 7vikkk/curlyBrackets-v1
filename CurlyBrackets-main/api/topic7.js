export default function handler(req, res) {
  res.writeHead(302, { Location: 'https://your-frontend-url.vercel.app/topic7' });
  res.end();
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, GET!' });
  } else if (req.method === 'POST') {
    res.status(201).json({ message: 'Hello, POST!', body: req.body });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: 'Hello, PUT!' });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: 'Hello, DELETE!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

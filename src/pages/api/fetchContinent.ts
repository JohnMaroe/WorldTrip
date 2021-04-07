import { api } from '../../services/api';

export async function getData() {
  const data = await api.get(`continents`);
  return data;
}

export default async function handler(req, res) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}
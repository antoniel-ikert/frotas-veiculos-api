import pool from '../config/db.js';

class ProdutoService {
 
  async create({elementos tabekla}) {
    const query = `
      INSERT INTO produtos (elementos tabela)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [elementos tabela];
 
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async getall() {
    const query = 'select * from produtos;';
    const { rows } = await pool.query(query);
    return rows;
  }
}

export default new ProdutoService();

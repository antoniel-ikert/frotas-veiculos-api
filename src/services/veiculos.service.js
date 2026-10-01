import pool from '../config/db.js';

class ProdutoService {
 
  async create({id, modelo, marca, ano, placa}) {
    const query = `
      INSERT INTO produtos (id, modelo, marca, ano, placa)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [id, modelo, marca, ano, placa];
 
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async getall() {
    const query = 'select * from veiculos;';
    const { rows } = await pool.query(query);
    return rows;
  }
}

export default new ProdutoService();

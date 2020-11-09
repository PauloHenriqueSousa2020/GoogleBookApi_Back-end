const connection = require('../database/connection');

module.exports = {

  async index(request, response){
    const books = await connection('favorite_books').select('*');

    return response.json(books);
  },


  async create(request, response){
    const { id, thumbnail, title, authors, description, language, 
    pageCount, publisher, amount, previewLink, infoLink} = request.body;
    
    const [id_book] = await connection('favorite_books').insert({
      id, thumbnail, title, authors, description, language, 
      pageCount, publisher, amount, previewLink, infoLink
    })

  
    return response.json({ id_book });
  },

  async delete(request, response){
    const { id } = request.params;

    const book = await connection('favorite_books').where('id', id).select('id').first();

    if(book.id != id){
      return response.status(401).json({ error: 'Operation not permitted.'});
    }
    
    await connection('favorite_books').where('id', id).delete();

    return response.status(204).send();
  }
}
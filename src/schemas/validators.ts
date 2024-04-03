import * as Yup from 'yup';

export const bookSchema = Yup.object().shape({
  title: Yup.string().required('Titulo obrigatório'),
  author: Yup.string().required('Autor Obrigatorio'),
  isbn: Yup.string().required('Isbn é obrigatório').max(17, 'Tamanho máximo permitido para o isbn é 17 caracteres'),
  yearOfPublication: Yup.number().required('Data de publicação é obrigatorio'),
  publisher: Yup.number().required('Editora é obrigatório'),
});

export const publisherSchema = Yup.object().shape({
  name: Yup.string().required('Nome da Editora obrigatório'),
});
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

const schema = Yup.object({
  schoolName: Yup.string().required('必須の項目です'),
  mail: Yup.string().email("メール形式である必要があります！").required('必須の項目です'),
  date: Yup.string().required('必須の項目です')
})

export default yupResolver(schema)
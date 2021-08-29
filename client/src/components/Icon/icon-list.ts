import { AiOutlineSave } from '@react-icons/all-files/ai/AiOutlineSave'
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight'
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft'

// https://react-icons.github.io/react-icons/icons?name=ti
import { TiDocumentText } from '@react-icons/all-files/ti/TiDocumentText'
import { TiCogOutline } from '@react-icons/all-files/ti/TiCogOutline'
import { TiPhoneOutline } from '@react-icons/all-files/ti/TiPhoneOutline'
import { TiTimes } from '@react-icons/all-files/ti/TiTimes'
import { TiPlusOutline } from '@react-icons/all-files/ti/TiPlusOutline'
import { TiMinusOutline } from '@react-icons/all-files/ti/TiMinusOutline'
import React from 'react'

const ICON_LIST: { [index: string]: React.ElementType } = {
  save: AiOutlineSave,
  'rigth-arrow': AiOutlineRight,
  'left-arrow': AiOutlineLeft,
  document: TiDocumentText,
  gear: TiCogOutline,
  phone: TiPhoneOutline,
  cross: TiTimes,
  plus:TiPlusOutline,
  minus:TiMinusOutline
}
export default ICON_LIST

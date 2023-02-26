import { getSessionStorage } from '@/utils'
import { StorageEnum } from '@/enums/storageEnum'
import { ChartEditStorage, ChartEditStoreEnum, EditCanvasConfigEnum } from '@/store/modules/chartEditStore/chartEditStore.d'

export interface ChartEditStorageType extends ChartEditStorage {
  id: string,
}

const getId = () => {
  const urlHash = document.location.hash
  const toPathArray = urlHash.split('/')
  const id = toPathArray && toPathArray[toPathArray.length - 1]
  return id;
}

// 根据路由 id 获取存储数据的信息
export const getSessionStorageInfo = () => {
  const id = getId()

  const storageList: ChartEditStorageType[] = getSessionStorage(
    StorageEnum.GO_CHART_STORAGE_LIST
  )

  if(!storageList) return

  for (let i = 0; i < storageList.length; i++) {
    if (id.toString() === storageList[i]['id']) {
      return storageList[i]
    }
  }
}

import { readsCompileJSON } from '@/utils'

// 根据路由id 获取储存在编译JSON文件中的数据
export const getCompileStorageInfo = () => {
  const id = getId()

  const storageList: ChartEditStorageType[] = readsCompileJSON()

  if(!storageList) return

  for (let i = 0; i < storageList.length; i++) {
    if (id.toString() === storageList[i]['id']) {
      return storageList[i]
    }
  }
}
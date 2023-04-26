import { ref } from 'vue'

const useIuPicture = () => {
  const iuPicture = ref('https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg')

  function setNewPicture() {
    iuPicture.value = 'New Image'
  }

  return {
    iuPicture,
    setNewPicture
  }
}

export default useIuPicture